import { useState } from "react";
import CTextInput from "./src/components/CTextInput";
import CButton from "./src/components/CButton";
import CText from "./src/components/CText";
import CView from "./src/components/CView";
import {
  backgroundColorDark,
  backgroundColorLight,
  fontColorDark,
  fontColorLight,
  padS,
  screenHeight,
  screenWidth,
} from "./src/style/constants";

interface ShoppingItem {
  text: string;
  id: number;
}

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([
    { id: 0, text: "Salad" },
    { id: 1, text: "Corn" },
    { id: 2, text: "Apple" },
  ]);
  const newItem = useState({ text: "Carrot", id: 3 });
  const handleRemoveItem = (id: number) => {
    let newList = [...shoppingList].filter((item) => id !== item.id);
    setShoppingList(newList);
  };
  const handleAddItem = (text: string, id: number) => {
    //[...shoppingList].unshift({ text, id }) to return number ?!??!?
    // let newList: ShoppingItem[] = [...shoppingList].unshift({ text, id });
    // setShoppingList(newList);
  };
  return (
    <CView
      centerAll
      width={screenWidth}
      height={screenHeight}
      backgroundColor={backgroundColorLight}
      fDir
    >
      <CText
        text="Shopping List"
        textColor={backgroundColorDark}
        bold
        fontSize="fsizeXXL"
      />
      {/* <CTextInput value={value} onChangeText={setValue} /> */}
      {shoppingList.map((item) => {
        return (
          <CView
            key={item.id}
            width={0.8 * screenWidth}
            height={50}
            backgroundColor={fontColorLight}
            //margin ne utjece na padding, ali padding utjece na margin
            padding="padM"
            margin="padS"
            spaceBetween
          >
            <CText text={item.text} bold textColor={fontColorDark} />
            <CButton
              colorTheme="danger"
              title="X"
              hPadding="padS"
              centerText
              onPress={() => handleRemoveItem(item.id)}
            />
          </CView>
        );
      })}
      <CButton
        colorTheme="success"
        padding="padXXL"
        title="Add Item"
        // onPress={handleAddItem}
        //aaa props
        // onPressPayload={{newItem[0].text, newItem[0].id}}
      />
    </CView>
  );
}
