import React from "react";
import { Text as RNText, TextStyle } from "react-native";
import { TextLayoutProps } from "../utils/layoutTextProps";

export const Text = React.forwardRef<RNText, TextLayoutProps>(
  ({ style: passThroughStyle, ...props }, ref) => {
    const style: TextStyle = {};
    return (
      <RNText
        ref={ref}
        style={[style, passThroughStyle]}
        {...(props as TextLayoutProps)}
      />
    );
  }
);
