import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<
        "theme-light" | "dark" | "system"
    >("theme-light")

    React.useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark")
        setThemeState(isDarkMode ? "dark" : "theme-light")
    }, [])

    React.useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.documentElement.classList[isDark ? "add" : "remove"]("dark")
    }, [theme])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="ring-0 h-8 w-8 rounded-lg">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeState("dark")}>
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeState("system")}>
                    <Monitor className="h-[1rem] w-[1rem]" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
