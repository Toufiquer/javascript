/* =================================================== 
# from w3 school
------------------------------------------------------
#### JavaScript Introduction
$ JavaScript is the programming language of the Web. and it can Change HTML Content.
$ JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.
$ ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.

@@@@ Where to JavaScript use or called
$ Inside in html
; <script>
;  document.getElementById("demo").innerHTML = "My First JavaScript";
; </script>

$ Inline JavaScript
; <button type="button" onclick="myFunction()">Try it</button>

$ External JavaScript
; <script src="myScript.js"></script>

$ External References
; <script src="https://www.w3schools.com/js/myScript.js"></script>


@@@@ JavaScript Output
$ Writing into an HTML element, using innerHTML.
$ Writing into the HTML output using document.write().
$ Writing into an alert box, using window.alert().
$ Writing into the browser console, using console.log().
! Using document.write() after an HTML document is loaded, will delete all existing HTML

@@@@JavaScript Statements
; let x, y, z;    // Statement 1
; x = 5;          // Statement 2
$ A computer program is a list of "instructions" to be "executed" by a computer.
$ In a programming language, these programming instructions are called statements.
$ A JavaScript program is a list of programming statements.
$ Semicolons separate JavaScript statements.
$ A good practice is to put spaces around operators ( = + - * / )

! Reserved keyword => var, let, const, if, switch, for, function, return, try, ...;

$ values, variables, and operators => is made a JavaScript Expressions
$ Values, Operators, Expressions, Keywords, and Comments => is made a JavaScript Statements
$ JavaScript Values => Fixed Values and Variable Values;
$ Fixed values are called Literals (Const);
$ variable values are variable;
* Arithmetic operators => + - * / to compute values
* JavaScript uses an assignment operator ( = ) to assign values to variables

@@@@ JavaScript Syntax
$ JavaScript syntax is the set of rules, how JavaScript programs are constructed
& 1. Numbers are written with or without decimals // 10.50, 1001
& 2. Strings are text, written within double or single quotes // "Jones", 'Jones'
& 3. JavaScript uses the keywords var, let and const to declare variables.
    ; let x = 5;
    ; var y = 6;
    ; const z = 3;

* An expression is a combination of values, variables, and operators, which computes to a value. (The computation is called an evaluation. For example, 5 * 10 evaluates to 50)

! Hyphens are not allowed in JavaScript. They are reserved for subtractions.


@@@@ Comments
$ Not all JavaScript statements are "executed" Code after double slashes // or between /* and */ /* is treated as a comment. Comments are ignored, and will not be executed


@@@@ JavaScript Variables
$ var, let, const

$ $ is valid as a variable names
& declare variable in one line =>var a = 3, b = 2, c = 1;
* Variables are containers for storing values.
!! You cannot re-declare a variable declared with let or const

@@ JavaScript Var
$ var =>  can be Redeclared.
$ var =>  is Global Scope.
$ var =>  must not be Declared before use.
; console.log(x)
; var x= 5;
$ the code is working

!! Here two var (x) are different 
! remember that functional scope and global scope are others scope,
; var x = 5;
; console.log(x) // result 5
; functions myFunc(){
;     var x = 55;
;     console.log(x) // result 55;  and 5 is global var;
; }
; console.log(x) // result 5;  and 55 in a functional scope;
; 
* => Other hand
; if(true){
;   var x = 66;
;   console.log(x) // result 66 ;  and global var is change to 66;
; }
 

@@ JavaScript Let
$ let => cannot be Redeclared.
$ let => is Block Scope.
$ let => must be Declared before use.
; if(true){
;  let x = 44;
; }
; console.log(x) // x is not defined
! Variables defined with let are also hoisted to the top of the block, but not initialized


@@ JavaScript Const
$ const => cannot be Redeclared.
$ const => is Block Scope.
$ const => cannot be Reassigned.

$ Use const when you declare
$ A new Array
$ A new Object
$ A new Function
$ A new RegExp

! Variables defined with const are also hoisted to the top of the block, but not initialized
// You can create a constant array:
; const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
; cars[0] = "Toyota";
// You can add an element:
; cars.push("Audi");
! But can't again assign(=) like, cars = ["Saab", "Volvo", "BMW"]


@@ JavaScript Arithmetic Operators
* Operator	Description
&  +    	Addition
&  -    	Subtraction
&  *    	Multiplication
&  =        Assignment
&  **       Exponentiation (ES2016)
&  /    	Division
&  %    	Modulus (Division Remainder)
&  ++       Increment
&  --       Decrement


@@ JavaScript Assignment Operators
* Operator	    Example	    Same As
&  =      	    x = y	    x = y
&  +=     	    x += y	    x = x + y
&  -=     	    x -= y	    x = x - y
&  *=     	    x *= y	    x = x * y
&  /=     	    x /= y	    x = x / y
&  %=     	    x %= y	    x = x % y
&  **=          x **= y	    x = x ** y

!! When used on strings, the + operator is called the concatenation operator. 
; const x = "first Strings" + " " + "second Strings" // x = "first Strings second Strings"

@@ JavaScript Comparison Operators
* Operator	        Description
& ==	            equal to
& ===	            equal value and equal type
& !=	            not equal
& !==	            not equal value or not equal type
& >	                greater than
& <	                less than
& >=	            greater than or equal to
& <=	            less than or equal to
& ? :	            ternary operator (if else condition)

! object(array is also an object) is not comparison able.

@@ JavaScript Logical Operators
* Operator	    Description
& &&	        logical and
& ||	        logical or
& !	            logical not

@@ JavaScript Type Operators
* typeof	    => Returns the type of a variable
* instanceof	=> Returns true if an object is an instance of an object type

@ JavaScript Operators and Operands
$ The numbers (in an arithmetic operation) are called operands.
$ The operation (to be performed between the two operands) is defined by an operator.
$ Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
$ And (as in school mathematics) the precedence can be changed by using parentheses:
*  Operand	Operator	Operand
&  100	        +	    50

@ JavaScript Data type
$ 1.Strings
$ 2.Numbers
$ 3.Booleans (true & false)
$ 4.Undefined
$ 5.Objects
; const a = [1,2,3,4,5]
; const b = {name: "Abdullah",roll: 33}
* both are return typeof object
* a instanceof Array;  // Returns true


@@ JavaScript Function
$ A JavaScript function is a block of code designed to perform a particular task.
$ A JavaScript function is executed when "something" invokes it (calls it).
$ Function parameters are listed inside the parentheses () in the function definition.
$ Function arguments are the values received by the function when it is invoked.
$ Inside the function, the arguments (the parameters) behave as local variables.

; const runFunction(){
;    var x = "first Strings"
;    return x;
;}
; if(true){
;    var y = "second Strings"
;    return y;
;}

* here x is not global scope;
* here y is global scope;

@@ Function Invocation
& The code inside the function will execute when "something" invokes (calls) the function
& 1.When an event occurs (when a user clicks a button)
& 2.When it is invoked (called) from JavaScript code
& 3.Automatically (self invoked)

; function myFunction(parameter1,parameter2)=>{
;     return a+b
; }
; console.log(myFunction(arguments1,arguments2))


@@ JavaScript Objects
$ Objects are variables too. But objects can contain many values.
; const objectName = {Property: "Property Values"};  // contains name and value pair.
$ Accessing Object Properties
; 1. objectName.propertyName
; 2. objectName["propertyName"] // "string" or objectName[variables]

; const person = {
;   firstName: "John",
;   lastName : "Doe",
;   id       : 5566,
;   fullName : function() {
;     return this.firstName + " " + this.lastName;
;   }
; };

$ In an object method, this refers to the object.
$ Alone, this refers to the global object.
$ const x = () => {...} this refers to the global object.
$ In a function, this refers to the global object.
$ In a function, in strict mode, this is undefined.
$ In an event, this refers to the element that received the event.
$ Methods like call(), apply(), and bind() can refer this to any object.


@@ Accessing Object Methods
; objectName.methodName()
; let personFullName = person.fullName()
& Methods are actions that can be performed on objects.
& Methods are stored in properties as function definitions.

@@ this
* => In an object method, this refers to the object.
* => Alone, this refers to the global object.
* => In a function, this refers to the global object.
* => In a function, in strict mode, this is undefined.
* => In an event, this refers to the element that received the event.
* => Methods like call(), apply(), and bind() can refer this to any object.
* => In a function definition, this refers to the "owner" of the function.

@@ JavaScript Events(HTML events)
*  Event	        Description
&  onchange	        An HTML element or input has been changed
&  onclick	        The user clicks an HTML element
&  onmouseover	    The user moves the mouse over an HTML element
&  onmouseout	    The user moves the mouse away from an HTML element
&  onkeyup	        The user pushes up  a keyboard key
&  onkeydown	    The user pushes down a keyboard key
&  onload	        The browser has finished loading the page
                
@@ JavaScript Strings
; let carName1 = "Volvo XC60";  // Double quotes
; let carName2 = 'Volvo XC60';  // Single quotes
; let answer3 = "He is called 'Johnny'";
; let answer4 = 'He is called "Johnny"';
; let answer5 = "He is called \"Johnny\" Bro";
; let answer6 = `This 'is' "string".` // This called as Template Literals

#### *** Strings *** ---
* At a glance string
& const stringText = "ABCDE ABCDE XYZ ABCD \"XYZ\""
& ==> stringText.length
& ==> stringText.slice(3, 9)
& ==> stringText.substring(3, 9)
& ==> stringText.substr(3, 9)
& ==> stringText.replace("XYZ", "MNO")
& ==> stringText.toUpperCase()
& ==> stringText.toLocaleLowerCase()
& ==> stringText.concat(" ", "Peter")
& ==> stringText.trim()
& ==> stringText.padStart(4,"x")
& ==> stringText.padEnd(4,"0")
& ==> stringText.charAt(0)
& ==> stringText.charCodeAt(0)
& ==> stringText[0]
& ==> stringText.indexOf("ABCDE")
& ==> stringText.lastIndexOf("ABCDE")
& ==> stringText.search("ABCDE")
& ==> stringText.match("D")
& ==> stringText.includes("D",2)            // Returns true || false
& ==> stringText.startsWith("ABCDE",7);     // Returns true || false
& ==> stringText.endsWith("CD",7);          // Returns true || false

!! Converting a String to an Array. 
& stringText.split("")
& stringText.split(",")
& stringText.split(" ")
& stringText.split("|")

$ String Length
; let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
; let length = text.length;

$ Escape Character
*   Code	Result	    Description
&   \'	    '       	Single quote
&   \"	    "       	Double quote 
&   \\	    \       	Backslash

$ Six other escape sequences are valid in JavaScript
*   Code	Result
&   \b	    Backspace
&   \f	    Form Feed
&   \n	    New Line
&   \r	    Carriage Return
&   \t	    Horizontal Tabulator
&   \v	    Vertical Tabulator

* Breaking Long Code Lines (Not recommended)
; document.getElementById("demo").innerHTML = "Hello \
; Dolly!";
* => recommended 
; document.getElementById("demo").innerHTML = "Hello " +
; "Dolly";

! Comparing two JavaScript objects always returns false.
! The \ method is not the preferred method. It might not have universal support. Some browsers do not allow spaces behind the \ character.

### JavaScript String Methods
===============================

@@ Extracting String Parts
$ slice(start, end)
$ substring(start, end)
$ substr(start, length)

; const x = "123456789";
; const xx = x.slice(-7, -5); // Returns 34
; const xx = x.slice(2, 5); // Returns 345
; const xx = x.substring(2, 5); // Returns 345
; const xx = x.substring(-7, -5); // Returns empty
; const xx = x.substr(2, 5); // Returns 34567
; const xx = x.substr(-5); // Returns 56789

! JavaScript counts positions from zero(0).
! If a parameter is negative, the position is counted from the end of the string.
! If you omit the second parameter, the method will slice out the rest of the string.
; let part = x.slice(7);
!! The difference is that start and end values less than 0 are treated as 0 in substring(). 
!! The difference is that the second parameter specifies the length of the extracted part on substr. 

@@ Replacing String Content
; let text = "Please visit Microsoft!";
; let newText = text.replace("Microsoft", "W3Schools"); // Returns newText = "Please visit W3Schools"
$ The replace() method does not change the string it is called on.
$ The replace() method returns a new string.
$ The replace() method replaces only the first match
$ If you want to replace all matches, use a regular expression with the /g flag set.

! By default, the replace() method is case sensitive.

& Converting to Upper and Lower Case
; const x = "first Strings"
; const y = x.toUpperCase()
; const y = x.toLowerCase()

% JavaScript String concat()
; let text1 = "Hello";
; let text2 = "World";
; let text3 = text1.concat(" ", text2);

! Strings are immutable: Strings cannot be changed, only replaced.

% JavaScript String trim()
; let text1 = "      Hello World!      ";
; let text2 = text1.trim(); // Returns "Hello World"

@@ JavaScript String Padding

$ JavaScript String padStart()
; let text = "5";
; let padded = text.padStart(4,"x"); // Returns "xxxx5"

$ JavaScript String padEnd()
; let text = "5";
; let padded = text.padEnd(4,"0"); // Returns "5xxxx"


@@ Extracting String Characters
$ charAt(position)
$ charCodeAt(position)
$ Property access [ ]

; let text = "HELLO WORLD";
& charAt(position)
$ The charAt() method returns the character at a specified index (position) in a string:
; let char = text.charAt(0); // Returns H

&JavaScript String charCodeAt()
$ The charCodeAt() method returns the unicode of the character at a specified index in a string:
$ The method returns a UTF-16 code (an integer between 0 and 65535).
; let char = text.charCodeAt(0); // Returns 72

& Property access [index(0,...)]
; let text = "HELLO WORLD";
; let char = text[0]; // Returns H

!Property access might be a little unpredictable:
! It makes strings look like arrays (but they are not)
! If no character is found, [ ] returns undefined, while charAt() returns an empty string.
! It is read only. str[0] = "A" gives no error (but does not work!)


@@ JavaScript String split()
; text.split("")    // Split individual elements
; text.split(",")    // Split on commas
; text.split(" ")    // Split on spaces
; text.split("|")    // Split on pipe

$ If the separator is omitted, the returned array will contain the whole string in index [0].
$ If the separator is "", the returned array will be an array of single characters
; const text = "Hello"
; text.split(); // Returns ["Hello"]
; text.split(""); // Returns ["H","e","l","l","o"]


@@@@ JavaScript String Search
; indexOf()
; lastIndexOf()
; startsWith()
; endsWith()

; let str = "Please locate where 'locate' occurs!";
$ The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
; str.indexOf("locate"); // Returns 7

$ The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
; str.lastIndexOf("locate"); // Returns 21

! Both indexOf(), and lastIndexOf() return -1 if the text is not found
! Both methods accept a second parameter as the starting position for the search
; str.str.indexOf("universe"); // Returns 28

% JavaScript String search()
$ The search() method searches a string for a specified value and returns the position of the match
; str.search("locate"); // Returns 7
! The search() method cannot take a second start position argument.
! The indexOf() method cannot take powerful search values (regular expressions).

^ JavaScript String match()
$ The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
; str.match("0"); // Returns ['o', index: 8, input: "Please locate where 'locate' occurs!", groups: undefined]

^ JavaScript String includes()
$ The includes() method returns true if a string contains a specified value.
; text.includes("world"); // Returns true
! includes is case sensitive 

@@ JavaScript String startsWith()
$ The startsWith() method returns true if a string begins with a specified value, otherwise false

; let text = "Hello world, welcome to the universe.";
; text.startsWith("Hello"); // Returns true
; text.startsWith("world", 6)    // Returns true

! The startsWith() method is case sensitive. 


@@ JavaScript endsWith()
; let text = "John Doe";
; text.endsWith("Doe"); // Returns true
; let text2 = "He is out best teacher"
; text2.endsWith("is", 5)  ; // Returns true



@@@@ JavaScript Template Literals
!! `  => called back-tics syntax 
; let firstName = "John";
; let lastName = "Doe";
; let text = `Welcome ${firstName}, ${lastName}!`;

$ Template Literals use back-ticks (``) rather than the quotes ("") to define a string
$ With template literals, you can use both single and double quotes inside a string
$ Template literals allows multiline strings
$ Template literals allow variables in strings
! Template literals allow variables in strings
! Automatic replacing of variables with real values is called string interpolation.


#### JavaScript Numbers
* At a glance Numbers
* let x = 500
& ==> isNaN(x)                  // false (x is a number)
& ==> isNaN(infinity) (returned on overflow)    // false & infinity is a number
& ==> isNaN(-infinity) (returned on overflow)   // false & -infinity is a number
& ==>
& ==> x.toString()              // Returns string ("500")
& ==> x.toString(16)            // Hexadecimal
& ==> x.toString(10)            // decimals
& ==> x.toString(8)             // octal
& ==> x.toString(2)             // Binary
& ==> x.toExponential(6);       // Returns 9.656000e+0
& ==> x.toFixed(6);             // Returns 9.656000
& ==> x.toPrecision(6);         // Returns 9.65600
& ==>
& ==> let newNumber = 0xFF;     // Hexadecimal (255)
& ==> let newNumber = 051;      // Octal (41)
& ==> let newNumber = 41;       // Decimal (41)
& ==> (3+120.554).valueOf();    // Returns 123.554
& ==> 
& ==> Number("10.33");          //Return 10.33
& ==> Number("10,33");          //Return NaN
& ==> parseFloat("10.99");      //Return  10.99
& ==> parseFloat("10 20 30");   //Return  10
& ==> 
& ==> x.MAX_VALUE;              // Returns undefined
& ==> x.MAX_VALUE;              // Returns undefined
& ==> x.MIN_VALUE;              // Returns undefined
& ==> x.POSITIVE_INFINITY;      // Returns undefined
& ==> x.NEGATIVE_INFINITY;      // Returns undefined
& ==> x.NaN;                    // Returns undefined

$ JavaScript has only one type of number. Numbers can be written with or without decimals.
! JavaScript Numbers are Always 64-bit Floating Point
$ Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
; let x = 999999999999999;   // x will be 999999999999999
; let y = 9999999999999999;  // y will be 10000000000000000

! Floating point arithmetic is not always 100% accurate
; let x = 0.2 + 0.1; // Returns 0.30000000000000004
$ To solve the problem above, it helps to multiply and divide:
; let x = (0.2 * 10 + 0.1 * 10) / 10;


; const a = 3;
; const b = 4;
; const ab = a + b; // Returns 7
; const resultAB = "The result: " + a + b; // Returns "The result: 34"
; const resultAB =  a + b + "is the result"; // Returns "7 is the result"

; const x = "3";
; const y = "4";
; const xy = x +y; // Returns 34;

; const x = 3;
; const y = "4";
; const xy = x +y; // Returns 34;

; const x = "3";
; const y = 4;
; const xy = x +y; // Returns 34;

! for addition + is not working but * and / is working.

; const x = "3";
; const y = "4";
; const xy = x * y; // Returns 12;
; const xy = x / y; // Returns .75;
; const xy = x - y; // Returns -1;
!! + is not working because here (in String) "+" is concatenation. 

@ NaN - Not a Number
! NaN is a JavaScript reserved word indicating that a number is not a legal number.
$ Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
; let x = 100 / "Apple";  // Returns NaN
; let y = 100 / "10";  // Returns 10 (Working)
; let z = "10";  // Returns NaN (String)
; isNaN(x)     // Returns true
; isNaN(y)     // Returns false
; isNaN(z)     // Returns false (it will convert to a number)

! NaN is a number: typeof NaN returns number


@ JavaScript Infinity
$ Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

! Infinity is a number: typeof Infinity returns number.


@ Hexadecimal
$ JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x
; let x = 0xFF; // Hexadecimal
; let y = 051; // Octal in decimal it will be (41);
; let z = 41; // Decimal;

! Never write a number with a leading zero (like 07).
! Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

$ By default, JavaScript displays numbers as base 10 decimals.
$ But you can use the toString() method to output numbers from base 2 to base 36.
* Name 	        base (2-36)
* Other called base, (Alphanumeric)  
& Hexadecimal   16
& Decimal       10
& Octal         8
& Binary        2
; let x = 500;
; x.toString(16); // Returns 1f4
; x.toString(10); // Returns 500
; x.toString(8);  // Returns 764
; x.toString(2);  // Returns 111110100
% A 32-bit register can store 2^32 different values.
% A 64-bit register can store 2^64 different values.

; let x = 500;
; let y = new Number(500);
; if(x==y) // Returns true;
; if(x===y) // Returns false;


% Number Methods and Properties
$ Primitive values (like 3.14 or 2014), cannot have properties and methods (because they are not objects).
$ But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

! Primitive values (like 3.14 or 2014)

; x.toString()  // Returns string ("500")


% The toExponential() Method
$ toExponential() returns a string, with a number rounded and written using exponential notation.
$ A parameter defines the number of characters behind the decimal point:

; let x = 9.656;
; x.toExponential();  // Returns 9.656e+0
; x.toExponential(2); // Returns 9.66e+0
; x.toExponential(4); // Returns 9.6560e+0
; x.toExponential(6); // Returns 9.656000e+0

% The toFixed() Method
$ toFixed() returns a string, with the number written with a specified number of decimals:
; let x = 9.656; 
; x.toFixed(0);  // Returns 10
; x.toFixed(2);  // Returns 9.66
; x.toFixed(4);  // Returns 9.6560
; x.toFixed(6);  // Returns 9.656000


% The toPrecision() Method
$ toPrecision() returns a string, with a number written with a specified length
; let x = 9.656;
; x.toPrecision();      // Returns 9.656
; x.toPrecision(2);     // Returns 9.7
; x.toPrecision(4);     // Returns 9.656
; x.toPrecision(6);     // Returns 9.65600

% The valueOf() Method
$ valueOf() returns a number as a number.
; let x = 123;  
; x.valueOf();              // Returns 123
; (123).valueOf();          // Returns 123
; (3+120.554).valueOf();    // Returns 123.554
; (100 + 23).valueOf();     // Returns 123
$ In JavaScript, a number can be a primitive value (typeof => number) or an object (typeof => object).
$ The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
$ There is no reason to use it in your code.

!! All JavaScript data types have a valueOf() and a toString() method. 
!! Cannot convert undefined or null to object. 

% Converting Variables(Strings) to Numbers
$ The Number() method
$ The parseInt() method
$ The parseFloat() method

% The Number() Method
$ Number() can be used to convert JavaScript variables to numbers:

; Number(true);     //Return 1
; Number(false);    //Return 0
; Number();         //Return 0
; Number("");       //Return 0
; Number("10");     //Return 10
; Number("  10");   //Return 10
; Number("10  ");   //Return 10
; Number(" 10  ");  //Return 10
; Number("10.33");  //Return 10.33
; Number("10,33");  //Return NaN
; Number("10 33");  //Return NaN
; Number("John");   //Return NaN

! If the number cannot be converted, NaN (Not a Number) is returned.

% The Number() Method Used on Dates
$ Number() can also convert a date to a number.
! The Number() method returns the number of milliseconds since 1.1.1970.
$ The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000
; Number(new Date("1970-01-02"))  // Returns 86400000



% The parseInt() Method
$ parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned
; parseInt("-10");          //Return  -10
; parseInt("-10.33");       //Return  -10
; parseInt("10");           //Return  10
; parseInt("10.33");        //Return  10
; parseInt("10.99");        //Return  10
; parseInt("10 20 30");     //Return  10
; parseInt("10 years");     //Return  10
; parseInt("years 10");     //Return  NaN


% The parseFloat() Method
; parseFloat("10");         //Return  10
; parseFloat("10.33");      //Return  10.33
; parseFloat("10.99");      //Return  10.99
; parseFloat("10 20 30");   //Return  10
; parseFloat("10 years");   //Return  10
; parseFloat("years 10");   //Return  NaN


@ Number Properties 
* Property	            Values(Returns) Description
& MAX_VALUE	            1.7976e+308     Returns the largest number possible in JavaScript 
& MIN_VALUE	            5e-324          Returns the smallest number possible in JavaScript
& POSITIVE_INFINITY     Infinity        Represents infinity (returned on overflow)
& NEGATIVE_INFINITY	    -Infinity       Represents negative infinity (returned on overflow)
& NaN	                NaN             Represents a "Not-a-Number" value

! NaN is a JavaScript reserved word indicating that a number is not a legal number.
! Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
; let x = 100 / "Apple";
!! Number Properties Cannot be Used on Variables
!! Number properties belongs to the JavaScript's number object wrapper called Number.
!! These properties can only be accessed as Number.MAX_VALUE.
!! Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:

; let x = 6;
; x.MAX_VALUE;          // Returns undefined
; x.MIN_VALUE;          // Returns undefined
; x.POSITIVE_INFINITY;  // Returns undefined
; x.NEGATIVE_INFINITY;  // Returns undefined
; x.NaN;                // Returns undefined
* Those code is not working.

; Number.MAX_VALUE              // Returns 1.7976e+308  
; Number.MIN_VALUE              // Returns 5e-324 
; Number.POSITIVE_INFINITY      // Returns Infinity
; Number.NEGATIVE_INFINITY      // Returns -Infinity
; Number.NaN                    // Returns NaN

#### JavaScript Arrays
* At a glance Array
* => const myArray = ["name1","name2","name3","name4","name5"];
* => const secondArray = [1, 2, 3, 4, 15];
* => myArray[0];
* => myArray[2] = "change name";
* => myArray[0] = Date.now;
* => myArray[1] = myFunction;
* => myArray[myArray.length -1] = "Last element";
* => myArray[myArray.length] = "Add last element";
* => myArray instanceof Array; // true
* => Array.isArray(myArray); // true
* => myArray.pop();
* => myArray.shift();
* => myArray.push("newName");
* => myArray.unshift("lastName");
* => myArray.length;
* => myArray.sort(); (main Array will change)
* => secondArray.sort((x,y)=>x-y); (main Array will change)
* => secondArray.sort((x,y)=>x-y); // myArray[0]=smallestNumber & myArray[myArray.length -1]= max
* => secondArray.sort()=>.5-Math.random); (main Array will change randomly)
* => myArray.reverse(); (main Array will change)
* => myArray.forEach(x=>...); (returns undefined, myArray is not change)
* => myArray.forEach((value, index, array)=>...); (returns undefined, myArray is not change)
* => myArray.map((value, index, array)=>...); (returns [...], myArray is not change)
* => myArray.filter((value, index, array)=>...); (returns [...(pass test)], myArray is not change)
* => myArray.reduce((total,value, index, array)=>...); (returns [total], myArray is not change)
* => myArray.reduceRight((total,value, index, array)=>...); (returns [total], myArray is not change)
* => myArray.every((value, index, array)=>...); (returns pass all ? true : false , myArray is not change)
* => myArray.some((value, index, array)=>...); (returns pass at list one ? true : false , myArray is not change)
* => myArray.indexOf(value) // Returns value's position || -1 for not found
* => myArray.lastIndexOf(value) // Returns last value's position  || -1 for not found
* => myArray.find((value, index, array)=> test) // Returns first value which pass test.
* => myArray.findIndex((value, index, array)=> test) // Returns first value's index which pass test.
* => myArray.from("ABCDEFG"); // Return ['A','B','C','D','E','F','G'] (works only string)
* => myArray.keys() // not readable just use ${for(x of myArray.keys()){myArray[x]=>...}}
* => myArray.entries(); // not readable just use ${for(x of myArray.entries()){[index, value]}
* => myArray.includes("name2"); // returns true
* => myArray.toString(); (returns Array)
* => myArray.join(" * "); (returns Array)
* => myArray.concat(secondArray,"other element")
* => myArray.splice(2,0,"new element") (main array will change)
* => myArray.slice(2,4) (return a new array. main array will not change)
* => delete myArray[0]; (first element is empty)
* => (myArray)=> Math.max.apply(null,myArray) // Returns max number
* => (myArray)=> Math.min.apply(null,myArray)  // Returns min number
; const cars = [
;   {type:"Volvo", year:2016},
;   {type:"Saab", year:2001},
;   {type:"BMW", year:2010}
; ];
; cars.sort(function(a, b){return a.year - b.year});

* An array is a special variable, which can hold more than one value
; const cars = ["Saab", "Volvo", "BMW"];
! It is a common practice to declare arrays with the const keyword
$ You can also create an array, and then provide the elements
; const cars = [];
; cars[0]= "Saab";
; cars[1]= "Volvo";
; cars[2]= "BMW";
; cars.push("Name");

% Accessing Array Elements by index number
; const cars = ["Saab", "Volvo", "BMW"];
; let car = cars[0];

% Changing an Array Element
$ This statement changes the value of the first element in cars
; cars[0] = "Opel";

% Arrays are Objects
$ Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
$ But, JavaScript arrays are best described as arrays.
$ Arrays use numbers to access its "elements". In this example, person[0] returns "Saab"

% Array Elements Can Be Objects
$ JavaScript variables can be objects. Arrays are special kinds of objects.
$ Because of this, you can have variables of different types in the same Array.
$ You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

; myArray[0] = Date.now;
; myArray[1] = myFunction;
; myArray[2] = myCars;

% Array Properties and Methods
; cars.length   // Returns the number of elements
; cars.sort()   // Sorts the array

% The length Property
; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; let length = fruits.length;

! The length property is always one more than the highest array index.
; arr = [1,2,3]

& Accessing the First Array Element => arr[0]
& Accessing the Last Array Element => arr[arr.length -1]

* Array.forEach()
& Return undefined array,
; const fruits = ["Banana", "Orange", "Apple", "Mango"];

; function myFunction(value) {
;   text += "<li>" + value + "</li>";
; }

; let text = "<ul>";
; fruits.forEach(myFunction);
; text += "</ul>";

* arr.pop();  // Delete the last element of array.
* arr.shift(); // Delete the first element of array.
* arr.push("Lemon");  // Add a new element last index of array.
* arr.unshift("Lemon");   // Add a new element first index of array.

& New element can also be added to an array using the length property
; const fruits = ["Banana", "Orange", "Apple"];
; fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits

! Adding elements with high indexes can create undefined "holes" in an array:
; const fruits = ["Banana", "Orange", "Apple"];
; fruits[6] = "Lemon";  // Creates undefined "holes" in fruits


@ Associative Arrays
$ Many programming languages support arrays with named indexes.
$ Arrays with named indexes are called associative arrays (or hashes).
$ JavaScript does not support arrays with named indexes.
$ In JavaScript, arrays always use numbered indexes.  

! If you use named indexes, JavaScript will redefine the array to an object.
! After that, some array methods and properties will produce incorrect results.
; const person = [];
; person["firstName"] = "John";
; person["lastName"] = "Doe";
; person["age"] = 46;
; person.length;     // Will return 0
; person[0];         // Will return undefined

% The Difference Between Arrays and Objects
$ In JavaScript, arrays use numbered indexes. 
$ In JavaScript, objects use named indexes.

! Arrays are a special kind of objects, with numbered indexes.

@ When to Use Arrays. When to use Objects.
$ JavaScript does not support associative arrays.
$ You should use objects when you want the element names to be strings (text).
$ You should use arrays when you want the element names to be numbers.

; const points = new Array(40);     // Create an array with 40 undefined elements:
; const points = [40];              // Create an array with one element:

* How to Recognize an Array
; Array.isArray(arr);

$ The instanceof operator returns true if an object is created by a given constructor

; const fruits = ["Banana", "Orange", "Apple"];
; fruits instanceof Array;  // Returns true


# JavaScript Array Methods
@ Converting Arrays to Strings
$ The JavaScript method toString() converts an array to a string of (comma separated) array values.
; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; document.getElementById("demo").innerHTML = fruits.toString(); // Returns "Banana,Orange,Apple,Mango"

$ The join() method also joins all array elements into a string.
$ It behaves just like toString(), but in addition you can specify the separator
; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; document.getElementById("demo").innerHTML = fruits.join(" * "); //Return "Banana * Orange * Apple * Mango"


$ JavaScript Array delete()
! Array elements can be deleted using the JavaScript operator delete.
! Using delete leaves undefined holes in the array.
! Use pop() or shift() instead.

@ Merging (Concatenating) Arrays
$ The concat() method creates a new array by merging (concatenating) existing arrays
; const myGirls = ["Cecile", "Lone"];
; const myBoys = ["Emil", "Tobias", "Linus"];
; const myChildren = myGirls.concat(myBoys);

! The concat() method does not change the existing arrays. It always returns a new array.
$The concat() method can take any number of array arguments:
; const arr1 = ["Cecilia", "Lone"];
; const arr2 = ["Emil", "Tobias", "Linus"];
; const arr3 = ["Robin", "Morgan"];
; const myChildren = arr1.concat(arr2, arr3);

$ The concat() method can also take strings as arguments:
;  const arr1 = ["Emil", "Tobias", "Linus"];
;  const myChildren = arr1.concat("Peter"); 

* Splicing and Slicing Arrays
$ The splice() method adds new items to an array. // main array will change 
$ The slice() method slices out a piece of an array. // main array will change


% JavaScript Array splice() 
; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; fruits.splice(2, 0, "Lemon", "Kiwi");
$ The first parameter (2) defines the position where new elements should be added (spliced in).
$ The second parameter (0) defines how many elements should be removed.
$ The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

! The splice() method returns an array with the deleted items:


; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; // Returns Original Array: ['Banana','Orange','Apple','Mango']
; let removed = fruits.splice(2, 2, "Lemon", "Kiwi");
; // Returns After splice Array: ['Banana','Orange','Lemon','Kiwi']
; // Returns removed: ['Apple','Mango']

* Using splice() to Remove Elements
$ With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; fruits.splice(0, 1); // Returns ['Orange','Apple','Mango']

$ The first parameter (0) defines the position where new elements should be added (spliced in).
$ The second parameter (1) defines how many elements should be removed.
$ The rest of the parameters are omitted. No new elements will be added.

* JavaScript Array slice()
$ The slice() method slices out a piece of an array into a new array.
$ This example slices out a part of an array starting from array element 1 ("Orange"):
; const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
; const citrus = fruits.slice(1); // Returns ["Orange", "Lemon", "Apple", "Mango"]
! The slice() method creates a new array.
! The slice() method does not remove any elements from the source array.
;const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
;const citrus = fruits.slice(3); // Returns ["Apple", "Mango"]
;const citrus = fruits.slice(399); // Returns []
;const citrus = fruits.slice(-3); // Returns ["Banana", "Orange", "Lemon", "Apple", "Mango"]

$ The slice() method can take two arguments like slice(1, 3).
$ The method then selects elements from the start argument, and up to (but not including) the end argument.

! All JavaScript objects have a toString() method.

% Finding Max and Min Values in an Array
! There are no built-in functions for finding the highest or lowest value in a JavaScript array.

# JavaScript Sorting Arrays
@ Sorting an Array
$ The sort() method sorts an array alphabetically:
; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; fruits.sort(); // Returns  ["Apple","Banana","Mango","Orange"]
@ Reversing an Array
; fruits.reverse();  // Returns ["Orange","Mango","Banana","Apple"]

!! Numeric Sort
$ By default, the sort() function sorts values as strings.
$ This works well for strings ("Apple" comes before "Banana").
$ However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
$ Because of this, the sort() method will produce incorrect result when sorting numbers.
$ You can fix this by providing a compare function:
; const points = [40, 100, 1, 5, 25, 10];
; points.sort(function(a, b){return a - b});

!! The Compare Function
$ The purpose of the compare function is to define an alternative sort order.
$ The compare function should return a negative, zero, or positive value, depending on the arguments
; function(a, b){return a - b}
$ When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
$ If the result is negative a is sorted before b.
$ If the result is positive b is sorted before a.
$ If the result is 0 no changes are done with the sort order of the two values.
$ Example:
$ The compare function compares all the values in the array, two values at a time (a, b).
$ When comparing 40 and 100, the sort() method calls the compare function(40, 100).
$ The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
$ You can use this code snippet to experiment with numerically and alphabetically sorting:

@@ Sorting Object Arrays
$ JavaScript arrays often contain objects
$ Even if objects have properties of different data types, the sort() method can be used to sort the array.
$ The solution is to write a compare function to compare the property values

; const cars = [
;   {type:"Volvo", year:2016},
;   {type:"Saab", year:2001},
;   {type:"BMW", year:2010}
; ];
; cars.sort(function(a, b){return a.year - b.year});
* Other complex compare function
; cars.sort(function(a, b){
;   let x = a.type.toLowerCase();
;   let y = b.type.toLowerCase();
;   if (x < y) {return -1;}
;   if (x > y) {return 1;}
;   return 0;
; });


@@ JavaScript Array forEach()
$ The forEach() method calls a function (a callback function) once for each array element.
; const numbers = [45, 4, 9, 16, 25];
; numbers.forEach((value, index, array)=>...);


@@ JavaScript Array map()
$ The map() method creates a new array by performing a function on each array element.
$ The map() method does not execute the function for array elements without values.
$ The map() method does not change the original array.
$ This example multiplies each array value by 2
; const numbers1 = [45, 4, 9, 16, 25];
; const numbers2 = numbers1.map(myFunction);
; 
; function myFunction(value, index, array) {
;   return value * 2;
; }
; // Returns [90,8,18,32,50]


@@ JavaScript Array filter()
$ The filter() method creates a new array with array elements that passes a test.
$ This example creates a new array from elements with a value larger than 18
; const numbers = [45, 4, 9, 16, 25];
; const over18 = numbers.filter(myFunction);
; 
; function myFunction(value, index, array) {
;   return value > 18;
; }


@@ JavaScript Array reduce()
$ The reduce() method runs a function on each array element to produce (reduce it to) a single value.
$ The reduce() method works from left-to-right in the array. See also reduceRight().
$ The reduce() method does not reduce the original array.

; const numbers = [45, 4, 9, 16, 25];
; let sum = numbers.reduce(myFunction);
; 
; function myFunction(total, value, index, array) {
;   return total + value;
; }


@@ JavaScript Array reduceRight()
* same with reduce but different is it works right to left

@@ JavaScript Array every()
$ The every() method check if all array values pass a test otherwise it return false.
$ This example check if all array values are larger than 18
; const numbers = [45, 4, 9, 16, 25];
; let allOver18 = numbers.every(myFunction);
; 
; function myFunction(value, index, array) {
;   return value > 18;
; }


@@ JavaScript Array some()
$ The some() method check if some array values pass a test.
; const numbers = [45, 4, 9, 16, 25];
; let someOver18 = numbers.some(myFunction);
; 
; function myFunction(value, index, array) {
;   return value > 18;
; }


@@ JavaScript Array indexOf()
$ The indexOf() method searches an array for an element value and returns its position.
; const fruits = ["Apple", "Orange", "Apple", "Mango"];
; let position = fruits.indexOf("Apple");  // Return 0;

@@ JavaScript Array lastIndexOf()
$ Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
; const fruits = ["Apple", "Orange", "Apple", "Mango"];
; let position = fruits.lastIndexOf("Apple");


@@ JavaScript Array find()
$ The find() method returns the value of the first array element that passes a test function.
; const numbers = [4, 9, 16, 25, 29];
; let first = numbers.find(myFunction);
; 
; function myFunction(value, index, array) {
;   return value > 18;
; }


@@ JavaScript Array findIndex()
$ The findIndex() method returns the index of the first array element that passes a test function.
; const numbers = [4, 9, 16, 25, 29];
; let first = numbers.findIndex(myFunction);
; 
; function myFunction(value, index, array) {
;   return value > 18;
; }


@@ JavaScript Array.from()
; Array.from("ABCDEFG"); // Return ['A','B','C','D','E','F','G']


@@ JavaScript Array Keys()
$ The Array.keys() method returns an Array Iterator object with the keys of an array.
; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; const f = fruits.keys();
; for (let x of f) {
;   console.log(x[1], "Line No: 5");
;   console.log(x, "Line No: 5");
; }


@@ Array entries()
; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; const f = fruits.entries();
; 
; for (let x of f) {
;   console.log(x)  // Returns [index, value]
; }


@@ JavaScript Array includes()
$ ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

; const fruits = ["Banana", "Orange", "Apple", "Mango"];
; fruits.includes("Mango"); // is truTou



























*/
