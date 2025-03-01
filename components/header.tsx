"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function Header () {
    const {theme, setTheme} = useTheme();
    return (
        <header className="flex justify-between items-center py-4 px-8">
            <Button onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}> {/* toggle theme button */}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
        </header>
    );
}
