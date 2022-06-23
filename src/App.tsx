import React from "react";
import {
  Stack,
  Text,
  FontWeights,
  IStackTokens,
  IStackStyles,
  ITextStyles,
  DefaultButton,
  Dropdown,
  IDropdownStyles,
  DropdownMenuItemType,
  IDropdownOption,
} from "@fluentui/react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./router";
import { FocusTrapZone } from "@fluentui/react/lib/FocusTrapZone";

const boldStyle: Partial<ITextStyles> = {
  root: { fontWeight: FontWeights.semibold },
};
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};

const options: IDropdownOption[] = [
  {
    key: "fruitsHeader",
    text: "Fruits",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "apple", text: "Apple" },
  { key: "banana", text: "Banana" },
  { key: "orange", text: "Orange", disabled: true },
  { key: "grape", text: "Grape" },
  { key: "divider_1", text: "-", itemType: DropdownMenuItemType.Divider },
  {
    key: "vegetablesHeader",
    text: "Vegetables",
    itemType: DropdownMenuItemType.Header,
  },
  { key: "broccoli", text: "Broccoli" },
  { key: "carrot", text: "Carrot" },
  { key: "lettuce", text: "Lettuce" },
];

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 200 },
};

export const App: React.FunctionComponent = () => {
  return (
    <Stack  styles={stackStyles} tokens={stackTokens}>
      <FocusTrapZone>
        <Router></Router>
      </FocusTrapZone>
    </Stack>
  );
};
