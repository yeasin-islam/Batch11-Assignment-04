// Problem-02 : Detect email  valid or not

// ⚠️ Function Name Must be validEmail()
// এবার তোমার কাজ হলো validEmail() নামে একটা ফাংশন তৈরি করা, যা একটি email ইনপুট নেবে এবং সেটি সঠিক নাকি ভুল তা যাচাই করে একটি boolean Value (true/false) কে  return করবে।
// ইমেইল ভ্যালিড হওয়ার শর্ত গুলো হলো 
// ইমেইলের  শুরু তে  ".-_+@"  এই স্পেশাল ক্যারেক্টার গুলো থাকা যাবেনা।  
// ইমেইলের মাঝখানে @ থাকতে হবে। 
// ইমেইলে কোন স্পেস থাকা যাবেনা। 
// ইমেইলের শেষে  .com থাকতে হবে।
// উপরের শর্ত গুলো পুরন হলে ই সে true আউটপুট হিসেবে return করবে। না হলে false আউটপুট হিসেবে return করবে। 
// 📥 Input:
// তোমার ফাংশন একটি  email  ইনপুট নেবে যা হবে একটি স্ট্রিং। 



// 🚀 Output:
// তোমার ফাংশন টি একটা boolean Value (true/false) কে  return করবে। অবশ্যই তোমাকে কিন্তু boolean value ই return করতে হবে। 
// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


// 🚩Challenge:  যদি ইনপুট টি string না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 



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


// /*function signature/sample */
// function  validEmail( email ) {
//           // You have to write your code here
// }




// solution
function  validEmail( email ) {
    if (typeof email !== "string") {
        return "Invalid";
    }
    if (email[0] === '-' || email[0] === '.' || email.indexOf(" ") !== -1) {
        return false;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
        return false;
    }
    let atIndex = email.indexOf("@");
    let dotIndex = email.indexOf(".", atIndex);

    if (atIndex === -1 || dotIndex === -1) {
        return false;
    }
    if (email.indexOf("@", atIndex + 1) !== -1) {
        return false;
    }
    if (!email.endsWith(".com")) {
        return false;
    }
    return true;
}


// Example test cases
console.log(validEmail("ferdous@gmail.com"));
console.log(validEmail("1zihad@gmail.com"));
console.log(validEmail("-king@yahoo.com"));
console.log(validEmail(["jhankar@hero.com"]));
console.log(validEmail("Mewo@cat.com"));
console.log(validEmail("programming-hero.com"));
console.log(validEmail("chat420@gpt.net"));
console.log(validEmail(true));
console.log(validEmail("he ro@alom.com"));