// Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana ) 

// ⚠️ Function Name Must be electionResult()
// বাংলাদেশের রাজনৈতিক ময়দানে চলছে টানটান উত্তেজনা!  Mango-party আর Banana-party  মুখোমুখি এক দারুণ নির্বাচনে! ভোট চলছে দেদারসে, কিন্তু গণনা করতে গিয়ে সবাই কনফিউজড! 😵 তাই, তোমাকে electionResult() নামে একটা ফাংশন লিখতে হবে, যা  একটা Array Input নেবে  এবং ভোটের গণনা করে জানিয়ে দেবে—"কে হচ্ছে বিজয়ী?"  

// 📥 Input:
// ফাংশন টি Input নেবে একটি Array এবং Array এর elements গুলো হবে string.  
// Example:   ["mango", "banana", "Na-Vote", "mango"]



// 🚀 Output:
// যদি Array তে "mango" বেশি হয় তাহলে ফাংশন টি রিটার্ন করবে "Mango"
// যদি Array তে "banana" বেশি হয় তাহলে ফাংশন টি রিটার্ন করবে "Banana"
// যদি "mango"  এবং "banana"  সমান সমান হয় তাহলে রিটার্ন করবে "Draw"

// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


// 🚩Challenge:  যদি ইনপুট টি Array না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 



// SAMPLE INPUT
// -SAMPLE OUTPUT

// ["mango", "banana", "mango", "banana", "mango"]
// "Mango"

// []
// -"Draw"

// ["mango", "banana", "jaker party" , "no"]
// -"Draw"

// ["mango"]
// -"Mango"

// ["banana", "banana", "age e valo chilam" , "no"]
// -"Banana"

// {result: "mango , banana ,  mango"}
// -"Invalid"

// "mango , banana"
// -"Invalid"

// ["mango", "BananA", "na vote", "na vote"]
// -"Mango"


// /*function signature/sample */
// function  electionResult( votes ) {
//           // You have to write your code here
// }




// solution
function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    var countMango = 0;
    var countBanana = 0;

    for (var i = 0; i < votes.length; i++) {
        if (typeof votes[i] === "string") {
            var clearVote = votes[i].trim();

            if (clearVote === "mango") {
                countMango++;
            } else if (clearVote === "banana") {
                countBanana++;
            }
        }
    }
    if (countMango > countBanana) {
        return "Mango";
    } else if (countBanana > countMango) {
        return "Banana";
    } else {
        return "Draw";
    }
}


// Example test cases
console.log(electionResult(["mango", "banana", "mango", "banana", "mango"]));
console.log(electionResult([]));
console.log(electionResult(["mango", "banana", "jaker party", "no"]));
console.log(electionResult(["mango"]));
console.log(electionResult(["banana", "banana", "age e valo chilam", "no"]));
console.log(electionResult({ result: "mango , banana , mango" }));
console.log(electionResult("mango , banana"));
console.log(electionResult(["mango", "BananA", "na vote", "na vote"]));