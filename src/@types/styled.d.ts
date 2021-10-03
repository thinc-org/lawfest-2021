import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      primary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      secondary: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      black: {
        active: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
      };
      backgroundColor: {
        light: {
          primary: string;
          secondary: string;
          tertiary: string;
        };
        dark: {
          primary: string;
          secondary: string;
          tertiary: string;
        };
      };
      textColor: {
        whiteText: {
          primary: string;
          secondary: string;
          tertiary: string;
          quarternary: string;
        };
        blackText: {
          primary: string;
          secondary: string;
          tertiary: string;
          quarternary: string;
        };
      };
    };
  }
}
