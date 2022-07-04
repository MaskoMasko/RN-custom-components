import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import {
  dangerColor,
  fsizeS,
  padL,
  padM,
  padS,
  padXL,
  padXXL,
  S,
  successColor,
} from "../style/constants";

interface CButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  colorTheme: "danger" | "success";
  title?: string;
  padding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  centerText?: boolean;
  hPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  // onPressPayload?: any;
  margin?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  height?: number | string;
  width?: number | string;
}

//jos rabi handle on press funciton
const CButton = React.forwardRef<TouchableOpacity, CButtonProps>(
  (
    {
      children,
      title,
      colorTheme,
      padding,
      hPadding,
      centerText,
      onPress,
      margin,
      height,
      width,
    }: // onPressPayload,
    CButtonProps,
    ref
  ) => {
    // let backgroundColor = "red";
    // if (bgcolor) backgroundColor = "blue";

    function resolvePadding() {
      if (padding === "padS") return padS;
      if (padding === "padM") return padM;
      if (padding === "padL") return padL;
      if (padding === "padXL") return padXL;
      return padXXL;
    }

    function resolveMargin() {
      if (margin === "padS") return padS;
      if (margin === "padM") return padM;
      if (margin === "padL") return padL;
      if (margin === "padXL") return padXL;
      return padXXL;
    }

    function resolveColorTheme() {
      if (colorTheme === "danger") return dangerColor;
      return successColor;
    }

    const buttonPadding = padding && resolvePadding();
    const buttonMargin = margin && resolveMargin();
    const buttonColorTheme = resolveColorTheme();
    const buttonHeight =
      typeof height === "number" || typeof height === "string";
    const buttonWidth = typeof width === "number" || typeof width === "string";

    const buttonStyle: TouchableOpacityProps["style"] = {
      margin: buttonMargin,
      padding: buttonPadding,
      backgroundColor: buttonColorTheme,
      borderRadius: 10,
      paddingHorizontal: hPadding && resolvePadding(),
      ...(centerText && S.centerAll),
      height: buttonHeight ? height : undefined,
      width: buttonWidth ? width : undefined,
    };

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        ref={ref}
        style={buttonStyle}
        onPress={onPress}
      >
        {typeof title === "string" ? (
          <Text style={{ fontSize: fsizeS, color: "white" }}>{title}</Text>
        ) : (
          <>{children}</>
        )}
      </TouchableOpacity>
    );
  }
);

export { CButton as default };
