import { css } from "@emotion/css";

export const avatarCx = (src: string) => css`
  background-image: url('${src}');
  border-radius: 50%;
  width: 24px;
  height: 24px;
`