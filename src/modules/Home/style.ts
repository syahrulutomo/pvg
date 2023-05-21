import { css } from "@emotion/css"
import { COLORS } from "@/styles/colors"
import { keyframes } from "@emotion/react"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

export const buttonCx = (isClicked: boolean) => css`
  position: relative;
  bottom: 25px;
  left: 50%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${COLORS.white00};
  fill: ${COLORS.black100};
  cursor: pointer;
  transition: transform 1s ease;
  transform: ${isClicked && 'rotate(360deg)'};
`