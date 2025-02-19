// Problem-05: Let’s Calculate Video watch Time

// ⚠️ Function Name Must be calculateWatchTime()
// সুবাহ সারাদিন Tiktok দেখে সময় নষ্ট করে। কোন পড়াশোনা করেনা। সুবাহর বাবা সুবাহর এই সময় অপচয় নিয়ে অনেক দুশ্চিন্তায় আছেন। সুবাহর বাবা এমন একটি ফাংশন বানাতে চাচ্ছেন যাতে সুবাহ দৈনিক কত সময় ভিডিও দেখে অপচয় করে সেটা তিনি সুন্দর ভাবে দেখতে পারবেন।
// তোমার কাজ হচ্ছে সুবাহর বাবা কে  calculateWatchTime()  নামে একটা ফাংশন বানিয়ে দেয়া যেটা একটা Array ইনপুট  নিবে। Array তে  সুবাহর ভিডিও দেখার সময়(second) গুলো Number আকারে স্টোর থাকবে। ফাংশনটি Array থেকে টোটাল সময় বের করে সেটাকে  ঘণ্টা, মিনিট এবং সেকেন্ডে কনভার্ট করে একটি অব্জেক্ট হিসেবে রিটার্ন করবে।  

// 📥 Input:
// Function টি input নেবে একটি array 
// array এর element গুলো হবে number  (watch times in second) 




// 🚀 Output:
// ফাংশন টি  Array তে থাকা সবগুলো সময় কে calculate করে সেটা কে ঘন্টা মিনিট এবং সেকেন্ড এ কনভার্ট করবে।
// ফাংশন টি একটা অবজেক্ট রিটার্ন করবে।  অবজেক্ট টি দেখতে হবে এই রকম- 
// { hour:14 , minute: 46 , second: 3 } 

// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


// 🚩Challenge:  
// Array element গুলো যদি number না হয় তাহলে   "Invalid" return করবে।  



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


// /*function signature/sample */
// function  calculateWatchTime( times ) {
//           // You have to write your code here
// }




// solution
function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
        totalSeconds += times[i];
    }

    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return { hour: hours, minute: minutes, second: seconds};
}

// Example test cases
console.log(calculateWatchTime([100, 99, 119, 300]));
console.log(calculateWatchTime([1000, 2000, 725]));
console.log(calculateWatchTime([100, 3800]));
console.log(calculateWatchTime([]));
console.log(calculateWatchTime([5600]));
console.log(calculateWatchTime([100, 3800, "90"]));