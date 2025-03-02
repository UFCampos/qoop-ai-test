"use client";

import Image from "next/image";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 sticky top-0 left-0 z-50">
      <ThemeToggleButton />
      <Image
        src={"/qoopai-logo.png"}
        width={125}
        height={100}
        alt="logo"
        className="mx-auto invert"
      />
    </header>
  );
}
