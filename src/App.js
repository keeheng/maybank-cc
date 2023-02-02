import { Box, Stack } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import { DataContextProvider } from './context/DataProvider';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
          <Box>
          <Stack spacing={2}>
              <NavBar />
            <Box padding={2}>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/detail/:slug' element={<DetailPage />}/>
              </Routes>
            </Box>
          </Stack>
        </Box>
      </DataContextProvider>
    </BrowserRouter>

  );
}

export default App;
