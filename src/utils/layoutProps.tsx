import React, { forwardRef } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { C, Colors, M, P } from "../style/constants";

export interface LayoutProps {
  //basics
  backgroundColor?: Colors | string;
  width?: number;
  height?: number;

  //padding
  padSmall?: boolean;
  padMedium?: boolean;
  padLarge?: boolean;
  padExtraLarge?: boolean;

  verticalPadSmall?: boolean;
  verticalPadMedium?: boolean;
  verticalPadLarge?: boolean;
  verticalPadExtraLarge?: boolean;

  horizontalPadSmall?: boolean;
  horizontalPadMedium?: boolean;
  horizontalPadLarge?: boolean;
  horizontalPadExtraLarge?: boolean;

  //margin
  marSmall?: boolean;
  marMedium?: boolean;
  marLarge?: boolean;
  marExtraLarge?: boolean;

  verticalMarSmall?: boolean;
  verticalMarMedium?: boolean;
  verticalMarLarge?: boolean;
  verticalMarExtraLarge?: boolean;

  horizontalMarSmall?: boolean;
  horizontalMarMedium?: boolean;
  horizontalMarLarge?: boolean;
  horizontalMarExtraLarge?: boolean;

  //content alignment
  centerAll?: boolean;
  horizontalCenterRight?: boolean;
  horizontalCenterLeft?: boolean;
  verticalCenterDown?: boolean;
  verticalCenterUp?: boolean;
  verticalCenterSpaceBetween?: boolean;
  horizontalCenterSpaceBetween?: boolean;
  verticalCenterSpaceAround?: boolean;
  horizontalCenterSpaceAround?: boolean;
  verticalCenterSpaceEvenly?: boolean;
  horizontalCenterSpaceEvenly?: boolean;

  //list content
  listRow?: boolean;
  listCol?: boolean;
  listReverseRow?: boolean;
  listReverseCol?: boolean;

  //absolute pos
  absTopLeft?: boolean;
  absTopRight?: boolean;
  absBottomLeft?: boolean;
  absBottomRight?: boolean;

  customAbs?: boolean;

  aspectRatio?: boolean;
  flex?: boolean;
}

// interface LayoutStyle {
// }

export function layoutProps<
  //ovo salje da ima componeneta style prop ca je krivo
  Props extends React.PropsWithRef<{
    style?: StyleProp<any>;
  }>,
  RNComponent
>(Component: React.ComponentType<Props>) {
  return forwardRef<RNComponent, Props & LayoutProps>(
    (
      {
        style: componentStyle,
        height,
        width,
        backgroundColor,
        padSmall,
        padMedium,
        padLarge,
        padExtraLarge,
        verticalPadSmall,
        verticalPadMedium,
        verticalPadExtraLarge,
        horizontalPadSmall,
        horizontalPadMedium,
        horizontalPadLarge,
        horizontalPadExtraLarge,
        marSmall,
        marMedium,
        marLarge,
        marExtraLarge,
        verticalMarSmall,
        verticalMarMedium,
        verticalMarLarge,
        verticalMarExtraLarge,
        horizontalMarSmall,
        horizontalMarMedium,
        horizontalMarLarge,
        horizontalMarExtraLarge,
        centerAll,
        horizontalCenterRight,
        horizontalCenterLeft,
        verticalCenterUp,
        verticalCenterDown,
        verticalCenterSpaceBetween,
        verticalCenterSpaceAround,
        verticalCenterSpaceEvenly,
        verticalPadLarge,
        horizontalCenterSpaceAround,
        horizontalCenterSpaceEvenly,
        horizontalCenterSpaceBetween,
        listCol,
        listReverseCol,
        listReverseRow,
        listRow,
        absBottomLeft,
        absBottomRight,
        absTopLeft,
        absTopRight,
        customAbs,
        aspectRatio,
        flex,
        ...props
      },
      ref
    ) => {
      const getBgColor = (color: string | undefined) => {
        if (!color) return;
        if (color === "backgroundColorDark") return C.backgroundColorDark;
        else if (color === "backgroundColorLight")
          return C.backgroundColorLight;
        else return color;
      };

      const style: ViewStyle = {
        backgroundColor: getBgColor(backgroundColor),
      };

      if (height) style.height = height;
      if (width) style.width = width;

      if (padSmall) style.padding = P.padS;
      if (padMedium) style.padding = P.padM;
      if (padLarge) style.padding = P.padL;
      if (padExtraLarge) style.padding = P.padXL;

      if (marSmall) style.padding = M.marS;
      if (marMedium) style.padding = M.marM;
      if (marLarge) style.padding = M.marL;
      if (marExtraLarge) style.padding = M.marXL;

      if (verticalPadSmall) style.paddingVertical = P.padS;
      if (verticalPadMedium) style.paddingVertical = P.padM;
      if (verticalPadLarge) style.paddingVertical = P.padL;
      if (verticalPadExtraLarge) style.paddingVertical = P.padXL;

      if (verticalMarSmall) style.marginVertical = M.marS;
      if (verticalMarMedium) style.marginVertical = M.marM;
      if (verticalMarLarge) style.marginVertical = M.marL;
      if (verticalMarExtraLarge) style.marginVertical = M.marXL;

      if (horizontalPadSmall) style.paddingHorizontal = P.padS;
      if (horizontalPadMedium) style.paddingHorizontal = P.padM;
      if (horizontalPadLarge) style.paddingHorizontal = P.padL;
      if (horizontalPadExtraLarge) style.paddingHorizontal = P.padXL;

      if (horizontalMarSmall) style.marginHorizontal = M.marS;
      if (horizontalMarMedium) style.marginHorizontal = M.marM;
      if (horizontalMarLarge) style.marginHorizontal = M.marL;
      if (horizontalMarExtraLarge) style.marginHorizontal = M.marXL;

      if (centerAll) {
        (style.justifyContent = "center"), (style.alignItems = "center");
      }
      if(horizontalCenterLeft){
        (style.justifyContent = "flex-start"), (style.alignItems = "center");
      }
      if(horizontalCenterRight){
        (style.justifyContent = "flex-end"), (style.alignItems = "center");
      }
      if(verticalCenterDown){
        (style.justifyContent = "center"), (style.alignItems = "flex-end");
      }
      if(verticalCenterUp){
        (style.justifyContent = "center"), (style.alignItems = "flex-start");
      }
      // if(horizontalCenterLeft)
      // if(horizontalCenterLeft)
      // if(horizontalCenterLeft)
      // if(horizontalCenterLeft)
      // if(horizontalCenterLeft)
      // if(horizontalCenterLeft)

      return (
        <Component
          ref={ref}
          {...(props as Props)}
          style={[componentStyle, style]}
        />
      );
    }
  );
}

// ...StyleSheet.absoluteFillObject,
