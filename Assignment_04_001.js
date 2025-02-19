/*-------------------------------------------------------------*/
// Problem-01 : Calculate the cash-out Charge 

// ⚠️ Function Name Must be cashOut()
// রহিম একজন ছোট ব্যবসায়ী। প্রতিদিন বিকাশের মাধ্যমে বিভিন্ন লেনদেন করতে হয় তাকে। একদিন তার দোকানে এক ক্রেতা আসে এবং বলে, 👉 "ভাই, 2000 টাকা ক্যাশ আউট করতে চাই। কত চার্জ কাটবে?"
// রহিম মনে মনে হিসাব করতে শুরু করল, কিন্তু হঠাৎ সে ভাবল—এভাবে বারবার হিসাব করা তো ঝামেলা! যদি একটা ফাংশন থাকত, যেটা যেকোনো এমাউন্ট দিলেই চার্জ বের করে দিত! এবং রহিম যেহেতু জানে যে তুমি প্রোগ্রামিং হিরোর তুখোড়  স্টুডেন্ট তাই তোমার কাজ হচ্ছে  -
// রহিমকে cashOut() নামে একটা ফাংশন বানিয়ে দেয়া যেটা টাকা ইনপুট নিলে ক্যাশ আউট চার্জ বের করে দেবে।
// Cashout Charge  হলো - 1.75% 

/*-------------------*/

// 📥 Input:
// তোমার ফাংশন একটি পজিটিভ সংখ্যা (money) ইনপুট নেবে যা হলো cashout amount. 

/*-------------------*/

// 🚀 Output:
// ফাংশনটি 1.75% ক্যাশ আউট চার্জ ক্যালকুলেট করে একটি সংখ্যা রিটার্ন করবে।
// Output দশমিক সংখ্যা হতে পারে।
// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা

/*-------------------*/

// 🚩Challenge:  
// যদি ইনপুট টি নাম্বার  না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 
// যদি ইনপুট টি পজিটিভ সংখ্যা না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 

/*-------------------*/

// 💡Hints:  যদি ইনপুট 2000 হয়, তাহলে ক্যাশ আউট চার্জ হবে: 2000× 1.75 / 100 = 35 Taka

/*-------------------*/

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

/*-------------------*/

// /*function signature/sample */
// function cashOut( money ) {
//           // You have to write your code here
// }


/*--------------------------------------------------------------------*/


// Problem-02 : Detect email  valid or not

// ⚠️ Function Name Must be validEmail()
// এবার তোমার কাজ হলো validEmail() নামে একটা ফাংশন তৈরি করা, যা একটি email ইনপুট নেবে এবং সেটি সঠিক নাকি ভুল তা যাচাই করে একটি boolean Value (true/false) কে  return করবে।
// ইমেইল ভ্যালিড হওয়ার শর্ত গুলো হলো 
// ইমেইলের  শুরু তে  ".-_+@"  এই স্পেশাল ক্যারেক্টার গুলো থাকা যাবেনা।  
// ইমেইলের মাঝখানে @ থাকতে হবে। 
// ইমেইলে কোন স্পেস থাকা যাবেনা। 
// ইমেইলের শেষে  .com থাকতে হবে।
// উপরের শর্ত গুলো পুরন হলে ই সে true আউটপুট হিসেবে return করবে। না হলে false আউটপুট হিসেবে return করবে। 

/*-------------------*/

// 📥 Input:
// তোমার ফাংশন একটি  email  ইনপুট নেবে যা হবে একটি স্ট্রিং। 

/*-------------------*/

// 🚀 Output:
// তোমার ফাংশন টি একটা boolean Value (true/false) কে  return করবে। অবশ্যই তোমাকে কিন্তু boolean value ই return করতে হবে। 

// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা

/*-------------------*/

// 🚩Challenge:  যদি ইনপুট টি string না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 

/*-------------------*/

// SAMPLE INPUT
// -SAMPLE OUTPUT

// "ferdous@gmail.com"
// -true

// "1zihad@gmail.com"
// -true

// "-king@yahoo.com"
// -false

// ["jhankar@hero.com"]
// -"Invalid"

// "Mewo@cat.com"
// -true

// "programming-hero.com"
// -false

// "chat420@gpt.net"
// -false

// true
// -"Invalid"

// "he ro@alom.com"
// -false

/*-------------------*/

// /*function signature/sample */
// function  validEmail( email ) {
//           // You have to write your code here
// }


/*--------------------------------------------------------------------*/


// Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana ) 

// ⚠️ Function Name Must be electionResult()
// বাংলাদেশের রাজনৈতিক ময়দানে চলছে টানটান উত্তেজনা!  Mango-party আর Banana-party  মুখোমুখি এক দারুণ নির্বাচনে! ভোট চলছে দেদারসে, কিন্তু গণনা করতে গিয়ে সবাই কনফিউজড! 😵 তাই, তোমাকে electionResult() নামে একটা ফাংশন লিখতে হবে, যা  একটা Array Input নেবে  এবং ভোটের গণনা করে জানিয়ে দেবে—"কে হচ্ছে বিজয়ী?"  

/*-------------------*/

// 📥 Input:
// ফাংশন টি Input নেবে একটি Array এবং Array এর elements গুলো হবে string.  
// Example:   ["mango", "banana", "Na-Vote", "mango"]

/*-------------------*/

// 🚀 Output:
// যদি Array তে "mango" বেশি হয় তাহলে ফাংশন টি রিটার্ন করবে "Mango"
// যদি Array তে "banana" বেশি হয় তাহলে ফাংশন টি রিটার্ন করবে "Banana"
// যদি "mango"  এবং "banana"  সমান সমান হয় তাহলে রিটার্ন করবে "Draw"

// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা

/*-------------------*/

// 🚩Challenge:  যদি ইনপুট টি Array না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 

/*-------------------*/

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

/*-------------------*/

// /*function signature/sample */
// function  electionResult( votes ) {
//           // You have to write your code here
// }


/*------------------------------------------------------------------------*/


// Problem-04: Detect The Perfect Best Friend 

// ⚠️ Function Name Must be isBestFriend()
// 📢 বন্ধুত্ব কি শুধু মুখের কথা? নাকি সত্যিকারের? 🧐 তোমাকে একটা isBestFriend()  ফাংশন লিখতে হবে, যা চেক করবে দুই বন্ধুর বন্ধুত্ব আসলেই সাচ্চা কিনা! 🔍
// তোমার ফাংশন কে ২ বন্ধুর ডেটা দেয়া হবে। যদি প্রথমজনের bestFriend এর ভ্যালু  ২য় জনের roll এর সাথে মিলে যায় এবং দ্বিতীয় জনের bestFriend এর ভ্যালু প্রথম জনের roll এর সাথে মিলে যায়  তাহলে ই আমরা বুঝব যে তারা দুইজন সত্যিকারের বেস্ট ফ্রেন্ড। 

/*-------------------*/

// 📥 Input:
// ফাংশন টি 2 টা Input নেবে। 
// ১ম input টি হবে একটা object  , 
// ২য় input টিও  হবে একটা object
// প্রতি টা object এ ৩ টা  property অবশ্যই  থাকবে 
// ( name: string , roll: number , bestFriend: number ) 

/*-------------------*/

// 🚀 Output:
// যদি তারা ২ জন ২ জনের বেস্ট ফেন্ড হয়ে থাকে তাহলে return করবে boolean value  true
// আর যদি তারা বেস্ট ফ্রেন্ড না হয়ে থাকে তাহলে return করবে false

// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা

/*-------------------*/

// 🚩Challenge:  
// Input গুলো যদি object না হয়  তাহলে ফাংশন    "Invalid" return করবে।  

/*-------------------*/

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

/*-------------------*/

// /*function signature/sample */
// function  isBestFriend( f1 , f2 ) {
//           // You have to write your code here
// }


/*--------------------------------------------------------------------*/


// Problem-05: Let’s Calculate Video watch Time

// ⚠️ Function Name Must be calculateWatchTime()
// সুবাহ সারাদিন Tiktok দেখে সময় নষ্ট করে। কোন পড়াশোনা করেনা। সুবাহর বাবা সুবাহর এই সময় অপচয় নিয়ে অনেক দুশ্চিন্তায় আছেন। সুবাহর বাবা এমন একটি ফাংশন বানাতে চাচ্ছেন যাতে সুবাহ দৈনিক কত সময় ভিডিও দেখে অপচয় করে সেটা তিনি সুন্দর ভাবে দেখতে পারবেন।
// তোমার কাজ হচ্ছে সুবাহর বাবা কে  calculateWatchTime()  নামে একটা ফাংশন বানিয়ে দেয়া যেটা একটা Array ইনপুট  নিবে। Array তে  সুবাহর ভিডিও দেখার সময়(second) গুলো Number আকারে স্টোর থাকবে। ফাংশনটি Array থেকে টোটাল সময় বের করে সেটাকে  ঘণ্টা, মিনিট এবং সেকেন্ডে কনভার্ট করে একটি অব্জেক্ট হিসেবে রিটার্ন করবে।  

/*-------------------*/

// 📥 Input:
// Function টি input নেবে একটি array 
// array এর element গুলো হবে number  (watch times in second) 

/*-------------------*/

// 🚀 Output:
// ফাংশন টি  Array তে থাকা সবগুলো সময় কে calculate করে সেটা কে ঘন্টা মিনিট এবং সেকেন্ড এ কনভার্ট করবে।
// ফাংশন টি একটা অবজেক্ট রিটার্ন করবে।  অবজেক্ট টি দেখতে হবে এই রকম- 
// { hour:14 , minute: 46 , second: 3 } 

// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা

/*-------------------*/

// 🚩Challenge:  
// Array element গুলো যদি number না হয় তাহলে   "Invalid" return করবে।  

/*-------------------*/

// SAMPLE INPUT
// -SAMPLE OUTPUT

// [100, 99, 119, 300]
// -{ hour: 0, minute: 10, second: 18 }

// [1000, 2000, 725]
// -{ hour: 1, minute: 2, second:5 }

// [100, 3800]
// -{ hour: 1, minute: 5, second: 0 }

// []
// -{ hour: 0, minute: 0, second: 0 }

// [5600]
// -{ hour: 1, minute: 33, second: 20 }

// [100, 3800, "90" ]
// -"Invalid"

/*-------------------*/

// /*function signature/sample */
// function  calculateWatchTime( times ) {
//           // You have to write your code here
// }