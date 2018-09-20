/**
@type of arry
0 index
1 index
n index
*/


//create Sample Array to Play around.

let playArray = [1,2,3,4,5];  // Array of consicutive 5 numbers.
let joinArray = [7,8,9];



// problem-1 -> LIST ALL ELEMENTS OF ARRAY IN SEQUENTIAL WAY.


/* This can be achived by forEach and map both 
	
	why Not forEach - Because it will not return anything(undefined) which will be slower if array size is large
	why map - Because it will return values for each and every itreation so it will throw result instanteniously 

	note- you will feel diffrence in LARGE ARRAY only not for the arrays of less count.
*/
playArray.map(element=>{  
	console.log(element);
}) 

/*
FUNCTIONAL PROGRAM TO ACHIEVE  THE DESIRED RESULT
*/

const ListArray =(array) => {
	let mappingArray = null;
	array.map(element =>{
		console.log(element);
	})
}

ListArray(playArray);

// Problem-2 => APPEND EXISTING ARRAY .

/*
Arra.push(comma,seprated Values) will append the EXISTING array 
*/

playArray.push(7,8,9);    
console.log(playArray);


// ------------------------------------------------------ Array JOIN START ----------------------------------------------------------

// let joinedArray = playArray.concat(joinArray); //Concat will Join TWO ARAAY in to one.

// console.log(joinedArray);


//Function MERGE one array to another.


const JoinArray = (headArray,tailArray) =>  headArray.concat(tailArray);  // it will return joined array .

let joinedArray = JoinArray(playArray,joinArray); //assigning single array to variable
 
console.log(joinedArray); //printing array on console

// ------------------------------------------------------ Array JOIN END -------------------------------------------------------------

// ------------------------------------------------------ Array DELETE START ---------------------------------------------------------
playArray.splice(3,1) // 3 is location in the array and 1 is delete 1 element
console.log(playArray);

DeleteArrayObj =(arr,itemIndex,numOfEle) =>  arr.splice(itemIndex,numOfEle) // Function for deleteing Element
DeleteArrayObj(joinArray,0,2)  // joinArray - Name of the array , 0 - is index in the array, 2 - delete 2 element from index 0
console.log(joinArray)
// ------------------------------------------------------ Array DELETE END ---------------------------------------------------------




// ------------------------------------------------------ REMOVING ALWAYS FIRST ELEMENT OF THE ARRAY START -------------------------

let firstDelEle = [5,4,3,2,1]
firstDelEle.splice(); //output [4,3,2,1]

DelFirstEle =(arr) => arr.splice();

DelFirstEle(firstDelEle);
console.log(firstDelEle);

// ------------------------------------------------------ REMOVING ALWAYS FIRST ELEMENT OF THE ARRAY END ---------------------------


// ----------------------------------------------------- SHIFT ELEMENT FROM THE ARRAY  START ----------------------------------------
let initialArray = [2,3,4,5,6]
initialArray.shift()
console.log(initialArray) // it will remove first element  [3,4,5,6]

ShiftArray = (arrayToShift) =>{
return arrayToShift.shift();
}

ShiftArray(initialArray);
ShiftArray(initialArray)
console.log(initialArray);//output [5,6]
// ----------------------------------------------------- SHIFT ELEMENT FROM THE ARRAY  START ----------------------------------------


// ---------------------------------- reversing of the Array START ------------------------

let reverseMe = [1,2,3,4,5];
let reversedMe = reverseMe.reverse();
console.log(reversedMe);

// ---------------------------------- reversing of the Array END ---------------------------



//  -------------------------------- creating array from  OBJECT START   ---------------------

const arrayLike = { length: 3, 0: 'a', 1: 'b',2: 3};

const arr = Array.from(arrayLike);
console.log(arr) // Print array from the object passed inside the function
for (const x of arr) { // OK, iterable
    console.log(x);
}

//  -------------------------------- creating array from  OBJECT END   ---------------------

