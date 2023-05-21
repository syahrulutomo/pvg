import { css } from "@emotion/css"
import { COLORS } from "@/styles/colors"

export const iconCx =  css`
  position: absolute;
  right: 12px;
  bottom: 24px;
`

export const popupCx = css`
  position: absolute;
  right: 16px;
  bottom: 50px;
  width: 100px;
  height: 36px;
  box-shadow: 0px -1px 6px var(--color-shadow,rgba(49,53,59,0.12));
  background-color: ${COLORS.white00};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s ease;
  
  a {
    text-decoration: none;
    color: #1DA1F2;
  }
`

export const hideCx = css`
  opacity: 0;
  z-index: -99;
  transition: all .25s ease;
`

export const closeCx = css`
  position: absolute;
  right: -10px;
  top: -10px;
  fill: ${COLORS.black100};
  background-color: ${COLORS.white00};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`