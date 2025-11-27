"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../theme/ThemeButton";
import NavButton from "./NavBtn";
// import Image from "next/image";

export default function NavBar() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  return (
    <div className="flex grow justify-between">
      {/* TODO logo */}
      <div
        id="logo"
        className=""
      >
        {/* <Image
          src="/src/app/favicon.ico"
          alt="Site Logo"
          width={400}
          height={200}
        ></Image> */}
        <div className="h-20 w-40 bg-red-500"></div>
      </div>
      {/* TODO links design */}
      <div
        id="links__container"
        className="w-3/4 flex flex-col"
      >
        <Separator className="my-2" />
        <div
          id="links"
          className="flex flex-row grow gap-4 px-6 items-center"
        >
          <NavButton
            isActive={activePage == "home"}
            link="/"
            title="Home"
            onClick={() => setActivePage("home")}
          />
          <Separator orientation="vertical" />
          <NavButton
            isActive={activePage == "about"}
            link="/about"
            title="About"
            onClick={() => setActivePage("about")}
          />
          <Separator orientation="vertical" />
          <NavButton
            isActive={activePage == "pokemon"}
            link="/pokemon"
            title="Pokemon"
            onClick={() => setActivePage("pokemon")}
          />
        </div>
        <Separator className="my-2" />
      </div>
      <div
        id="profile"
        className="w-1/12 flex justify-center items-center"
      >
        {/* TODO authentication */}
        <div className="hover:cursor-pointer flex flex-row gap-8 p-6">
          <ModeToggle />

          <Avatar>
            {/* TODO dinamic picture */}
            <AvatarImage
              src=""
              alt="user icon"
            />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
