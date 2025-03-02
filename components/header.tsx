"use client";

import Image from "next/image";
import ThemeToggleButton from "./ThemeToggleButton";
import LanguageSwitcher from "./LanguageSwitcher";
import image from "@/public/qoopai-logo.png";

export default function Header({
  lang,
}: {
  lang: string 
}) {
  return (
    <header className="flex justify-between items-center py-4 px-8 sticky top-0 left-0 z-50">
      <ThemeToggleButton />
      <Image
        src={image}
        width={125}
        height={100}
        alt="logo"
        className="mx-auto invert"
      />
      <LanguageSwitcher currentLang={lang} />
    </header>
  );
}
