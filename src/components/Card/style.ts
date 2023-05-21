import { css } from "@emotion/css"
import { COLORS } from "@/styles/colors";

export const containerCx = css`
  position: relative;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 16px;
`

export const imageCx = css`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; 
  border-radius: 6px;
`

export const infoContainerCx = css`
  background-color: ${COLORS.black100};
  padding: 16px 16px 24px;
  border-radius: 6px;
`;

export const titleCx = css`
  line-height: 1.5;
  max-width: 100%;
  overflow: hidden;
  margin: 0;
  margin-bottom: 16px;
`

export const userCx = css`
  font-size: 14px;
  margin: 0;
  margin-left: 8px;
`

export const avatarContainerCx = css`
  display: flex;
  align-items: center;
`