# Inputs

1. variable with a name of  value1 with the initial value of "" blank, a string type

2. variable with a name of value2 with the initial value of "" blank, a string type

3. variable with a name of operator with the initial value of "" blank, a string type

 

# Outputs

# Bugs
a string type that will display the calculated answer of the variables inputed by the user, a variable named answer, that will be displayed.

# Happy Path - where the user do the steps accordingly

## WHEN the user clicked on the number

- if the value on the display is equal to zero, replace the zero with the clicked number
- if the values on the display is not equal to zero, append the clicked number to the display


## WHEN the user clicked on the operator 

- the button of the clicked operator will change color to show that it is clicked
    - if the user clicked another operator, the previous operator will remove its highlight and the latest operator clicked will be highlighted
    - if the user clicked a number, the highlight will stay on the latest operator clicked until another operator is clicked

- the numbers on the display will be saved, the latest operator that was clicked will also be saved

## WHEN the user clicked on a number

- if the last clicked button is an operator, the values on the display should be replaced with the new clicked number button
- if the last clicked button is a number, the values should append the clicked number to the display as usual

## WHEN the user clicked on the equals operator

the number on the display should be replaced with the calculated answer between value1 and value 2 

get the value1,value2,operator as parameters to a function called calculate

put the output of the calculate function in a variable called answer

# Bugs