import { TextProps } from "react-native";
import { Colors } from "../style/constants";

export interface TextLayoutProps extends TextProps {
  textExtraSmall?: boolean;
  textSmall?: boolean;
  textMedium?: boolean;
  textLarge?: boolean;
  textExtraLarge?: boolean;

  bold?: boolean;

  color?: Colors;
}
