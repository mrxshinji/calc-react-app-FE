/*
# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Theme 1

#### Backgrounds

- Very dark desaturated blue (main background): hsl(222, 26%, 31%)
- Very dark desaturated blue (toggle background, keypad background): hsl(223, 31%, 20%)
- Very dark desaturated blue (screen background): hsl(224, 36%, 15%)

#### Keys

- Desaturated dark blue (key background): hsl(225, 21%, 49%)
- Desaturated dark blue (key shadow): hsl(224, 28%, 35%)

 */

type theme = {
  text1: string,
  text2: string,
  white: string,

  keyBg: string,
  keyShadow: string,

  keyBgToggler: string,
  keyShadowToggler: string,

  keyBg2: string,
  keyShadow2: string,

  mainBg: string,
  bg: string,
  bg2: string
}

const theme1:theme = {
  text1: "hsl(0, 0%, 100%)",
  text2: "hsl(221, 14%, 31%)",
  white: "hsl(0, 0%, 100%)",

  keyBg: "hsl(225, 21%, 49%)",
  keyShadow: "hsl(224, 28%, 35%)",

  keyBgToggler: "hsl(6, 63%, 50%)",
  keyShadowToggler: "hsl(6, 70%, 34%)",

  keyBg2: "hsl(30, 25%, 89%)",
  keyShadow2: "hsl(28, 16%, 65%)",

  mainBg: "hsl(222, 26%, 31%)",
  bg: "hsl(223, 31%, 20%)",
  bg2: "hsl(224, 36%, 15%)"
}

const theme2:theme = {
    text1: "hsl(60, 10%, 19%)",
    text2: "hsl(60, 10%, 19%)",
    white: "hsl(0, 0%, 100%)",
  
    keyBg: "hsl(185, 42%, 37%)",
    keyShadow: "hsl(185, 58%, 25%)",
  
    keyBgToggler: "hsl(25, 98%, 40%)",
    keyShadowToggler: "hsl(25, 99%, 27%)",
  
    keyBg2: "hsl(45, 7%, 89%)",
    keyShadow2: "hsl(35, 11%, 61%)",
  
    mainBg: "hsl(0, 0%, 90%)",
    bg: "hsl(0, 5%, 81%)",
    bg2: "hsl(0, 0%, 93%)"
  }

const theme3:theme = {
    text1: "hsl(52, 100%, 62%)",
    text2: "hsl(52, 100%, 62%)",
    white: "hsl(0, 0%, 100%)",
  
    keyBg: "hsl(281, 89%, 26%)",
    keyShadow: "hsl(285, 91%, 52%)",
  
    keyBgToggler: "hsl(176, 100%, 44%)",
    keyShadowToggler: "hsl(177, 92%, 70%)",
  
    keyBg2: "hsl(268, 47%, 21%)",
    keyShadow2: "hsl(290, 70%, 36%)",
  
    mainBg: "hsl(268, 75%, 9%)",
    bg: "hsl(268, 71%, 12%)",
    bg2: "hsl(268, 71%, 12%)"
  }

export const themes:theme[] = [theme1, theme2, theme3]





