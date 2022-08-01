import React from "react";
import Massege from "./Massege";

const Footer = () => {
  return (
    <div className="bg-primary text-center ">
      <footer className="footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-10 text-base-content">
        <div>
          <span className="footer-title text-base-100">Services</span>
          <a className="link link-hover text-base-100">Branding</a>
          <a className="link link-hover text-base-100">Design</a>
          <a className="link link-hover text-base-100">Marketing</a>
          <a className="link link-hover text-base-100">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-base-100">Company</span>
          <a className="link link-hover text-base-100">About us</a>
          <a className="link link-hover text-base-100">Contact</a>
          <a className="link link-hover text-base-100">Jobs</a>
          <a className="link link-hover text-base-100">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-base-100">Legal</span>
          <a className="link link-hover text-base-100">Terms of use</a>
          <a className="link link-hover text-base-100">Privacy policy</a>
          <a className="link link-hover text-base-100">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title text-base-100">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-base-100">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <Massege />
      </div>
      <div>
        <p className="text-sm py-5 text-base-100">
          Copyright © 2022 - All right reserved by Prime Candidates
        </p>
      </div>
    </div>
  );
};

export default Footer;
