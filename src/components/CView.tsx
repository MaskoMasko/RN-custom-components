import React from "react";
import { View, ViewStyle } from "react-native";
import { padL, padM, padS, padXL, padXXL, S } from "../style/constants";

export interface CViewProps {
  width: number;
  height: number;
  backgroundColor: string;

  //by default diaply flex
  //uglavnom more tu jos space around, itd.
  centerAll?: boolean;
  hCenterRight?: boolean;
  hCenterLeft?: boolean;
  vCenterRight?: boolean;
  vCenterLeft?: boolean;
  spaceBetween?: boolean;

  //dir more biti row, col, row-rev, col-rev
  fDir?: boolean;

  //padding/margin
  padding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  hPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  vPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  bPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  lPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  rPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  tPadding?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  margin?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  hMargin?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  vMargin?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  bMargin?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  lMargin?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  rMargin?: "padS" | "padM" | "padL" | "padXL" | "padXXL";
  tMargin?: "padS" | "padM" | "padL" | "padXL" | "padXXL";

  //absolute pos
  //center
  absCenterAll?: boolean;
  absCenterTop?: boolean;
  absCenterBottom?: boolean;
  absCenterLeft?: boolean;
  absCenterRight?: boolean;

  //corners
  absTopLeft?: boolean;
  absTopRight?: boolean;
  absBottomLeft?: boolean;
  absBottomRight?: boolean;

  //i jos custom styles
  customStyle?: ViewStyle;
  children?: React.ReactNode;
}

const CView = React.forwardRef<View, CViewProps>(
  (
    {
      children,
      centerAll,
      fDir,
      padding,
      margin,
      absCenterAll,
      customStyle,
      height,
      backgroundColor,
      width,
      spaceBetween,
    },
    ref
  ) => {
    //samo ovi props zbog jednostavnosti
    function resolveAlignment() {
      if (centerAll) return S.centerAll;
    }
    //padding
    function resolvePadding() {
      if (padding === "padS") return padS;
      if (padding === "padM") return padM;
      if (padding === "padL") return padL;
      if (padding === "padXL") return padXL;
      return padXXL;
    }
    //margin
    function resolveMargin() {
      if (padding === "padS") return padS;
      if (padding === "padM") return padM;
      if (padding === "padL") return padL;
      if (padding === "padXL") return padXL;
      return padXXL;
    }
    function resolveAbsPos() {
      if (absCenterAll) return S.absCenterAll;
    }

    const viewPadding = padding && resolvePadding();
    const viewMargin = margin && resolveMargin();
    const viewAlignment = centerAll && resolveAlignment();
    const viewIsAbs = absCenterAll && resolveAbsPos();

    const viewStyle: ViewStyle = {
      height,
      width,
      backgroundColor,
      // ...(centerAll && resolveAlignment()),
      ...viewAlignment,
      padding: viewPadding,
      margin: viewMargin,
      flexDirection: fDir ? "column" : "row",
      ...viewIsAbs,
      borderRadius: 10,
      justifyContent: spaceBetween ? "space-between" : "center",
    };
    return (
      <View style={[viewStyle, customStyle]} ref={ref}>
        {children}
      </View>
    );
  }
);

export { CView as default };
