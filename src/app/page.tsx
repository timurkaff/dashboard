'use client'
import NavigationTopBar from "@/shared/NavigationTopBar";
import { IoSpeedometerOutline, IoChatbubblesOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineWindow, MdOutlineSensorDoor, MdOutlineCalendarToday, MdOutlineContactMail } from "react-icons/md";
import { CiHeart, CiSettings } from "react-icons/ci";
import { FaListCheck, FaUsers, FaTable } from "react-icons/fa6";
import { RiFileList2Line } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";

import { useState } from 'react';

export default function Home() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  
  const menuItemClass = (itemName: string) => 
    `flex items-center ${activeItem === itemName 
      ? 'bg-[#4880FF] text-white' 
      : 'hover:bg-[#4880FF] hover:text-white'}`;

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <NavigationTopBar/>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu w-[240px]  overflow-auto bg-white">

          <div className="flex mb-8 mt-6 font-semibold text-xl justify-center">
            <h1 className="text-[#4880FF]">Dash</h1>
            <h1 className="text-black">Stack</h1>
          </div>

          <li>
            <a onClick={() => setActiveItem('Dashboard')} className={menuItemClass('Dashboard')}>
              <IoSpeedometerOutline />
              Dashboard
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Products')} className={menuItemClass('Products')}>
              <MdOutlineWindow/>
              Products
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Favorites')} className={menuItemClass('Favorites')}>
              <CiHeart />
              Favorites
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Inbox')} className={menuItemClass('Inbox')}>
              <IoChatbubblesOutline />
              Inbox
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Order Lists')} className={menuItemClass('Order Lists')}>
              <FaListCheck />
              Order Lists
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Product Stock')} className={menuItemClass('Product Stock')}>
              <MdOutlineSensorDoor />
              Product Stock
            </a>
          </li>

          <div className="divider my-4 border-gray-200"></div>

          <div className="px-4 mb-2 text-gray-500 text-sm font-semibold">PAGES</div>

          <li>
            <a onClick={() => setActiveItem('Pricing')} className={menuItemClass('Pricing')}>
              <IoPricetagsOutline />
              Pricing
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Calendar')} className={menuItemClass('Calendar')}>
              <MdOutlineCalendarToday />
              Calendar
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('To-Do')} className={menuItemClass('To-Do')}>
              <IoIosDocument />
              To-Do
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Contact')} className={menuItemClass('Contact')}>
              <MdOutlineContactMail />
              Contact
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Invoice')} className={menuItemClass('Invoice')}>
              <RiFileList2Line />
              Invoice
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('UI Elements')} className={menuItemClass('UI Elements')}>
              <MdOutlineWindow />
              UI Elements
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Team')} className={menuItemClass('Team')}>
              <FaUsers />
              Team
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Table')} className={menuItemClass('Table')}>
              <FaTable />
              Table
            </a>
          </li>

          <div className="divider my-4 border-gray-200"></div>
          <li>
            <a onClick={() => setActiveItem('Settings')} className={menuItemClass('Settings')}>
              <CiSettings />
              Settings
            </a>
          </li>
          <li>
            <a onClick={() => setActiveItem('Logout')} className={menuItemClass('Logout')}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}