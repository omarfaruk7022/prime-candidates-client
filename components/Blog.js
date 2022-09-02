import React from "react";
import image1 from "../images//1200px-Node.js_logo.svg.png";
import image2 from "../images//secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png";
const Blog = () => {
  return (
    <div className="grid grid-cols-3 gap-5 my-12">
      <div className="">
        <a className="relative block bg-black group " href="">
          <img
            className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
            src="https://i.ibb.co/4mtRTVN/nodejs-4.jpg"
            alt=""
          />
          <div className="relative p-8">
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              History of Node.js
            </p>

            <p className="text-2xl font-bold text-white">By Barry Scott</p>

            <div className="mt-12">
              <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm text-white">
                  Node.js হলো javascript রানটাইম । আচ্ছা রানটাইম কি জিনিস একটু
                  ছোট্ট করে বলে রাখি, রানটাইম এর কাজ হলো কোড এক্সিকিউট করা ।
                  Javascript কোড, ব্রাউজারে রান করতে হয় আমরা জানি, সেজন্য অনেক
                  ব্রাউজার অনেক ধরনের ইঞ্জিন ব্যবহার করলেও সবচেয়ে শক্তিশালী হলো
                  গুগল ক্রমের V8 ইঞ্জিন । এই ইঞ্জিন বানাতে গুগল যে কোড লিখেছিল
                  তা ছিল সবার জন্য উন্মুক্ত, তাই প্রোগ্রামার রায়ান ডাল এর
                  মাথায় একটা আইডিয়া আসলো , আচ্ছা এই V8 ইঞ্জিনের কোড যেহেতু
                  আছেই তাহলে এই কোড এর সাথে আরও কিছু কোড লিখে যদি একটা নতুন কিছু
                  বানানো যায়, তাহলে ব্যাপারটা একদম চমৎকার হয়ে যাবে। যেই ভাবা
                  সেই কাজ , একটু চিকন বুদ্ধিও খাটালো রায়ান ডাল , সেটা হলো, সেই
                  কোডে সে অপারেটিং সিস্টেমের পারমিশন নিলেন যাতে মেমরি, ফাইল
                  সিস্টেমের মত সিস্টেম রিসোর্সের এক্সেস নিতে পারেন । তারমানে কি
                  দাঁড়ালো? Node.js কে অপারেটিং সিস্টেমে কাজ করানোর মত উপযুক্ত
                  করলেন .।
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="">
        <a className="relative block bg-black group " href="">
          <img
            className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
            src="https://i.ibb.co/F8CjFKg/1-C4y-GTDSLSz86-TCakrza2-HQ.jpg"
            alt=""
          />
          <div className="relative p-8">
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              History of ReactJs
            </p>

            <p className="text-2xl font-bold text-white">By Barry Scott</p>

            <div className="mt-12">
              <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm text-white">
                  ১। রিয়েক্ট ফ্লেক্সিবল। একবার রিয়েক্ট শিখে নিলে এই জ্ঞান
                  ব্যাবহার করে বিভিন্ন প্লাটফর্মে এটি ব্যবহার করা যাবে মানসম্মত
                  ইউজার ইন্টারফেস তৈরি করার জন্য। রিয়েক্ট একটি লাইব্রেরি, কোনো
                  ফ্রেমওয়ার্ক নয়। লাইব্রেরি হওয়ার কারণে এটি অসাধারণ টুলে বিকশিত
                  হতে পারে। রিয়েক্টের জন্ম হয়েছিলো - ওয়েব এপ্লিকেশন্সের জন্য
                  কম্পোনেন্টস বানানোর লক্ষ্যে। কিন্তু রিঅ্যাক্টের জনপ্রিয়তা
                  বাড়ার সাথে সাথে এর ইকোসিস্টেমও বেড়েছে এবং এটিকে এখন
                  বিভিন্নভাবে ব্যবহার করা যায়। আপনি Gatsby এর মত টুল ব্যবহার করে
                  React দিয়ে একটি স্ট্যাটিক সাইট তৈরি করতে পারেন। আপনি মোবাইল
                  অ্যাপ তৈরি করতে রিঅ্যাক্ট নেটিভ ব্যবহার করতে পারেন। এমনকি আপনি
                  ইলেক্ট্রনের মতো একটি টুল ব্যবহার করে ডেস্কটপ অ্যাপ্লিকেশন তৈরি
                  করতে পারেন, যা React.js প্রযুক্তির সাহায্যে ম্যাক এবং উইন্ডোতে
                  চলতে পারে। React এছাড়াও Next.js এর মত টুল ব্যবহার করে এর
                  কম্পোনেন্ট গুলোর সার্ভার রেন্ডারিং সমর্থন করে।
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="">
        <a className="relative block bg-black group " href="">
          <img
            className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
            src="https://i.ibb.co/Q9qwJbV/Getting-Started-with-Next-JS.jpg"
            alt=""
          />
          <div className="relative p-8">
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              History of NextJs
            </p>

            <p className="text-2xl font-bold text-white">By Barry Scott</p>

            <div className="mt-12">
              <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm text-white">
                Node.js হলো javascript রানটাইম । আচ্ছা রানটাইম কি জিনিস একটু
                  ছোট্ট করে বলে রাখি, রানটাইম এর কাজ হলো কোড এক্সিকিউট করা ।
                  Javascript কোড, ব্রাউজারে রান করতে হয় আমরা জানি, সেজন্য অনেক
                  ব্রাউজার অনেক ধরনের ইঞ্জিন ব্যবহার করলেও সবচেয়ে শক্তিশালী হলো
                  গুগল ক্রমের V8 ইঞ্জিন । এই ইঞ্জিন বানাতে গুগল যে কোড লিখেছিল
                  তা ছিল সবার জন্য উন্মুক্ত, তাই প্রোগ্রামার রায়ান ডাল এর
                  মাথায় একটা আইডিয়া আসলো , আচ্ছা এই V8 ইঞ্জিনের কোড যেহেতু
                  আছেই তাহলে এই কোড এর সাথে আরও কিছু কোড লিখে যদি একটা নতুন কিছু
                  বানানো যায়, তাহলে ব্যাপারটা একদম চমৎকার হয়ে যাবে। যেই ভাবা
                  সেই কাজ , একটু চিকন বুদ্ধিও খাটালো রায়ান ডাল , সেটা হলো, সেই
                  কোডে সে অপারেটিং সিস্টেমের পারমিশন নিলেন যাতে মেমরি, ফাইল
                  সিস্টেমের মত সিস্টেম রিসোর্সের এক্সেস নিতে পারেন । তারমানে কি
                  দাঁড়ালো? Node.js কে অপারেটিং সিস্টেমে কাজ করানোর মত উপযুক্ত
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blog;
