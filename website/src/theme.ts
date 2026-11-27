
export const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light Mode
          primary: {
            main: '#1ab394',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#121212', 
          },
        }
      : {
          // Dark Mode
          primary: {
            main: '#1ab394',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#f1f1f1', 
          },
        }),
  },
});