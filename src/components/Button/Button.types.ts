import React, { ReactNode } from "react";
import { SIZES, APPEARANCES } from "./Button.constants";

export interface ButtonStylingProps {
  isLoading?: boolean;
  isUnclickable?: boolean;
  containsIcon?: boolean;
  disabled?: boolean;
  size?: (typeof SIZES)[keyof typeof SIZES];
  appearance?: (typeof APPEARANCES)[keyof typeof APPEARANCES];
}

export interface ButtonConfigProps {
  isLink?: boolean;
  ButtonWrapper?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  isDisabled?: boolean;
  isLoading?: boolean;
}
