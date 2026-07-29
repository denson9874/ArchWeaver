export const parseHexToRgb = (hexColor: string): [number, number, number] => {
  const cleanHex = hexColor.startsWith("#") ? hexColor : `#${hexColor}`;
  const r = parseInt(cleanHex.slice(1, 3), 16) || 34;
  const g = parseInt(cleanHex.slice(3, 5), 16) || 211;
  const b = parseInt(cleanHex.slice(5, 7), 16) || 238;
  return [r, g, b];
};

export const blendColors = (
  r1: number,
  g1: number,
  b1: number,
  r2: number,
  g2: number,
  b2: number,
  ratio: number
): [number, number, number] => {
  return [
    Math.round(r1 * (1 - ratio) + r2 * ratio),
    Math.round(g1 * (1 - ratio) + g2 * ratio),
    Math.round(b1 * (1 - ratio) + b2 * ratio),
  ];
};

export const rgbToHex = ([r, g, b]: [number, number, number]): string => {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};

export const generateThemeShades = (accentColor: string) => {
  const cleanHex = accentColor.startsWith("#") ? accentColor : `#${accentColor}`;
  const [r, g, b] = parseHexToRgb(cleanHex);

  const rgbStr = `${r}, ${g}, ${b}`;
  const shade300 = rgbToHex(blendColors(r, g, b, 255, 255, 255, 0.4));
  const shade400 = cleanHex;
  const shade500 = rgbToHex(blendColors(r, g, b, 0, 0, 0, 0.15));
  const shade950 = rgbToHex(blendColors(r, g, b, 0, 0, 0, 0.85));

  return {
    rgbStr,
    shade300,
    shade400,
    shade500,
    shade950,
  };
};
