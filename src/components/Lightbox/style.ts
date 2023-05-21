import { css } from "@emotion/css";

export const backdropCx = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.9;
  transition: all .3s ease;
  z-index: 98;
`

export const imageWrapperCx = css`
  position: fixed;
  left: 50%;
  top: 50%;
  min-width: 300px;
  max-width: 700px;
  aspect-ratio: 1/1;
  transform: translate(-50%, -50%);
  transition: all .3s ease;
  z-index: 99;

  @media screen and (min-width: 768px) {
    min-width: 500px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 700px;
  }
`

export const hideCx = css`
  opacity: 0;
  z-index: -99;
`