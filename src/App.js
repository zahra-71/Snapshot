import { useNavigate, Routes, Route, Navigate} from 'react-router-dom';
import { useCallback, useState } from 'react';
import { ThemeProvider } from '@mui/material';

// styles
import './App.css';

// components
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import PhotoContextProvider from './context/PhotoContext';
import NotFound from './components/items/NotFound';
import Items from './components/items/Items';


 function App() {
  const navigate = useNavigate()
  const [search, SetSearch] = useState("") 
  const routes = ["کوه", "دریا", "پرنده", "جنگل"]
  
  routes.forEach(routeUrl)
  function routeUrl(item, index, arr) {
    arr[index] = encodeURIComponent(item)
  }

  const handleSubmit = useCallback((searchInput) => {
    var url = `/search/${searchInput}`
    navigate(url)
    SetSearch(searchInput)
  }, [navigate])

  return (
    <div className="App">
      <PhotoContextProvider>
        <Header />
        <Form handleSubmit={handleSubmit} />
          <Routes>
            <Route 
             path="/"
             element={<Navigate replace to="/کوه" />}
            />
            <Route path="/search/:searchInput" element={<Items searchTerm={search} />} />
            <Route path={`/${routes[0]}`} element={<Items searchTerm="کوه" />} />
            <Route path={`/${routes[1]}`} element={<Items searchTerm="دریا" />} />
            <Route path={`/${routes[2]}`} element={<Items searchTerm="پرنده" />} />
            <Route path={`/${routes[3]}`} element={<Items searchTerm="جنگل" />} />
            <Route element={<NotFound />}/>
          </Routes>
      </PhotoContextProvider>
    </div>
  );
}

export default App;