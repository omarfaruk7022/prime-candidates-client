import React from "react";
import Message from "./Message";
import Chat from "./Chat";

const Footer = () => {
  return (
    <div className="text-center ">
      <div>
        <footer className="container max-w-[1080px] mx-auto footer p-10 text-base-content justify-between">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
        
      <div>
        <Message />
      </div>
      <div>
        <p className="text-sm py-5 text-base-500 dark:text-white">
          Copyright © 2022 - All right reserved by Prime Candidates
        </p>
      </div>
      <Chat />
    </div>
    </div>
    
  );
};

export default Footer;
