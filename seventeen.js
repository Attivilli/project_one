/* ES-6 Fundamentals */
/* Logical AND Examples */
let a=true;
let b=false;
let logical_and=a&&b;
console.log(logical_and);

let c=true;
let d=true;
let logical_andd=c&&d;
console.log(logical_andd);

/* Logical OR Examples */
let e=true;
let f=false;
let logical_or=e||f;
console.log(logical_or);

let g=true;
let h=true;
let logical_orr=g||h;
console.log(logical_orr);

/* Functions concepts */
function m2(number)
{
    return number;
}

let i="Vikram";
let j=false;
let k=0;
let l="";
let m=100;

/* Part one */
{
result=m2("Vamsi");
console.log(result);  /* Vamsi */

let compare=(i || result);
console.log(compare); /* Vikram */

let comparee=(j || result);
console.log(comparee); /*Vamsi */

let compareee=(k || result);
console.log(compareee); /* Vamsi */

let compareeee=(l || result);
console.log(compareeee); /* Vamsi */

let compareeeee=(k || m);
console.log(compareeeee); /* 100 */
}

/* Part two */
{
result=m2("Vamsi");
console.log(result); 

let compare=(i && result);
console.log(compare); 

let comparee=(j && result);
console.log(comparee); 

let compareee=(k && result);
console.log(compareee); 

let compareeee=(l && result);
console.log(compareeee); 

let compareeeee=(k && m);
console.log(compareeeee); 
}

/* Template Literals */
let name_one="Vamsi";
let name_two="Attivilli";
/*Way one  */
let add=name_one + " " + name_two
console.log(add);
/*Way two */
let add_one=`${name_one} ${name_two}`;
console.log(add_one);

/* Ternary operator */
/* If info is true then we will get Stumper as the output */
/* If info is false then we will get Ford as the output */
const info=false;
function m3(ball)
{
return ball;
}

function m4(car)
{
    return car;
}

if(info)
{
    c_one=m3("Stumper");
    console.log(c_one);
}
    else
{
    c_two=m4("Ford");
    console.log(c_two);
}

/* Key value pair */
const id=121;
const p_name="Apple Iphone One Plus";
const p_code=12345;

/* General Key value pair */
const product={
    id:id,
    p_name:p_name,
    p_code:p_code
};
console.log(product);

/* Short Hand Key Value pair */
const product_one={
   id,
   p_name,
   p_code
};
console.log(product_one);

/* Destructuring concept. */
/* General Way */
const data={
    name:"Vamsi_Attivilli",
    age:28,
    gender:"Male",
};

console.log(data.name);
console.log(data.age);
console.log(data.gender);
console.log(data);

/*Way two */
/* We are storing the result wrt a varable using const_variable.key*/
/* We are extracting key value pair from const variable using const_variable.key then vvalue can be extracted */
const name_print=data.name;
console.log(name_print);

const age_print=data.age;
console.log(age_print);

const gender_print=data.gender;
console.log(gender_print);

/* Now Iam trying to change the name of the value wrt to different value name */
data.name="Attivilli_ Vamsi";
console.log(data);

/* Array Implementation */
let array=[1,2,3,4,5];

let first_element=array[0];
console.log(first_element);

let second_element=array[1];
console.log(second_element);

let third_element=array[2];
console.log(third_element);

let fourth_element=array[3]
console.log(fourth_element);

let fifth_element=array[4]
console.log(fifth_element);

/* We can print array elements side by side also */
console.log(first_element,second_element,third_element,fourth_element,fifth_element);

/* Default parameters, spread and rest parameters */
/* Default parameters in one word : While Function calling parameters are not present then the 
parameters are taken from the "function definition"*/ 
/* Rest parameters : ... */
function mul_of_two_numbers(num_one=1,num_two=2)
{
    console.log(num_one,num_two);
    mul=(num_one*num_two);
    return mul;
}
multiply=mul_of_two_numbers(10,20);
console.log(multiply);

/* Type two */
function mul_of_two_numberss(num_thr=3,num_fou)
{
    console.log(num_thr,num_fou);
    mul_one=(num_thr*num_fou);
    return mul_one;
}
multiplyy=mul_of_two_numberss(30,40);
console.log(multiplyy);

/* Type three */

function mul_of_two_numbersss(num_fiv=10,num_six=20)
{
    console.log(num_fiv,num_six);
    mul_two=(num_fiv*num_six);
    return mul_two;
}
multiplyyy=mul_of_two_numbersss();
console.log(multiplyyy);

/* Arrays */
const array_one=[1,2,3,4,5];
const array_two=[6,7,8,9,10];

/* If we want to print the elements in an array we use [] to print the elements*/
console.log(array_one);

/* If we want to print the array elements by treating them as values  */
console.log(...array_one);

/* If you want to combine two arrays wrt values we use this way */
console.log(...array_one,...array_two);

/* If you want to add elements from front,from middle, from last */
console.log(999,...array_one,90,...array_two,100);

/* By using (...) as three parameters in function definition */
/* In this we are combining two (printing a and b as values) */
/* Printing the remaining three elements wrt size of an array + element representation */
/* Rest parameters must be in the last in the function definition not first parameter */
function new_concept(a,b,...c)
{
    console.log(a,b,c); /* 1 2 [3,4,5] */
    return "Vamsi Attivilli";
}

print_sum_wrt_par=new_concept(1,2,3,4,5);
console.log(print_sum_wrt_par); /* Vamsi Attivilli */

/* Model two */
function new_concept(a,b,...c)
{
    console.log(a);
    console.log(b);
    console.log(c);
    return "Vamsi Attivilli";
}

print_sum_wrt_par=new_concept(1,2,3,4,5);
console.log(print_sum_wrt_par); /* Vamsi Attivilli */

/* Here for of is similar to for each loop in python */
/* This is used to extract each number from  group of numbers */
function sum_of_numbers(...numbers)
    {
        let sum=0;
        for (let num of numbers)
        {
            sum=sum+num;
        }
        return sum;
    }
total_sum=sum_of_numbers(1,2,3,4,5);
console.log("The sum of numbers is: ",total_sum);
    
/* Now Iam interested in adding new elements */
function new_conceptt(a,b,...c)
{
    console.log(a,b,c); /* 1 2 [3,4,5,6,7,8,9,10] */
    return "Vamsi Attivilli";
}

print_sum_wrt_parr=new_conceptt(1,2,3,4,5,6,7,8,9,10);
console.log(print_sum_wrt_parr); /* Vamsi Attivilli */

/* Now interested in passing parametrs different way */
function new_concepttt(a,...c)
{
    console.log(a,c); /* 1 [2,3,4,5,6,7,8,9,10] */
    return "Vamsi Attivilli";
}

print_sum_wrt_parrr=new_concepttt(1,2,3,4,5,6,7,8,9,10);
console.log(print_sum_wrt_parrr); /* Vamsi Attivilli */

/* Map method */
let numbers=[1,2,3,4,5];
let result=numbers.map(num=>num*2);
console.log(result);

/* You declared an array named : Array_one */
/* array_one contains three objects */
/* In object key-value pairs are present */
const arrayy_one=
[
    {
        name:"Vikram",
        age:28,
        address:"Visakhapatnam"
    },

    {
        name:"Siddharth",
        age:29,
        address:"Chennai"
    },

    {
        name:"Sangam",
        age:30,
        address:"Mumbai"
    },
];

/* Now Iam printing all the 3 person's data one by one */
/* Now Iam expecting to bring names under one roof  */
let names_of_array_one=arrayy_one.map((key,value)=> 
    {
        console.log(key,value);
        return key.name ;
    });    
total_names=console.log(names_of_array_one);
console.log(total_names);

/* Example two */
let ages_of_array_one=arrayy_one.map((keyy,valuee)=>
    {
        console.log(keyy,valuee);
        return keyy.age; 
    });
total_ages=console.log(ages_of_array_one);
console.log(total_ages);    

/* Example three */
let addresses_of_array_one=arrayy_one.map((keyyy,valueee)=>
    {
        console.log(keyyy,valueee);
        return keyyy.address; 
    });
total_addresses=console.log(addresses_of_array_one);
console.log(total_addresses); 

/* Example four */
let data_of_array_one=array_one.map((key,value)=> 
    {
        console.log(key,value);
        return `${key.name} age is ${key.age} address is ${key.address}`;
    });    
total_names=console.log(data_of_array_one);
console.log(total_names);

/* 18-01-2025 */
/* find()*/
/* Example one */
let result_one=array_one.find((objects_data,index)=>
    {
        console.log(objects_data,index);
        return objects_data.name=="Vikram";
    });

let get_data_wrt_name=result_one;
console.log(get_data_wrt_name);

/* Example two : find() */
/* In this, two objects hold same country data */
/* By using find() it generates the first data but not the second data.  */
/* By using filter() we can get two objects data which matches the condition */
const array_thr=
[
    {
        name:"Vaarun",
        age:31,
        country:"USA"
    },

    {
        name:"Vikram",
        age:28,
        country:"USA"
    },

    {
        name:"Siddharth",
        age:29,
        country:"Russia"
    },

    {
        name:"Sangam",
        age:30,
        country:"India"
    },
];
/* We will get one person data that is the first one */
/* In this, we are trying find() the object that matches the 
condition(first present,only returns one) */

let result_thr=array_thr.find((objects_data,index)=>
    {
        console.log(objects_data,index);
        return objects_data.country=="USA";
    });

let get_single_obj_data_wrt_country=result_thr;
console.log(get_single_obj_data_wrt_country);

/* In this, we will get complete data which matches the condition */
/* In this multiple objects which matches the condition those multiple objects
   data is extracted by the condition by using filter() */
/* objects _data: holds complete object's data combinely */
/* This can be withdraw objects that matches the condition   */ 
let result_four=array_thr.filter((objects_data,index)=>
    {
        console.log(objects_data,index);
        return objects_data.country=="USA";
    });

let get_complete_data_wrt_country=result_four;
console.log(get_complete_data_wrt_country);

/* using some(), to verify wheather the condition is true or false */
/* return type of some(): boolean */
let generate_boolean=array_thr.some((objects_data,index)=>
    {
      console.log(objects_data,index);
      return objects_data.age>29;
    });

let collect_data_wrt_condition=generate_boolean;
console.log(collect_data_wrt_condition);

/* every() is used to check each and every object data wrt condition. */
/* If the condition matches all the object data then true otherwise false  */
/* every() return type is boolean */
let generate_object_data=array_thr.every((objects_data,index) =>
{
    return objects_data.country=="USA"
});

let verify_each_object_data_wrt_condition=generate_object_data;
console.log(verify_each_object_data_wrt_condition);

/* every() second example */
let generatee_object_dataa=array_thr.every((objects_data,index)=>
{
    return objects_data.country=="USA";
});

let verify_each_obj_data_wrt_cond=generatee_object_dataa;
console.log(verify_each_obj_data_wrt_cond);

/* findIndex() : If the element is present the it returns index */
/* Return type of findIndex() is : number */

/* If the element is present then it returns index number */
let find_index=array_thr.findIndex((objects_data,index) =>
{
    return objects_data.country=="USA"; 
});

return_index_if_obj_is_present=find_index;
console.log(return_index_if_obj_is_present);

/* If the element is not present then it returns -1 */
let findd_index=array_thr.findIndex((objects_data,index) =>
{
    return objects_data.country=="Japan"; 
});

return_index_if_obj_is_present=findd_index;
console.log(return_index_if_obj_is_present);

/* Return type of includes is boolean */
/* includes() means it is used to find element in the array are present 
and it returns true or false */
const array_four=["apple","banana","orange"];
let resultt=array_four.includes("orange");
console.log(resultt);

/* Now we are including includes (+) indexOf wrt to the object  */
/* In this element is present, and it is returning the index */
/* Return type of indexOf() is : number */
let resultt_one=array_four.includes("orange"); 
let resultt_two=array_four.indexOf("orange");
console.log(resultt_one,resultt_two);

/* If the element is not present then the index will be -1 */
let resultt_three=array_four.includes("Sangam"); 
let resultt_four=array_four.indexOf("Sangam");
console.log(resultt_three,resultt_four);


async function fetchUsers() {
    try {
        // Step 1: Make API request
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Step 2: Convert response to JSON
        let data = await response.json();

        // Step 3: Use the data
        console.log(data);

    } catch (error) {
        console.log("Error:", error);
    }
}

fetchUsers();



