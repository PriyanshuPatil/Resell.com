import { THEME_DARK, THEME_LIGHT } from "./theme.actionType";

// Note: Do not update/change the initial state
const themeInitalState = {
  theme: "light",
};

export const themeReducer = (state = themeInitalState, { type }) => {
  switch (type) {
    case THEME_LIGHT: {
      return { ...state, theme: "light" };
    }
    case THEME_DARK: {
      return { ...state, theme: "dark" };
    }
    default: {
      return state;
    }
  }
};
