import type { Theme } from "@/lib/schemas/theme";
import { ArrowRight } from "lucide-react";

export interface ThemeCardProps {
  theme: Theme;
}

export function ThemeCard({ theme }: Readonly<ThemeCardProps>) {
  const handleClick = () => {
    const themeName = theme.name.toLowerCase().replace(/\s+/g, "-");
    window.open(
      `hydralauncher://install-theme?theme=${themeName}&author=${theme.author.displayName}`,
      "_blank",
    );
  };

  return (
    <div
      className="group w-full cursor-pointer rounded-xl border p-2 transition-all hover:bg-muted/20"
      onClick={handleClick}
    >
      <div className="h-48 w-full rounded-lg bg-muted/20">
        <img
          src={`/themes/${theme.name}/${theme.screenshotFile}`}
          alt={theme.name}
          className="size-full rounded-lg object-cover"
        />
      </div>

      <div className="mt-2 flex w-full flex-col gap-4 p-2">
        <div className="flex items-center justify-between gap-2">
          <h4 className="inline-flex flex-row items-center gap-1 text-xs font-medium uppercase text-muted-foreground">
            <span>{theme.name}</span>
          </h4>

          <div className="h-px flex-1 bg-muted/50"></div>

          <ArrowRight className="ml-1 size-4 transition-all group-hover:translate-x-1" />
        </div>

        <div className="flex items-center gap-2">
          <img
            src={`/themes/${theme.name}/${theme.authorImage}`}
            alt={theme.author.displayName}
            className="size-6 rounded-full"
          />
          <span className="text-xs text-muted-foreground">
            {theme.author.displayName}
          </span>
        </div>
      </div>
    </div>
  );
}
