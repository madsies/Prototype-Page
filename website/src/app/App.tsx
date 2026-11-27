
import './App.css';
import Box from '@mui/material/Box';
import Header from '../layout/header';
import { SITE_CONFIG } from '../constants';

function App() {
 
  return (
      
      <>
      <Header></Header>
      <Box sx={{ p: 4, minHeight: '100vh', maxWidth:SITE_CONFIG.MAX_WIDTH_PX, mx: 'auto',}}>
        <div>
          <h1>Test Default</h1>
        </div>
        
      </Box>
      </>
  );
}

export default App;