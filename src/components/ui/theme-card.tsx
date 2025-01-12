import type { Theme } from '@/lib/schemas/theme';
import { ArrowRightIcon } from 'lucide-react';

export const ThemeCard = (theme: Theme) => {
    return (
        <a href={`/theme/${theme.name}`} className="w-full border rounded-xl p-2 group">
            <div className="bg-muted/20 w-full h-48 rounded-lg">
                {/* TODO: add theme screenshot */}
            </div>

            <div className="w-full mt-2 p-2 flex flex-col gap-4">
                <div className="flex items-center gap-2 justify-between">
                    <h4 className="text-xs text-muted-foreground uppercase font-medium inline-flex flex-row items-center gap-1">
                        <span>by</span>
                        <span>{theme.author}</span>
                    </h4>
                    
                    <div className="bg-muted/50 w-full h-[1px]"></div>
                    
                    <div className="flex items-center gap-2">
                        {Object.entries(theme.colors).map(([key, value]) => (
                            <div key={key} className="w-[14px] h-[14px] rounded-full" style={{ backgroundColor: value }}></div>
                        ))}
                    </div>
                </div>

                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{theme.name}</h3>

                <p className="text-sm text-primary/80 line-clamp-3 h-16">{theme.description}</p>

                <p className="flex items-center text-base font-semibold">
                    See details
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-all ml-1"/>
                </p>
            </div>
        </a>
    )
}
