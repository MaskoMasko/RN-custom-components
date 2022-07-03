import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  GestureResponderEvent,
} from "react-native";
import {
  dangerColor,
  fsizeM,
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
    }: // onPressPayload,
    CButtonProps,
    ref
  ) => {
    // let backgroundColor = "red";
    // if (bgcolor) backgroundColor = "blue";

    function handleOnPress(event: any) {
      if (typeof onPress !== "undefined") {
        // if (onPressPayload) onPress(onPressPayload);
        onPress(event);
      }
    }

    function resolvePadding() {
      if (padding === "padS") return padS;
      if (padding === "padM") return padM;
      if (padding === "padL") return padL;
      if (padding === "padXL") return padXL;
      return padXXL;
    }
    function resolveColorTheme() {
      if (colorTheme === "danger") return dangerColor;
      return successColor;
    }

    const buttonPadding = padding && resolvePadding();
    const buttonColorTheme = resolveColorTheme();

    const buttonStyle: TouchableOpacityProps["style"] = {
      padding: buttonPadding,
      backgroundColor: buttonColorTheme,
      borderRadius: 10,
      paddingHorizontal: hPadding && resolvePadding(),
      ...(centerText && S.centerAll),
    };

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        ref={ref}
        style={buttonStyle}
        onPress={handleOnPress}
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
