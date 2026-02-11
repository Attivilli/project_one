const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());

/* Convert Currency */
app.post("/convert", async (req, res) => {
  try 
  {
    const { amount, from, to } = req.body;

    if (!amount || !from || !to) {
      return res.status(400).json({
        error: "amount, from, to are required",
      });
    }

    const rateResult = await pool.query(
      `SELECT rate FROM exchange_rates
       WHERE from_currency=$1 AND to_currency=$2`,
      [from, to]
    );

    if (rateResult.rows.length === 0) {
      return res.status(404).json({
        error: "Exchange rate not found",
      });
    }
/*By using const we cannot redeclare and reassign the variable*/ 
    const rate = rateResult.rows[0].rate;
    const convertedAmount = amount * rate;

    res.json({
      from,
      to,
      amount,
      rate,
      convertedAmount,
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/* Update Exchange Rate */
app.post("/rate", async (req, res) => {
  try {
    const { from, to, rate } = req.body;

    const result = await pool.query(
      `INSERT INTO exchange_rates
       (from_currency, to_currency, rate)
       VALUES ($1,$2,$3)
       RETURNING *`,
      [from, to, rate]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3000, () => {
  console.log("Currency API running on port 3000");
});
