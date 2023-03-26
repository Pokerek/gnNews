import { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

export type ModeState = 'dark' | 'light';
type ColorModeState = {
   toggleColorMode: () => void;
};

export const tokens = (mode: ModeState) => ({
   ...(mode === 'dark'
      ? {
           grey: {
              100: '#e0e0e0',
              200: '#c2c2c2',
              300: '#a3a3a3',
              400: '#858585',
              500: '#666666',
              600: '#525252',
              700: '#3d3d3d',
              800: '#292929',
              900: '#141414'
           },

           primary: {
              100: '#d0d1d5',
              200: '#a1a4ab',
              300: '#727681',
              400: '#434957',
              500: '#141b2d',
              600: '#101624',
              700: '#0c101b',
              800: '#080b12',
              900: '#040509'
           },
           greenAccent: {
              100: '#dbf5ee',
              200: '#b7ebde',
              300: '#94e2cd',
              400: '#70d8bd',
              500: '#4cceac',
              600: '#3da58a',
              700: '#2e7c67',
              800: '#1e5245',
              900: '#0f2922'
           },
           redAccent: {
              100: '#f8dcdb',
              200: '#f1b9b7',
              300: '#e99592',
              400: '#e2726e',
              500: '#db4f4a',
              600: '#af3f3b',
              700: '#832f2c',
              800: '#58201e',
              900: '#2c100f'
           },
           blueAccent: {
              100: '#d7e2fe',
              200: '#afc6fd',
              300: '#88a9fc',
              400: '#608dfb',
              500: '#3870fa',
              600: '#2d5ac8',
              700: '#224396',
              800: '#162d64',
              900: '#0b1632'
           },

           yellowAccent: {
              100: '#fcf2dc',
              200: '#f8e5b9',
              300: '#f5d995',
              400: '#f1cc72',
              500: '#eebf4f',
              600: '#be993f',
              700: '#8f732f',
              800: '#5f4c20',
              900: '#302610'
           }
        }
      : {
           grey: {
              100: '#141414',
              200: '#292929',
              300: '#3d3d3d',
              400: '#525252',
              500: '#666666',
              600: '#858585',
              700: '#a3a3a3',
              800: '#c2c2c2',
              900: '#e0e0e0'
           },
           primary: {
              100: '#040509',
              200: '#080b12',
              300: '#0c101b',
              400: '#101624',
              500: '#141b2d',
              600: '#434957',
              700: '#727681',
              800: '#a1a4ab',
              900: '#d0d1d5'
           },
           greenAccent: {
              100: '#0f2922',
              200: '#1e5245',
              300: '#2e7c67',
              400: '#3da58a',
              500: '#4cceac',
              600: '#70d8bd',
              700: '#94e2cd',
              800: '#b7ebde',
              900: '#dbf5ee'
           },
           redAccent: {
              100: '#2c100f',
              200: '#58201e',
              300: '#832f2c',
              400: '#af3f3b',
              500: '#db4f4a',
              600: '#e2726e',
              700: '#e99592',
              800: '#f1b9b7',
              900: '#f8dcdb'
           },
           blueAccent: {
              100: '#0b1632',
              200: '#162d64',
              300: '#224396',
              400: '#2d5ac8',
              500: '#3870fa',
              600: '#608dfb',
              700: '#88a9fc',
              800: '#afc6fd',
              900: '#d7e2fe'
           },

           yellowAccent: {
              100: '#302610',
              200: '#5f4c20',
              300: '#8f732f',
              400: '#be993f',
              500: '#eebf4f',
              600: '#f1cc72',
              700: '#f5d995',
              800: '#f8e5b9',
              900: '#fcf2dc'
           }
        })
});

export const themeSettings = (mode: ModeState): ThemeOptions => {
   const colors = tokens(mode);

   return {
      palette: {
         mode,
         ...(mode === 'dark'
            ? {
                 primary: {
                    main: colors.primary[500]
                 },
                 secondary: {
                    main: colors.greenAccent[500]
                 },
                 neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                 },
                 background: {
                    default: colors.primary[500]
                 }
              }
            : {
                 primary: {
                    main: colors.primary[100]
                 },
                 secondary: {
                    main: colors.greenAccent[500]
                 },
                 neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                 },
                 background: {
                    default: '#fcfcfc'
                 }
              })
      },
      typography: {
         fontFamily: 'Roboto',
         fontSize: 12,
         h1: {
            fontFamily: 'Roboto',
            fontSize: 40
         },
         h2: {
            fontFamily: 'Roboto',
            fontSize: 32
         },
         h3: {
            fontFamily: 'Roboto',
            fontSize: 24
         },
         h4: {
            fontFamily: 'Roboto',
            fontSize: 20
         },
         h5: {
            fontFamily: 'Roboto',
            fontSize: 16
         },
         h6: {
            fontFamily: 'Roboto',
            fontSize: 14
         }
      }
   };
};

export const ColorModeContext = createContext<ColorModeState>({
   toggleColorMode() {}
});

export const useMode = () => {
   const [mode, setMode] = useState<ModeState>('dark');

   const colorMode = useMemo(
      () => ({
         toggleColorMode: () =>
            setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
      }),
      []
   );

   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

   return [theme, colorMode] as [Theme, ColorModeState];
};
