import { ReactElement } from "react";
import { ButtonStylingProps } from "./Button.types";
import { styled } from "styled-components";
import { APPEARANCES } from "./Button.constants";
import { darken } from "polished";

// font-weight: ${typography.weight.extrabold};
// font-size: ${(props) => (props.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2)}px;

export const StyledButton = styled.button<
  ButtonStylingProps & { children: ReactElement }
>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  will-change: transform;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;

  line-height: 1;

  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}

  ${(props) =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
        background: ${color.primary};
        color: ${color.lightest};
  
        ${
          !props.isLoading &&
          `
            &:hover {
              background: ${darken(0.05, color.primary)};
            }
            &:active {
              box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
            }
          `
        }
      `}
`;
