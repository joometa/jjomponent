import { PropsWithChildren, forwardRef, ComponentProps } from "react";
import { StyledButton } from "./Button.styled";
import { ButtonStylingProps, ButtonConfigProps } from "./Button.types";

export const Button = forwardRef<
  unknown,
  PropsWithChildren<
    ButtonConfigProps &
      ButtonStylingProps &
      (JSX.IntrinsicElements["button"] & JSX.IntrinsicElements["a"])
  >
>(
  (
    {
      children,
      isDisabled = false,
      isLoading,
      isLink,
      appearance = "tertiary",
      ...rest
    },
    ref
  ) => {
    if (isLink) {
      return (
        <StyledButton
          as={""}
          disabled={isDisabled}
          isLoading={isLoading}
          appearance={appearance}
          {...rest}
          //@ts-ignore
          ref={ref}
        >
          <>{children}</>
        </StyledButton>
      );
    }
    return (
      <StyledButton
        disabled={isDisabled}
        isLoading={isLoading}
        {...rest}
        ref={ref as ComponentProps<typeof StyledButton>["ref"]}
      >
        <>{children}</>
      </StyledButton>
    );
  }
);

Button.displayName = "button";
