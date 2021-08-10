// JavaScript source code
//1. max function
function max( a, b) {
    if(a > b) return a;
    else return b;
}
console.log("Expected output of max(5,4) is 5  " + myFunctionTest(5, max(5, 4)));

//2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a,b,c) {
    if (a > b && a > c) return a;
    else if (b > c && b > a) return b;
    else return c;
    
}
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));


//3. Write a function isVowel() that takes a character(i.e.a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(st) {
    if (st == 'a' || st == 'e' || st == 'i' || st == 'o' || st == 'u')
        return true;
    else return false;
}
console.log("Expected output of isVowel('e') is true " + myFunctionTest(true, isVowel('e')));

//4. Define a function sum() and a function multiply() that sums and multiplies(respectively) all the numbers in an array of numbers.For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4]) should return 24.

function sum() {
    let arr = [1, 2, 3, 4];
    let c = arr[0];
    for (let a = 1; a < arr.length; a++)
        c += arr[a];
    return c;
  }
  console.log("Expected output of sum[1, 2, 3, 4] is 10 " + myFunctionTest(10 ,sum() ));

function multiply() {
    let arr = [1, 2, 3, 4];
    let c = arr[0];
    for (let a = 1; a < arr.length; a++)
        c *= arr[a];
    return c;
}
console.log("Expected output of multiply[1, 2, 3, 4] is 24 " + myFunctionTest(24 ,multiply() ));

//5. Define a function reverse() that computes the reversal of a string.For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(st) {
    return st.split("").reverse().join("");
}
console.log("Expected output of turky is ykrut  " + myFunctionTest("ykrut" ,reverse("turky") ));

//6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord() {
    let a = 0, b = 0;
    let t = st[0].length;
    while (a < st.length) {
        if (t < st[a].length)
            b = a;
        a++;
    }
    return st[b];
}
console.log("Expected output of wasiqa are findLongestWord([asad,halem,wasiqa]  " + myFunctionTest("wasiqa" ,findLongestWord(["asad","halem","wasiqa"]) ));

//7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords() {
    let a = 0, b = 0;
    let t = [];
    while (a < st.length) {
        if (i < st[a].length)
            t[b++] = st[a];
        a++;
    }
    return t;
}
console.log("Expected output of wasiqa  asad are findLongestWords([asad,hal,wasiqa] " + myFunctionTest(["wasiqa","asad"] ,findLongestWord(["asad","hal","wasiqa"]) ));
//console.log(max(["mats", "sata", "pakistan"], 3))

//8. Modify the jsfiddle on the map / filter / reduce slide(https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

//    a) multiply each element by 10;
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem *10;
})
document.writeln(b.toString() + "<br/>");

//b) return array with all elements equal to 3;
const c = a.filter(function(elem, i, array){
  return elem == 3;});
document.writeln(c.toString() + "<br/>");
//console.log("Expected output of  " + myFunctionTest( , ));

//c) return the product of all elements;
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");  
//console.log("Expected output of  " + myFunctionTest( , ));

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}




