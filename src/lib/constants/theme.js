export const lightTheme = {
  palette: {
    primary: {
      main: "#fb5607",
      light: "#bb3e03",
      dark: "#c1121f",
      contrastText: "#081c15",
    },
    secondary: {
      main: "#48444F",
      light: "#fff",
      dark: "#4361ee",
      contrastText: "#03120e",
    },
    error: {
      main: "#FF0000",
      light: "#FF0000",
      dark: "#FF0000",
      contrastText: "#08FFCB",
    },
    succes: {
      main: "#B4FF00",
      light: "#B4FF00",
      dark: "#B4FF00",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFammily: "Roboto",
    fontSize: 14,
  },
  spacing: {},
};

export const darkTheme = {
  palette: {
    primary: {
      main: "#0d1321",
      light: "#4096ee",
      dark: "#4096ee",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0d1321",
      light: "#0d1321",
      dark: "#48444F",
      contrastText: "#fff",
    },
    error: {
      main: "#FF0000",
      light: "#FF0000",
      dark: "#FF0000",
      contrastText: "#08FFCB",
    },
    succes: {
      main: "#B4FF00",
      light: "#B4FF00",
      dark: "#B4FF00",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFammily: "Roboto",
    fontSize: 14,
  },
  spacing: {},
};

export const getThene = (mode = "light") => {
  return mode === "light" ? lightTheme : darkTheme;
};
