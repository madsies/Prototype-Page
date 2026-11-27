export type PastelName =
  | 'mint'
  | 'butter'
  | 'lavender'
  | 'peach'
  | 'sky'
  | 'rose';

export interface PastelShade {
  main: string;
  dark: string;        
  contrastText: string; 
}

declare module '@mui/material/styles' {
  interface Palette {
    pastels: Record<PastelName, PastelShade>;
  }
  interface PaletteOptions {
    pastels?: Record<PastelName, PastelShade>;
  }
}

export const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1ab394', contrastText: '#121212' },
          secondary: { main: '#223746', contrastText: '#121212' },
          background: { default: '#F5F5F0', paper: '#FFFFFF' },
          text: { primary: '#121212', secondary: '#495057' },
          pastels: {
            mint:     { main: '#8CE99A', dark: '#69DB7C', contrastText: '#121212' },
            butter:   { main: '#FFE066', dark: '#FFD43B', contrastText: '#121212' },
            lavender: { main: '#D0BFFF', dark: '#B197FC', contrastText: '#121212' },
            peach:    { main: '#FFC078', dark: '#FFA94D', contrastText: '#121212' },
            sky:      { main: '#A5D8FF', dark: '#74C0FC', contrastText: '#121212' },
            rose:     { main: '#FCC2D7', dark: '#FAA2C1', contrastText: '#121212' },
          },
        }
      : {
          primary: { main: '#14856E', contrastText: '#FFFFFF' },
          secondary: { main: '#223746', contrastText: '#FFFFFF' },
          background: { default: '#161817', paper: '#202422' },
          text: { primary: '#F1F1F1', secondary: '#CED4DA' },
          pastels: {
            mint:     { main: '#1E6B38', dark: '#17542C', contrastText: '#FFFFFF' },
            butter:   { main: '#785A00', dark: '#5E4600', contrastText: '#FFFFFF' },
            lavender: { main: '#4E3596', dark: '#3D2975', contrastText: '#FFFFFF' },
            peach:    { main: '#873E08', dark: '#6B3106', contrastText: '#FFFFFF' },
            sky:      { main: '#1B568C', dark: '#14426B', contrastText: '#FFFFFF' },
            rose:     { main: '#8A214B', dark: '#6E1A3C', contrastText: '#FFFFFF' },
          },
        }),
  },
  typography: {
    fontFamily: 'Outfit, sans-serif',
  },
});