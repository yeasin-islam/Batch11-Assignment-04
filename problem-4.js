// Problem-04: Detect The Perfect Best Friend 

// ⚠️ Function Name Must be isBestFriend()
// 📢 বন্ধুত্ব কি শুধু মুখের কথা? নাকি সত্যিকারের? 🧐 তোমাকে একটা isBestFriend()  ফাংশন লিখতে হবে, যা চেক করবে দুই বন্ধুর বন্ধুত্ব আসলেই সাচ্চা কিনা! 🔍
// তোমার ফাংশন কে ২ বন্ধুর ডেটা দেয়া হবে। যদি প্রথমজনের bestFriend এর ভ্যালু  ২য় জনের roll এর সাথে মিলে যায় এবং দ্বিতীয় জনের bestFriend এর ভ্যালু প্রথম জনের roll এর সাথে মিলে যায়  তাহলে ই আমরা বুঝব যে তারা দুইজন সত্যিকারের বেস্ট ফ্রেন্ড। 

// 📥 Input:
// ফাংশন টি 2 টা Input নেবে। 
// ১ম input টি হবে একটা object  , 
// ২য় input টিও  হবে একটা object
// প্রতি টা object এ ৩ টা  property অবশ্যই  থাকবে 
// ( name: string , roll: number , bestFriend: number ) 




// 🚀 Output:
// যদি তারা ২ জন ২ জনের বেস্ট ফেন্ড হয়ে থাকে তাহলে return করবে boolean value  true
// আর যদি তারা বেস্ট ফ্রেন্ড না হয়ে থাকে তাহলে return করবে false

// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


// 🚩Challenge:  
// Input গুলো যদি object না হয়  তাহলে ফাংশন    "Invalid" return করবে।  



// SAMPLE INPUT
// -SAMPLE OUTPUT

// { name: "hashem", roll: 1, bestFriend: 2 },
// { name: "kashem", roll: 2, bestFriend: 1 }
// -true

// { name: "hashem", roll: 21, bestFriend: 1},
// { name: "kashem", roll: 1, bestFriend: 2 }
// -false

// { name:"kashem", roll: 2, bestFriend: 11},
// "Kashem er Kono Bondhu Nai"
// -"Invalid"

// "hashem", { name:"kashem", roll: 2, bestFriend: 11}
// -"Invalid"

// { name: "hashem", roll: 1 , bestFriend: 1},
// { name: "kashem" , roll: 1, bestFriend: 1 }
// -true


// /*function signature/sample */
// function  isBestFriend( f1 , f2 ) {
//           // You have to write your code here
// }



// solution
function  isBestFriend( f1 , f2 ) {
    if (typeof f1 !== "object" || typeof f2 !== "object" ||
        f1 === null || f2 === null) {
        return "Invalid";
    }
    if (!f1.name || !f2.name || !f1.roll || !f2.roll || !f1.bestFriend || !f2.bestFriend) {
        return "Invalid";
    }
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    } else {
        return false;
    }
}


// Example test cases
console.log(isBestFriend(
    { name: "hashem", roll: 1, bestFriend: 2 },
    { name: "kashem", roll: 2, bestFriend: 1 }
));

console.log(isBestFriend(
    { name: "hashem", roll: 21, bestFriend: 1 },
    { name: "kashem", roll: 1, bestFriend: 2 }
));

console.log(isBestFriend(
    { name: "kashem", roll: 2, bestFriend: 11 },
    "Kashem er Kono Bondhu Nai"
));

console.log(isBestFriend("hashem", { name: "kashem", roll: 2, bestFriend: 11 }));

console.log(isBestFriend(
    { name: "hashem", roll: 1, bestFriend: 1 },
    { name: "kashem", roll: 1, bestFriend: 1 }
));