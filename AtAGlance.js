/*  ****************************
#### String 
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


#### JavaScript Numbers 
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
& ==> x.MIN_VALUE;              // Returns undefined
& ==> x.POSITIVE_INFINITY;      // Returns undefined
& ==> x.NEGATIVE_INFINITY;      // Returns undefined
& ==> x.NaN;                    // Returns undefined


#### JavaScript Arrays 
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









* ***************************************************/