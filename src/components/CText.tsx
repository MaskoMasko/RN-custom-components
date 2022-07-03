import { Text, TextStyle } from "react-native";
import React from "react";
import { fsizeL, fsizeM, fsizeS, fsizeXL, fsizeXXL } from "../style/constants";

interface CTextProps {
  text: string;
  fontSize?: "fsizeS" | "fsizeM" | "fsizeL" | "fsizeXL" | "fsizeXXL";
  bold?: boolean;
  textColor?: string;
  //necu jos family
}

const CText = React.forwardRef<Text, CTextProps>(
  ({ text, fontSize, bold, textColor }: CTextProps, ref) => {
    function resolveFontSize() {
      if (fontSize === "fsizeS") return fsizeS;
      if (fontSize === "fsizeM") return fsizeM;
      if (fontSize === "fsizeL") return fsizeL;
      if (fontSize === "fsizeXL") return fsizeXL;
      return fsizeXXL;
    }
    const textStyle: TextStyle = {
      fontSize: fontSize ? resolveFontSize() : fsizeL,
      fontWeight: bold ? "bold" : "normal",
      color: textColor ?? "black",
    };
    return (
      <Text ref={ref} style={textStyle}>
        {text}
      </Text>
    );
  }
);

export { CText as default };
