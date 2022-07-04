import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";

interface CScrollViewProps extends ScrollViewProps {
  children: React.ReactNode;
  width: number | string;
  height: number | string;
}

const CScrollView = React.forwardRef<ScrollView, CScrollViewProps>(
  ({ children, height, width, style, ...props }, ref) => {
    const scrollViewStyle: ScrollViewProps["style"] = {
      maxHeight: height,
      width,
    };
    return (
      <ScrollView
        ref={ref}
        style={[scrollViewStyle, style]}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </ScrollView>
    );
  }
);

export { CScrollView as default };
