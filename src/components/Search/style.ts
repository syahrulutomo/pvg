import { css } from "@emotion/css"

import { COLORS } from "@/styles/colors"

export const containerCx = css`
  margin-top: 16px;
  padding: 0 16px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

export const inputCx = css`
  background-color: ${COLORS.black100};
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  padding: 0 16px;
  outline: none;
  color: ${COLORS.white00};
`