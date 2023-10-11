
import { Theme, createTheme } from "@mui/material/styles"

export interface IThemeWetBat extends Theme {
  defaultColors: {
    color1: string
    color2: string
    color3: string
    color4: string
    color5: string
  }
}

export const defaultTheme = () => ({
  defaultColors: {
    color1: "#5BBFBA",
    color2: "#5F6CAF",
    color3: "#E7F0C3",
    color4: "#F0CF85",
    color5: "#A4D4AE",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  borderRadius: {
    none: "0",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    pill: "999px",
    circular: "50%",
  },
  borderThickness: {
    none: "0",
    hairline: "1px",
    thin: "2px",
    thick: "4px",
    heavy: "8px",
  },
  spacingStack: {
    quarck: "4px",
    nano: "8px",
    xxxs: "16px",
    xxs: "24px",
    xs: "32px",
    sm: "40px",
    md: "48px",
    lg: "56px",
    xl: "64px",
    xxl: "80px",
    xxxl: "120px",
    huge: "160px",
    giant: "200px",
  },
  spacingInset: {
    quarck: "2px",
    nano: "4px",
    xxs: "8px",
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "40px",
  },
  spacingSquish: {
    quarck: "4px 8px",
    nano: "8px 16px",
    xs: "16px 24px",
    sm: "16px 32px",
    md: "16px 40px",
  },
  spacingInline: {
    quarck: "4px",
    nano: "8px",
    xxxs: "16px",
    xxs: "24px",
    xs: "32px",
    sm: "40px",
    md: "48px",
    lg: "64px",
    xl: "80px",
  },
  opacityLevels: {
    semiOpaque: "0.8",
    intense: "0.64",
    medium: "0.32",
    light: "0.16",
    semiTransparent: "0.08",
  },
  shadowLevels: {
    level1: "0px 2px 8px rgba(20, 20, 20, 0.16)",
    level2: "0px 2px 16px rgba(20, 20, 20, 0.16)",
    level3: "0px 2px 24px rgba(20, 20, 20, 0.16)",
    level4: "0px 2px 48px rgba(20, 20, 20, 0.16)",
    level5: "0px 2px 56px rgba(20, 20, 20, 0.16)",
  },
  font: {
    spacing: {
      default: "0em",
      distant: "0.01em",
    },
    lineHeight: {
      xxs: "1em", // 16px
      xs: "1.5em", // 24px
      sm: "2em", // 32px
      md: "2.5em", // 40px
      lg: "3em", // 48px
      xl: "3.5em", // 56px
      xxl: "4em", // 64px
      xxxl: "4.5em", // 72px
    },
    fontFamily: "Montserrat",
    fontWeight: {
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontSize: {
      xxxs: "10px",
      xxs: "12px",
      xs: "14px",
      sm: "16px",
      md: "20px",
      lg: "24px",
      xl: "32px",
      xxl: "40px",
      xxxl: "48px",
      xxxxl: "56px",
      display: "64px",
    },
  },
  scroll: {
    "&::-webkit-scrollbar": {
      width: "12px",
      height: "12px",
    },
    "&::-webkit-scrollbar-button": {
      width: "12px",
      height: "12px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#cccccc",
      border: "0px none transparent",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#cccccc",
    },
    "&::-webkit-scrollbar-thumb:active": {
      backgroundColor: "#cccccc",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
      border: "0px none transparent",
      borderRadius: "8px",
    },
    "&::-webkit-scrollbar-track:hover": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-track:active": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
    },
  },
})

export const theme = () =>
  createTheme({
    ...defaultTheme(),
  })
