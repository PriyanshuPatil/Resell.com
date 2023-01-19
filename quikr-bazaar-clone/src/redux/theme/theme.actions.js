import { THEME_DARK, THEME_LIGHT } from "./theme.actionType";

export const applyDarkTheme = () => {
  return { type: THEME_DARK };
};

export const applyLightTheme = () => {
  return { type: THEME_LIGHT };
};
