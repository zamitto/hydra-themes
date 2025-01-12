import Logo from "@/assets/hydra-logo.svg";
import Github from "@/assets/github.svg";
import { ModeToggle } from "@/components/ui/theme-mode";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Header = () => {
    return (
        <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-screen-2xl mx-auto w-full px-4 flex flex-row items-center justify-between xs:h-14 h-12">
                <a href="/" className="flex items-center gap-2">
                    <img
                        src={Logo.src}
                        alt="Hydra Logo"
                        width={30}
                        height={30}
                        decoding="async"
                        loading="lazy"
                    />
                    <span className="text-lg font-medium hidden md:flex">Theme Store</span>
                </a>

                <div className="flex items-center">
                    <div className="items-center gap-2 mr-2">
                        <div className="relative w-full">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[1rem] h-[1rem] text-muted-foreground" />
                            <Input className="pl-10 h-8 bg-muted/50 rounded-lg text-sm text-muted-foreground xs:w-64" placeholder="Search a style..." />
                        </div>
                    </div>

                    <a
                        href="https://github.com/hydra-ai/hydra"
                        className={`${buttonVariants({ variant: "ghost", size: "icon" })} h-8 w-8 rounded-lg`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Github.src}
                            alt="Source Code"
                            width={19}
                            height={19}
                            decoding="async"
                            loading="lazy"
                            className="dark:invert transition-all duration-500"
                        />
                    </a>

                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};