import { useStore } from "@nanostores/react";
import { searchQuery } from "@/stores/search";
import { ThemeCard } from "./theme-card";
import { Frown} from "lucide-react";
import { Button } from "./button";

interface ThemeListProps {
    themes: { name: string, author: string }[];
}

export const ThemeList = ({ themes }: ThemeListProps) => {
    const query = useStore(searchQuery);

    const filteredThemes = themes.filter((theme) => {
        if (!query.length) return true;

        if (query.length < 3) {
            return theme.name.toLowerCase().startsWith(query.toLowerCase());
        }

        return theme.name.toLowerCase().includes(query.toLowerCase());
    });

    return (
        <div
            className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full mt-10 pt-6 relative"
        >
            {
                filteredThemes.length ? filteredThemes.map((theme) => (
                    <ThemeCard
                        name={theme.name}
                        image={`/themes/${theme.name.toLowerCase().replace(/\s+/g, '-')}.webp`}
                        author={theme.author}
                    />
                )) : (
                    <div className="col-span-4 flex items-center justify-center flex-col gap-6 mt-32 text-center">
                        <Frown className="w-10 h-10 text-muted-foreground" />
                        <p className="text-muted-foreground font-medium">No themes found... <br /> consider contributing with what you think is missing!</p>
                        <Button variant="secondary" size="sm" className="w-fit">
                            Submit a theme
                        </Button>
                    </div>
                )
            }
        </div>
    );
}; 