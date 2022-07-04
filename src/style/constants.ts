import { ViewStyle, StyleSheet, Dimensions } from "react-native";
//rand generirana paleta boja s https://coolors.co/

//object names da ne bude previse importi
//S - Style
//P - Padding
//M - Margin
//A - Alignment
//F - Font Size
//AP - Abosolute Pos
//C - colors

export const fontColorLight = "#FFFAFF";
export const fontColorDark = "#1E1B18";

export const backgroundColorLight = "#5DA2D4";
export const backgroundColorDark = "#0A2463";

export const dangerColor = "#D8315B";
export const successColor = "#3E92CC";

export const transparent = "rgba(255,255,255,0)";

//padding vrijedi i za margine
//P object ali nerabi
export const padS = 4;
export const padM = 8;
export const padL = 12;
export const padXL = 15;
export const padXXL = 20;

//fontSize
export const fsizeS = 12;
export const fsizeM = 15;
export const fsizeL = 20;
export const fsizeXL = 24;
export const fsizeXXL = 30;

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;

//style
interface SInterface {
  centerAll: ViewStyle;
  fDir: ViewStyle;
  absCenterAll: ViewStyle;
}
export const S: SInterface = {
  centerAll: {
    justifyContent: "center",
    alignItems: "center",
  },
  fDir: {
    flexDirection: "column",
  },
  absCenterAll: {
    //ovo se more zamjeniti z ovin..
    // position:"absolute",
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
};
