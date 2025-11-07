"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";
// import Image from "next/image";

export default function NavBar() {
  const [activePage, setActivePage] = useState("home");

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
      {/* TODO links navigation */}
      <div
        id="links__container"
        className="w-3/4 flex flex-col"
      >
        <Separator className="my-2" />
        <div
          id="links"
          className="flex flex-row grow gap-4 px-6 items-center"
        >
          <Button variant="ghost">
            <Link href="/">Home</Link>
          </Button>
          <Separator orientation="vertical" />
          <Button variant="ghost">
            <Link href="/about">About</Link>
          </Button>
          <Separator orientation="vertical" />
          <Button variant="ghost">
            <Link href="/pokemon">Pokemon</Link>
          </Button>
        </div>
        <Separator className="my-2" />
      </div>
      <div
        id="profile"
        className="w-1/12 flex justify-center items-center"
      >
        {/* TODO authentication */}
        <div className="hover:cursor-pointer">
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
