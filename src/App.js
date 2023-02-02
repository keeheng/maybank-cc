import { Box, Stack } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { DataContextProvider } from './context/DataProvider';
import NavBar from './components/NavBar';
import CreatePage from './pages/CreatePage';

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
                <Route path='/create' element={<CreatePage />}/>
              </Routes>
            </Box>
          </Stack>
        </Box>
      </DataContextProvider>
    </BrowserRouter>

  );
}

export default App;
