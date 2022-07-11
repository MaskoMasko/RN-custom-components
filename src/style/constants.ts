import { Dimensions } from "react-native";
//rand generirana paleta boja s https://coolors.co/

//object names da ne bude previse importi
//S - Style
//P - Padding
//M - Margin
//A - Alignment
//F - Font Size
//AP - Abosolute Pos
//C - colors
//D - dimensions

export const C = {
  //font
  fontColorLight: "#fffaff",
  fontColorDark: "#1E1B18",

  //background
  backgroundColorDark: "#0A2463",
  backgroundColorLight: "#5DA2D4",

  //button
  success: "#31b55d",
  danger: "#D8315B",
  default: "#3E92CC",

  //transparent
  transparent: "rgba(255,255,255,0)",
};

export type Colors =
  | "fontColorLight"
  | "fontColorDark"
  | "backgroundColorDark"
  | "backgroundColorLight"
  | "transparent";

//padding
export const P = {
  padS: 8,
  padM: 12,
  padL: 15,
  padXL: 20,
};

//margin
export const M = {
  marS: 8,
  marM: 12,
  marL: 15,
  marXL: 20,
};

//fontSize
export const F = {
  fsizeS: 15,
  fsizeM: 20,
  fsizeL: 24,
  fsizeXL: 30,
};

//dimensions
export const D = {
  screenWidth: Dimensions.get("screen").width,
  screenHeight: Dimensions.get("screen").height,
};
