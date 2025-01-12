import Github from "@/assets/github.svg";
import Twitter from "@/assets/twitter.svg";
export const Footer = () => {
    return (
        <footer className="bg-background py-8 mt-auto border-t">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold">Hydra Theme Store</h3>
                        <p className="text-sm mt-2">
                            {new Date().getFullYear()} &copy; Hydra Launcher.
                        </p>
                    </div>

                    <div className="flex space-x-6 items-center">
                        <a href="https://github.com/hydralauncher/hydra" className="hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <img
                                src={Github.src}
                                alt="GitHub"
                                width={32}
                                height={32}
                                decoding="async"
                                loading="lazy"
                                className="dark:invert"
                            />
                        </a>
                        <a href="https://x.com/hydralauncher" className="hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            <img
                                src={Twitter.src}
                                alt="Twitter"
                                width={28}
                                height={28}
                                decoding="async"
                                loading="lazy"
                                className="dark:invert"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};