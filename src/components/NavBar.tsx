"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { AlignJustify, MessageCircleIcon, Briefcase, Compass, Award, Home, Linkedin } from 'lucide-react';
import Link from 'next/link';

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <nav className='bg-[#1c2128] w-full h-16 flex items-center justify-between px-5 border-b-[1px] border-white md:h-20'>
      <div className='flex items-center gap-6'>
        <button
          className='bg-[#0d0f13] px-2 py-2 border-[1.5px] border-[#43464b] flex items-center justify-center rounded-md md:hidden'
          onClick={() => setSidebarOpen(true)}
        >
          <AlignJustify color="#ffffff" />
        </button>

        <div className='hidden md:flex gap-6'>
          {[
            { name: "Home", icon: <Home />, href: "/" },
            { name: "Projects", icon: <Briefcase />, href: "/projects" },
            { name: "Strategy", icon: <Compass />, href: "/strategy" },
            { name: "Experience", icon: <Award />, href: "/experience" }
          ].map((item) => (
            <div
              key={item.name}
              className={`flex gap-3 items-center pb-1 cursor-pointer ${active === item.name ? "border-b-2 border-white" : ""}`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-5 items-center'>
        <div className='bg-[#0d0f13] px-2 py-2 border-[1.5px] border-[#43464b] flex items-center justify-center rounded-md'>
          <Link href="https://github.com/bascom241/">

            <Image src="/github.svg" width={25} height={25} alt='GitHub' />
          </Link>
        </div>

        <div className='bg-[#0d0f13] px-2 py-2 border-[1.5px] border-[#43464b] flex items-center justify-center rounded-md'>
          <Link href="https://www.linkedin.com/in/abdulbasit-abdulwahab-144507258/">

            <Linkedin  width={25} height={25} />
          </Link>
        </div>
        <MessageCircleIcon />
        <p>Bascom 241</p>
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed inset-0 bg-black  bg-opacity-50 transition-opacity ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setSidebarOpen(false)}></div>
      <div className={`fixed top-0 left-0 h-full z-50 w-64 bg-[#1c2128] p-5 transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button className='text-white mb-5' onClick={() => setSidebarOpen(false)}>✕</button>
        <div className='flex flex-col gap-5'>
          {[
            { name: "Home", icon: <Home />, href: "/" },
            { name: "Projects", icon: <Briefcase />, href: "/projects" },
            { name: "Strategy", icon: <Compass />, href: "/strategy" },
            { name: "Experience", icon: <Award />, href: "/experience" }
          ].map((item) => (
            <div
              key={item.name}
              className={`flex gap-3 items-center p-2 cursor-pointer ${active === item.name ? "bg-[#43464b] rounded-md" : ""}`}
              onClick={() => {
                setActive(item.name);
                setSidebarOpen(false);
              }}
            >
              {item.icon}
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
