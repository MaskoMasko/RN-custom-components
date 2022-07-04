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
  transparent,
} from "./src/style/constants";
import CScrollView from "./src/components/CScrollVIew";

interface ShoppingItem {
  text: string;
  id: number;
}

ßexport default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([
    { id: 0, text: "Salad" },
    { id: 1, text: "Corn" },
    { id: 2, text: "Apple" },
  ]);
  const [newItemText, setNewItemText] = useState("");
  const handleRemoveItem = (id: number) => {
    let newList = [...shoppingList].filter((item) => id !== item.id);
    setShoppingList(newList);
  };
  const handleAddItem = (text: string, id: number) => {
    // [...shoppingList].unshift({ text, id }) returna BROJ ?!??!?
    if (text === "") return;
    let newList: ShoppingItem[] = [...shoppingList, { text, id }];
    setNewItemText("");
    setShoppingList(newList);
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
      <CView
        width={0.75 * screenWidth}
        height={50}
        backgroundColor={transparent}
        margin={"padL"}
      >
        <CTextInput
          value={newItemText}
          onChangeText={setNewItemText}
          style={{
            backgroundColor: "whitesmoke",
            borderRadius: 10,
            width: "80%",
            height: 50,
          }}
        />
        <CButton
          //no alignment option lol
          colorTheme="success"
          height={"100%"}
          padding="padL"
          // margin="padS"
          title="Add Item"
          onPress={() => handleAddItem(newItemText, shoppingList.length)}
          //aaa props?
          // onPressPayload={{newItem[0].text, newItem[0].id}}
        />
      </CView>
      <CScrollView height={250} width={"100%"}>
        {shoppingList.map((item) => {
          return (
            <CView
              key={item.id}
              width={0.8 * screenWidth}
              height={50}
              backgroundColor={fontColorLight}
              padding="padM"
              margin="padM"
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
      </CScrollView>
    </CView>
  );
}
