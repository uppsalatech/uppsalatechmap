export interface Theme {
  id: string;
  name: string;
  description: string;
  cssFile: string;
  actionWords?: string[];
  colors?: string[];
}

export const themes: Record<string, Theme> = {
  'pop-art': {
    id: 'pop-art',
    name: 'Pop Art',
    description: '1960s Comic Book Style',
    cssFile: 'pop-art.css',
    actionWords: ["POW!", "BAM!", "ZAP!", "WHAM!", "BOOM!", "CRASH!", "KAPOW!", "THWACK!", "BIFF!", "SOCK!"],
    colors: ["#ffff00", "#00d9ff", "#ff0055", "#ff6b00"]
  },
  'web2': {
    id: 'web2',
    name: 'Web 2.0',
    description: 'Glossy & Shiny 2000s Style',
    cssFile: 'web2.css',
    colors: ["#0084ff", "#ff6b35", "#00d084", "#9b59b6"]
  }
};

export const defaultTheme = 'pop-art';

export function getTheme(themeId?: string): Theme {
  if (!themeId || !themes[themeId]) {
    return themes[defaultTheme];
  }
  return themes[themeId];
}
