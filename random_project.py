# The project is all about 
# You need to guess a number that is user_input, system generates a random number.
# Here the random number(target) and (user_input) must be compared.
# if the user_input and target matches then quit message appears.
# if the user_input < target , then you have to display a message that "Your number is too small guess a big number".
# if the user_input > target then you have to dispay a message that "Your number is too big guess a small number"

import random
# Here random is a class 
# We are importing random class to use the method "randint"
# Here randint() has two parameters(1,100)
# where 1 and 100 are included for choosing a random number. 
target=random.randint(1,100)

# you need to comment the 17th line so that we can guess the "user_choice".
# if you don't comment then it means you are displaying the "target".
print("The random number is: ",target)

while True:
    # in this the user may enter capital or small letters so we need to convert it to small letters.
    user_input = input("Please guess the number: ")
    # Check if user wants to quit

    if user_input.lower() == "quit": 
        print("You quit the game!")
        break
    
    # Convert to integer only if not quit
    # we are converting the user_input to an integer because user_input is by default a string.
    user_choice = int(user_input)

    # In this we are evaluating th three possible conditions.

    if user_choice == target :
        print("You have guessed the right number that matches the Target!!")
        break

    elif user_choice < target :
        print("Your number was too small guess a bigger number!!")
        break

    elif user_choice > target :
        print("Your number was too big guess a smaller number!!")
        break

print("GAME OVER ")    