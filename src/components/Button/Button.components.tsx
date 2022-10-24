import { ButtonHTMLAttributes } from "react";
import { PrimaryButton, SecondaryButton, EnterButton } from "./Button.styles";
import { FC } from "react";

export enum BUTTON_TYPE_CLASSES {
  primary = "primary",
  secondary = "secondary",
  enter = "enter",
}

const getButton = (
  buttonType = BUTTON_TYPE_CLASSES.primary
): typeof PrimaryButton =>
  ({
    [BUTTON_TYPE_CLASSES.primary]: PrimaryButton,
    [BUTTON_TYPE_CLASSES.secondary]: SecondaryButton,
    [BUTTON_TYPE_CLASSES.enter]: EnterButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  value: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  buttonType,
  value,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {value}
    </CustomButton>
  );
};
