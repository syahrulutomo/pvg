import { css } from "@emotion/css";

export const containerCx = (column: number) => css`
  padding: 32px 24px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(${column}, 1fr);
`

export const sectionCx = css`
  display: flex;
  flex-direction: column;
`