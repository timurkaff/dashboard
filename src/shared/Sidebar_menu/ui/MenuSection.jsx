'use client'
import { IoSpeedometerOutline, IoChatbubblesOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineWindow, MdOutlineSensorDoor, MdOutlineCalendarToday, MdOutlineContactMail } from "react-icons/md";
import { CiHeart, CiSettings } from "react-icons/ci";
import { FaListCheck, FaUsers, FaTable } from "react-icons/fa6";
import { RiFileList2Line } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";

const iconComponents = {
  IoSpeedometerOutline,
  IoChatbubblesOutline,
  IoPricetagsOutline,
  MdOutlineWindow,
  MdOutlineSensorDoor,
  MdOutlineCalendarToday,
  MdOutlineContactMail,
  CiHeart,
  CiSettings,
  FaListCheck,
  FaUsers,
  FaTable,
  RiFileList2Line,
  IoIosDocument
};

export function MenuSection({ items, menuItemClass, setActiveItem }) {
  return (
    <>
      {items.map((item) => {
        const Icon = item.icon ? iconComponents[item.icon] : null;
        return (
          <li key={item.name}>
            <a 
              onClick={() => setActiveItem(item.name)} 
              className={menuItemClass(item.name)}
            >
              {Icon && <Icon />}
              {item.name}
            </a>
          </li>
        );
      })}
    </>
  );
}