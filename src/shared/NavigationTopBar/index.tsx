"use client";

import * as React from "react";
import SearchBar from "./ui/SearchBar";
import LanguageSelector from "./ui/LanguageSelector";
import UserProfile from "./ui/UserProfile";
import Alert from "./ui/Alert";
import Menu from "@/assets/icons/menu.svg"

const NavigationTopBar: React.FC = () => {
  return (
    <nav className="w-full shadow-sm">
      <div className="navbar flex justify-between px-8">

        <div className="flex gap-6">
          <label className="cursor-pointer" htmlFor="my-drawer">
            <Menu/>
          </label>

          <div className="flex gap-6 items-center w-[400px]">
            <SearchBar />
          </div>
        </div>

        <div className="flex-none gap-10">
          <Alert/>
          <LanguageSelector />
          <UserProfile
            name="Moni Roy"
            role="Admin"
            avatarUrl="https://cdn.builder.io/api/v1/image/assets/11e212f66dda423c87c8bf9f23d05ab2/e50fd0c5b705644db5c5e28732e518530472a884658f64df941927ba51ba47d9?placeholderIfAbsent=true"
          />
        </div>

      </div>
    </nav>
  );
};

export default NavigationTopBar;
