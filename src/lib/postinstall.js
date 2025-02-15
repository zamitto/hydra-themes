import fs from "fs";
import path from "path";

const themesPath = path.join(process.cwd(), "src/themes");
const publicThemesPath = path.join(process.cwd(), "public/themes");

const copyAndRenameCSSFiles = (themesPath, publicThemesPath) => {

    if (!fs.existsSync(publicThemesPath)) {
        fs.mkdirSync(publicThemesPath, { recursive: true });
    }

    const items = fs.readdirSync(themesPath, { withFileTypes: true });

    items.forEach(item => {
        if (item.isDirectory()) {
            const themeDir = path.join(themesPath, item.name);
            const cssFiles = fs.readdirSync(themeDir).filter(file => file.endsWith('.css'));

            if (cssFiles.length === 0) return;

            cssFiles.forEach(cssFile => {
                const sourcePath = path.join(themeDir, cssFile);
                const newFileName = `${item.name.toLowerCase().replace(/\s+/g, '-')}.css`;
                const destPath = path.join(publicThemesPath, newFileName);

                try {
                    fs.copyFileSync(sourcePath, destPath);
                } catch (err) {
                    console.error(err);
                }
            });
        }
    });
}

export const genThemeList = () => {
    const themes = fs.readdirSync(path.join(process.cwd(), "src/themes"));

    const themeList = themes.map((theme) => {
        const folder = fs.readdirSync(path.join(process.cwd(), "src/themes", theme));
        const cssFile = folder.find(file => file.endsWith('.css'));
        const authorCode = cssFile ? cssFile.split('-')[1].split('.')[0] : '';
        return { name: theme, author: authorCode };
    });

    const outputPath = path.join(process.cwd(), 'src/lib', 'themes.json');
    fs.writeFileSync(outputPath, JSON.stringify(themeList, null, 2));
}

copyAndRenameCSSFiles(themesPath, publicThemesPath);
genThemeList();
