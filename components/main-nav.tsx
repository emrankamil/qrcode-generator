"use client";

import * as React from "react";
import Link from "next/link";

import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";
import Logo from "./logo";
import { Button } from "./ui/button";

export function MainNav() {
  return (
    <div className="mr-4 md:flex">
      <Link href="/" className="lg:mr-6 sm:mr-4 flex items-center gap-2">
        <Logo className="hidden lg:block md:block mt-1 fill-black dark:fill-white" />
      </Link>
    </div>
  );
}
