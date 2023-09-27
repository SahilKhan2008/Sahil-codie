import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src="/images/logo2.png" width={65} height={65} alt="" />
        <p className="text-slate-600">All rights reserved.</p>
        <Link href="https://sahilcodie.substack.com/subscribe?utm_source=menu&simple=true&next=https%3A%2F%2Fsahilcodie.substack.com%2Fp%2Fjournaling%3Fr%3D2t7tq9%26utm_campaign%3Dpost%26utm_medium%3Dweb">
          <span
            className="
        text-purple-500 hover:text-pink-500"
          >
            Subscribe to my news letter
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
