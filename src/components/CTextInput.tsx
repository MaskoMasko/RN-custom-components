import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface CTextInputProps extends TextInputProps {}

const CTextInput = React.forwardRef<TextInput, CTextInputProps>(
  ({ ...defProps }, ref) => {
    //style samo za tekst kako se upise
    return <TextInput ref={ref} {...defProps} />;
  }
);
export { CTextInput as default };
