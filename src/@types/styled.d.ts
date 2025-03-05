import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  // tive que comentar para remover o bug mas o correto seria deixar o código abaixo
  // export interface DefaultTheme extends ThemeType {
  // }

  export type DefaultTheme = ThemeType;
}
