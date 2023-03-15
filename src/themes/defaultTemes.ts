export interface Theme {
  colors: {
    cyan: {
      strong: string;
      dark: string;
      darkGrayish: string;
      grayish: string;
      lightGrayish: string;
      extraLightGrayish: string;
    };
    white: string;
  };
  fonts: {
    primary: string;
  };
  background: string;
  inputBackground: string;
}

export const defaultTheme: Theme = {
  colors: {
    cyan: {
      strong: "#25BFAB",
      dark: "#00484C",
      darkGrayish: "#7F9B9E",
      grayish: "#7F9C9E",
      lightGrayish: "#C5E4E6",
      extraLightGrayish: "#F4F9FA",
    },
    white: "hsl(0, 0%, 100%)",
  },
  fonts: {
    primary: "Space Mono",
  },
  background: "#C5E4E6",
  inputBackground: "#F3F9FA",
};
