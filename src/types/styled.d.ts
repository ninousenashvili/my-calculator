import "styled-components";
import { Theme } from "../themes./defaultTheme";

// export interface Theme {
//   colors: {
//     cyan: {
//       strong: string;
//       dark: string;
//       darkGrayish: string;
//       grayish: string;
//       lightGrayish: string;
//       extraLightGrayish: string;
//     };
//     white: string;
//   };
//   fonts: {
//     primary: string;
//   };
//   background: string;
//   inputBackground: string;
// }

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
