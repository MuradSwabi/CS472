// JavaScript source code

//4. Define a function sum() and a function multiply() that sums and multiplies(respectively) all the numbers in an array of numbers.For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4]) should return 24.

function sum() {
    let arr = [1, 2, 3, 4];
    return arr.reduce((s, a) => s + a);
}
  console.log("Expected output of sum[1, 2, 3, 4] is 10 " + myFunctionTest(10 ,sum() ));

function multiply() {
        let arr = [1, 2, 3, 4];
        return arr.reduce((s, a) => s * a);
    }
console.log("Expected output of multiply[1, 2, 3, 4] is 24 " + myFunctionTest(24 ,multiply() ));

//5. Define a function reverse() that computes the reversal of a string.For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(st) {
    return st.split("").reverse().join("");
}
console.log("Expected output of turky is ykrut  " + myFunctionTest("ykrut" ,reverse("turky") ));


//7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(st,i) {
    return st.filter((item) => item.length > i);

}
console.log("Expected output of wasiqa  asad are findLongestWords([asad,hal,wasiqa] " + myFunctionTest(["wasiqa","asad"] ,findLongestWord(["asad","hal","wasiqa"]) ));
//console.log(max(["mats", "sata", "pakistan"], 3))

document.writeln(d+ "<br/>");  
//console.log("Expected output of  " + myFunctionTest( , ));

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}




