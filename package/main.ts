const styles = {
    // Formatting
    reset:        "§r",
    obfuscated:   "§k",
    bold:         "§l",
    italic:       "§o",
    // Standard colors
    black:        "§0",
    darkBlue:     "§1",
    darkGreen:    "§2",
    darkAqua:     "§3",
    darkRed:      "§4",
    darkPurple:   "§5",
    gold:         "§6",
    gray:         "§7",
    darkGray:     "§8",
    blue:         "§9",
    green:        "§a",
    aqua:         "§b",
    red:          "§c",
    lightPurple:  "§d",
    yellow:       "§e",
    white:        "§f",
    minecoinGold: "§g",
    // Material colors
    quartz:       "§h",
    iron:         "§i",
    netherite:    "§j",
    redstone:     "§m",
    copper:       "§n",
    materialGold: "§p",
    emerald:      "§q",
    diamond:      "§s",
    lapis:        "§t",
    amethyst:     "§u",
    resin:        "§v"
} as const;

type StyleName = keyof typeof styles;

export type Chalk = {
    (text?: string): string;
} & { [K in StyleName]: Chalk };

function createChalk(codes: string[]): Chalk {
    const fn = (text: string = ""): string => codes.join("") + text;

    return new Proxy(fn, {
        get(_, prop: string) {
            if (Object.prototype.hasOwnProperty.call(styles, prop)) {
                return createChalk([...codes, styles[prop as StyleName]]);
            }
            return "";
        },
    }) as Chalk;
}

export const chalk = createChalk([]);