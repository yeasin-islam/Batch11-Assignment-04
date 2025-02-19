// Problem-01 : Calculate the cash-out Charge 

// ⚠️ Function Name Must be cashOut()
// রহিম একজন ছোট ব্যবসায়ী। প্রতিদিন বিকাশের মাধ্যমে বিভিন্ন লেনদেন করতে হয় তাকে। একদিন তার দোকানে এক ক্রেতা আসে এবং বলে, 👉 "ভাই, 2000 টাকা ক্যাশ আউট করতে চাই। কত চার্জ কাটবে?"
// রহিম মনে মনে হিসাব করতে শুরু করল, কিন্তু হঠাৎ সে ভাবল—এভাবে বারবার হিসাব করা তো ঝামেলা! যদি একটা ফাংশন থাকত, যেটা যেকোনো এমাউন্ট দিলেই চার্জ বের করে দিত! এবং রহিম যেহেতু জানে যে তুমি প্রোগ্রামিং হিরোর তুখোড়  স্টুডেন্ট তাই তোমার কাজ হচ্ছে  -
// রহিমকে cashOut() নামে একটা ফাংশন বানিয়ে দেয়া যেটা টাকা ইনপুট নিলে ক্যাশ আউট চার্জ বের করে দেবে।
// Cashout Charge  হলো - 1.75% 
// 📥 Input:
// তোমার ফাংশন একটি পজিটিভ সংখ্যা (money) ইনপুট নেবে যা হলো cashout amount. 


// 🚀 Output:
// ফাংশনটি 1.75% ক্যাশ আউট চার্জ ক্যালকুলেট করে একটি সংখ্যা রিটার্ন করবে।
// Output দশমিক সংখ্যা হতে পারে।
// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


// 🚩Challenge:  
// যদি ইনপুট টি নাম্বার  না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 
// যদি ইনপুট টি পজিটিভ সংখ্যা না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 




// 💡Hints:  যদি ইনপুট 2000 হয়, তাহলে ক্যাশ আউট চার্জ হবে: 2000× 1.75 / 100 = 35 Taka






// SAMPLE INPUT
// -SAMPLE OUTPUT

// 2000
// -35

// 100
// -1.75

// 999
// -17.4825

// -350
// -"Invalid"

// 0
// -0

// "101"
// -"Invalid"

// "mewauu"
// -"Invalid"


// /*function signature/sample */
// function cashOut( money ) {
//           // You have to write your code here
// }




// solution
function cashOut( money ) {
    if (typeof money !== 'number' || money < 0) {
        return "Invalid";
    }
    if (money === 0) {
        return 0;
    }
    let cashoutCharge = (money*1.75) / 100;
    return cashoutCharge;
}

// // Example test cases
console.log(cashOut(2000));
console.log(cashOut(100));
console.log(cashOut(999));
console.log(cashOut(-350));
console.log(cashOut(0));
console.log(cashOut("101"));
console.log(cashOut("mewauu"));