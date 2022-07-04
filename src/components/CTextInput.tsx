import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface CTextInputProps extends TextInputProps {}

const CTextInput = React.forwardRef<TextInput, CTextInputProps>(
  ({ style, ...defProps }, ref) => {
    //style samo za tekst kako se upise
    return (
      <TextInput ref={ref} style={[{ paddingLeft: 10 }, style]} {...defProps} />
    );
  }
);
export { CTextInput as default };
