import { BUTTON_TYPE_CLASSES } from "../components/Button/Button.components";


export type ButtonType = {
    value: string;
    buttonFunction: string;
    buttonType: BUTTON_TYPE_CLASSES
}

export const buttonList:ButtonType[] = [
    {
        value: "7",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "8",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "9",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "DEL",
        buttonFunction: "del",
        buttonType: BUTTON_TYPE_CLASSES.secondary,
    },
    {
        value: "4",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "5",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "6",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "+",
        buttonFunction: "add",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "1",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "2",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "3",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "-",
        buttonFunction: "minus",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: ".",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "0",
        buttonFunction: "addNum",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "/",
        buttonFunction: "divide",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
    {
        value: "x",
        buttonFunction: "mutiply",
        buttonType: BUTTON_TYPE_CLASSES.primary,
    },
]