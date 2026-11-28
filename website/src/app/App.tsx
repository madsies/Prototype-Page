
import './App.css';
import Box from '@mui/material/Box';
import Header from '../layout/header';
import { SITE_CONFIG } from '../constants';
import InfoBox from '../components/InfoBox';
import Typography from '@mui/material/Typography';
import NeoButton from '../components/Button';
import KeyStatsCard from '../components/keyStats';
import Partners from '../components/Partners';
import PlatformModules from '../components/PlatformModules';
import WhySumsSection from '../components/WhySums';
import Footer from '../components/Footer';
import HeavyDivider from '../components/HeavyDivider';
import Testimonials from '../components/Testimonials';

function App() {

  return (
      
      <>
      <Header></Header>
      <Box sx={{ p: 4, minHeight: '100vh', maxWidth:SITE_CONFIG.MAX_WIDTH_PX, mx: 'auto', }}>
        <Box sx={{display:"flex", flexDirection:"row", gap:1,  
        }}>
          <Box sx={{
              display: "flex",  flexDirection: "column",
              alignItems: "flex-start",gap: 2, maxWidth: 600,
            }}>
              <InfoBox
                colour={"rose"}
                offset={2}
                sx={{
                  width: "fit-content",
                  transform: "rotate(-1.75deg)",
                  mb: 1,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  BY STUDENTS’ UNIONS, FOR STUDENTS’ UNIONS
                </Typography>
              </InfoBox>

              <Typography fontWeight={800} lineHeight={1.05} variant="h3" sx={{ mb: 0.5 }}>
                Run your entire Students' Union under one system
              </Typography>

              <Typography
                variant="h6" fontWeight={400} lineHeight={1.5} fontStyle="italic" sx={{ maxWidth: 520 }}
              >
                Manage 50,000+ memberships, run campus elections, and sync venue EPOS data without the spreadsheet chaos.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "row", gap: 2,mt: 2,
              }}>
                <NeoButton
                  label="Explore our modules"
                  onClick={() => {}}
                  sx={{ width: "fit-content" }}
                />
                <NeoButton
                  label="Book a Demo"
                  onClick={() => {}}
                  sx={{ width: "fit-content" }}
                />
              </Box>
            </Box>

          <Box sx={{display:"flex", flexDirection:"column", width:"45%", gap:1}}>
            <KeyStatsCard/>
            <Box sx={{display:"flex", flexDirection:"row", width:"120%", transform:"translate(-10%, -10%)", gap:1}}> 
              <InfoBox colour="lavender" sx={{display:{xs: "none", sm:"none", md:"block"}, width:"100%", transform: "rotate(2.5deg)"}}>
                <Typography variant='body2'>
                  "This is the first time in <b>my 5 years</b> at Northampton that I’ve seen such a well organised and information full Welcome page."
                </Typography>
                <Typography variant="subtitle2">- University of Northampton SU</Typography>
              </InfoBox>
              <InfoBox colour="butter" sx={{width:{xs:"100%", sm:"100%", md:"50%"}, transform: "rotate(-3deg);"}}>
                <Typography>Trusted by <b>over 20</b> Student Unions</Typography>
              </InfoBox>
            </Box>
          </Box>
        </Box>
        <Partners></Partners>
        
        <Box id="modules" sx={{ scrollMarginTop: "100px" }}>
          <PlatformModules/>
        </Box>

        <HeavyDivider/>
        
        <Box id="testimonials" sx={{ scrollMarginTop: "100px" }}>
          <Testimonials/>
        </Box>

        <HeavyDivider/>
        
        <Box id="why-sums" sx={{ scrollMarginTop: "100px" }}>
          <WhySumsSection/>
        </Box>

        <HeavyDivider/>
        
        <Box id="footer" sx={{ scrollMarginTop: "100px" }}>
          <Footer/>
        </Box>
      </Box>
      </>
  );
}

export default App;