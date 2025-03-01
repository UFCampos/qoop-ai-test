"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function Header () {
    const {theme, setTheme} = useTheme();
    return (
        <header className="flex justify-between items-center py-4 px-8 sticky top-0 left-0 z-50">
            <Button variant={"ghost"} onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}> 
                {theme === "dark" ? <Sun size={100}/> : <Moon/>}
            </Button>
        </header>
    );
}
