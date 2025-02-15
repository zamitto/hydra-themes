import type { Theme } from '@/lib/schemas/theme';
import * as icons from 'lucide-react';

const { ArrowRight } = icons;

export const ThemeCard = (theme: Theme) => {

    const handleClick = () => {
        const themeName = theme.name.toLowerCase().replace(/\s+/g, '-');
        window.location.href = `hydralauncher://install-theme?theme=${themeName}&author=${theme.author}`;
    };

    return (
        <div
            className="w-full border rounded-xl p-2 group hover:bg-muted/20 transition-all cursor-pointer"
            onClick={handleClick}
        >
            <div className="bg-muted/20 w-full h-48 rounded-lg">
                <img src={theme.image} alt={theme.name} className="w-full h-full object-cover rounded-lg" />
            </div>

            <div className="w-full mt-2 p-2 flex flex-col gap-4">
                <div className="flex items-center gap-2 justify-between">
                    <h4 className="text-xs text-muted-foreground uppercase font-medium inline-flex flex-row items-center gap-1">
                        <span>{theme.name}</span>
                    </h4>

                    <div className="bg-muted/50 flex-1 h-[1px]"></div>

                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all ml-1" />
                </div>
            </div>
        </div>
    )
}
