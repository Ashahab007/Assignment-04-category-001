/* 
Problem-01 : Calculate the cash-out Charge
⚠️
Function Name Must be cashOut()
রহি হি ম একজন ছছোট ব্যবসায় ী। প্রতি তি দি দি ন বি বি কাশে শে র মাধ্যমে মে বি বি ভি ভি ন্ন লে লে নদে দে ন করতে তে হয় তাকে কে । একদি দি ন তার দদোকানে নে এক ক্রে ক্রে তা আসে সে এবং বলে লে , 👉 "ভাই, 2000 টাকা ক্যাশ আউট করতে তে চাই। কত চার্জ র্জ কাটবে বে ?"
রহি হি ম মনে নে মনে নে হি হি সাব করতে তে শুরু করল, কি কি ন্তু হঠাৎ সে সে ভাবল—এভাবে বে বারবার হি হি সাব করা ততো ঝামে মে লা! যদি দি একটা ফাংশন থাকত, যে যে টা যে যে ককোননো এমাউন্ট দি দি লে লে ই চার্জ র্জ বে বে র করে রে দি দি ত! এবং রহি হি ম যে যে হে হে তু জানে নে যে যে তুমি মি প্র প্র োগ্র ামি মি ং হি হি ররোর তুখখোড় স্টুডে ডে ন্ট তাই ততোমার কাজ হচ্ছে চ্ছে - রহি হি মকে কে cashOut() নামে মে একটা ফাংশন বানি নি য়ে য়ে দে দে য়া যে যে টা টাকা ইনপুট নি নি লে লে ক্যাশ আউট চার্জ র্জ বে বে র করে রে দে দে বে বে ।
Cashout Charge হললো - 1.75% 📥 Input:
ততোমার ফাং শন একটি টি পজি জি টি টি ভ সং খ্যা (money) ইনপুট নে নে বে বে যা হললো cashout amount.

🚀 Output:
● ফাং শনটি টি 1.75% ক্যাশ আউট চার্জ র্জ ক্যালকুলে লে ট করে রে একটি টি সং খ্যা রি রি টার্ন র্ন করবে বে ।
● Output দশমি মি ক সং খ্যা হতে তে পারে রে ।
Note: ততোমাকে কে অবশ্যই output টা রি রি টার্ন র্ন করতে তে হবে বে । console.log করলে লে ককোন মার্ক র্ক পাবে বে না

🚩Challenge:
- যদি দি ইনপুট টি টি নাম্বার না হয় তাহলে লে "Invalid" স্ট্রি স্ট্রি ং রি রি টার্ন র্ন করবে বে ।
- যদি দি ইনপুট টি টি পজি জি টি টি ভ সং খ্যা না হয় তাহলে লে "Invalid" স্ট্রি স্ট্রি ং রি রি টার্ন র্ন করবে বে ।

💡Hints: যদি দি ইনপুট 2000 হয়, তাহলে লে ক্যাশ আউট চার্জ র্জ হবে বে : 2000× 1.75 / 100 = 35 Taka

SAMPLE INPUT     SAMPLE OUTPUT
2000                    35
100                     1.75
999                     17.4825
-350                    "Invalid"
0                        0
"101"                   "Invalid"
"mewauu"                "Invalid"
*/
function cashOut(money) {
  if (typeof money === "number" && money >= 0) {
    let charge = 1.75 / 100;
    let cashOutCharge = money * charge;
    return `Cash out charge ${cashOutCharge}`;
  } else {
    return "Invalid";
  }
  console.log(money);
}

let charge = cashOut(999);
console.log(charge);

// !Problem-02 :
/* 
Detect email valid or not
⚠️
Function Name Must be validEmail()
এবার ততোমার কাজ হললো validEmail() নামে মে একটা ফাংশন তৈ তৈ রি রি করা, যা একটি টি email ইনপুট নে নে বে বে এবং সে সে টি টি সঠিঠিক নাকিকি ভুল তা যাচাই করে রে একটি টি boolean Value (true/false) কে কে return করবে বে ।
ইমেমেইল ভ্যালিলিড হওয়ার শর্তর্ত গুললো হললো

- ইমে মে ইলে লে র শুরু তে তে ".-_+@" এই স্পে স্পে শাল ক্যারে রে ক্টার গুললো থাকা যাবে বে না ।
- ইমে মে ইলে লে র মাঝখানে নে @ থাকতে তে হবে বে ।
- ইমে মে ইলে লে ককোন স্পে স্পে স থাকা যাবে বে না ।
- ইমে মে ইলে লে র শে শে ষে ষে .com থাকতে তে হবে বে ।
উপরে রে র শর্ত র্ত গুললো পুরন হলে লে ই সে সে true আউটপুট হি হি সে সে বে বে return করবে বে । না হলে লে false আউটপুট হি হি সে সে বে বে return করবে বে । 📥 

Input:
ততোমার ফাং শন একটি টি email ইনপুট নে নে বে বে যা হবে বে একটি টি স্ট্রি স্ট্রি ং ।

🚀 Output:
ততোমার ফাং শন টি টি একটা boolean Value (true/false) কে কে return করবে বে । অবশ্যই ততোমাকে কে কি কি ন্তু
boolean value ই return করতে তে হবে বে ।

Note: ততোমাকে কে অবশ্যই output টা রি রি টার্ন র্ন করতে তে হবে বে । console.log করলে লে ককোন মার্ক র্ক পাবে বে না

🚩Challenge: যদি দি ইনপুট টি টি string না হয় তাহলে লে "Invalid" স্ট্রি স্ট্রি ং রি রি টার্ন র্ন করবে বে ।

SAMPLE INPUT        SAMPLE OUTPUT
"ferdous@gmail.com"         true
"1zihad@gmail.com"          true
"-king@yahoo.com"           false
["jhankar@hero.com"]        "Invalid"
"Mewo@cat.com"              true
"programming-hero.com"      false
"chat420@gpt.net"           false
true                        "Invalid"
"he ro@alom.com"            false
*/

function validEmail(email) {
  if (typeof email === "string") {
    if (
      !email.startsWith(".") &&
      !email.startsWith("-") &&
      !email.startsWith("+") &&
      !email.startsWith("_") &&
      !email.startsWith("@") &&
      !email.includes(" ") &&
      email.endsWith(".com") &&
      email.includes("@")
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

let isValid = validEmail("1zihad@gmail.com");

console.log(isValid);
