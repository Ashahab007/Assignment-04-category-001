// ! Problem-01 :
/* 
Calculate the cash-out Charge
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

let isValid = validEmail("chat420@gpt.net");

console.log(isValid);

// ! Problem-03 :
/* 
Who will Win ( 🥭Mango /🍌 Banana )
⚠️
Function Name Must be electionResult()

বাংলাদে দে শে শে র রাজনৈ নৈ তি তি ক ময়দানে নে চলছে ছে টানটান উত্তে ত্তে জনা! Mango-party আর Banana-party মুখখোমুখি খি এক দারুণ নি নি র্ব র্বাচনে নে ! ভভোট চলছে ছে দে দে দারসে সে , কি কি ন্তু গণনা করতে তে গি গি য়ে য়ে সবাই কনফি ফি উজড! 😵 তাই, ততোমাকে কে electionResult() নামে মে একটা ফাংশন লি লি খতে তে হবে বে , যা একটা Array Input নে নে বে বে এবং ভভোটে টে র গণনা করে রে জানি নি য়ে য়ে দে দে বে বে —"কে কে হচ্ছে চ্ছে বি বি জয়ী?"

📥 Input:
- ফাং শন টি টি Input নে নে বে বে একটি টি Array এবং Array এর elements গুললো হবে বে string.
- Example: ["mango", "banana", "Na-Vote", "mango"]

🚀 Output:
- যদি দি Array তে তে "mango" বে বে শি শি হয় তাহলে লে ফাং শন টি টি রি রি টার্ন র্ন করবে বে "Mango"
- যদি দি Array তে তে "banana" বে বে শি শি হয় তাহলে লে ফাং শন টি টি রি রি টার্ন র্ন করবে বে "Banana"
- যদি দি "mango" এবং "banana" সমান সমান হয় তাহলে লে রি রি টার্ন র্ন করবে বে "Draw"

Note: ততোমাকে কে অবশ্যই output টা রি রি টার্ন র্ন করতে তে হবে বে । console.log করলে লে ককোন মার্ক র্ক পাবে বে না
🚩Challenge: যদি দি ইনপুট টি টি Array না হয় তাহলে লে "Invalid" স্ট্রি স্ট্রি ং রি রি টার্ন র্ন করবে বে ।

SAMPLE INPUT                                        SAMPLE OUTPUT
["mango", "banana", "mango", "banana", "mango"]     "Mango"
[]                                                  "Draw"
["mango", "banana", "jaker party" , "no"]           "Draw"
["mango"]                                           "Mango"
["banana", "banana", "age e valo chilam" , "no"]    "Banana"
{result: "mango , banana , mango"}                  "Invalid"
"mango , banana"                                    "Invalid"
["mango", "BananA", "na vote", "na vote"]           "Mango"
*/

function electionResult(votes) {
  if (Array.isArray(votes)) {
    let countMango = 0;
    let countBanana = 0;
    for (const element of votes) {
      if (element === "mango") {
        countMango++;
      } else if (element === "banana") {
        countBanana++;
      }
    }

    if (countMango > countBanana) {
      return "Mango";
    } else if (countBanana > countMango) {
      return "Banana";
    } else if (countBanana === countMango) {
      return "Draw";
    }
  } else {
    return "Invalid";
  }
}

let winner = electionResult(["banana", "banana", "age e valo chilam", "no"]);
console.log(winner);

// ! Problem-04:
/* 
Detect The Perfect Best Friend
⚠️
Function Name Must be isBestFriend()
📢 বন্ধুত্ব কি কি শুধু মুখে খে র কথা? নাকি কি সত্যি ত্যি ত্যি কারে রে র? 🧐 ততোমাকে কে একটা isBestFriend() ফাংশন লি লি খতে তে হবে বে , যা চে চে ক করবে বে দুই বন্ধুর বন্ধুত্ব আসলে লে ই সাচ্চা কি কি না! 🔍
তত
ো
মার ফাংশন কে কে ২ বন্ধুর ডে ডে টা দে দে য়া হবে বে । যদি দি প্রথমজনে নে র bestFriend এর ভ্যালু ২য় জনে নে র roll এর সাথে থে মি মি লে লে যায় এবং দ্বি দ্বি তীয় জনে নে র bestFriend এর ভ্যালু প্রথম জনে নে র roll এর সাথে থে মি মি লে লে যায় তাহলে লে ই আমরা বুঝব যে যে তারা দুইজন সত্যি ত্যি ত্যি কারে রে র বে বে স্ট ফ্রে ফ্রে ন্ড।

📥 Input:
- ফাং শন টি টি 2 টা Input নে নে বে বে ।
- ১ম input টি টি হবে বে একটা object ,
- ২য় input টি টি ও হবে বে একটা object
- প্রতি তি টা object এ ৩ টা property অবশ্যই থাকবে বে
( name: string , roll: number , bestFriend: number )

🚀 Output:
- যদি দি তারা ২ জন ২ জনে নে র বে বে স্ট ফে ফে ন্ড হয়ে য়ে থাকে কে তাহলে লে return করবে বে boolean value true
- আর যদি দি তারা বে বে স্ট ফ্রে ফ্রে ন্ড না হয়ে য়ে থাকে কে তাহলে লে return করবে বে false

Note: ততোমাকে কে অবশ্যই output টা রি রি টার্ন র্ন করতে তে হবে বে । console.log করলে লে ককোন মার্ক র্ক পাবে বে না

🚩Challenge:
Input গুললো যদি দি object না হয় তাহলে লে ফাং শন "Invalid" return করবে বে ।

SAMPLE INPUT                                    SAMPLE OUTPUT
{ name: "hashem", roll: 1, bestFriend: 2 },
{ name: "kashem", roll: 2, bestFriend: 1 }               true
{ name: "hashem", roll: 21, bestFriend: 1},
{ name: "kashem", roll: 1, bestFriend: 2 }              false
{ name:"kashem", roll: 2, bestFriend: 11},
"Kashem er Kono Bondhu Nai"                           "Invalid"
"hashem", { name:"kashem", roll: 2, bestFriend: 11}   "Invalid"
{ name: "hashem", roll: 1 , bestFriend: 1},
{ name: "kashem" , roll: 1, bestFriend: 1 }               true
*/

function isBestFriend(f1, f2) {
  if (typeof f1 === "object" && typeof f2 === "object") {
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

let myBestFriend = isBestFriend(
  { name: "hashem", roll: 1, bestFriend: 1 },
  { name: "kashem", roll: 1, bestFriend: 1 }
);
console.log(myBestFriend);
