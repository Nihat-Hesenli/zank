import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from "./pages/Home/HomePage";
import { ShopPage } from './pages/Shop/ShopPage';
import {Card} from './components/Card/Card'
import { MainLayout } from './components/layouts/MainLayout';




const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
              {/* <Route path='/card' element={<Card />} /> */}



       
        </Route >
      </Routes>
               
    </BrowserRouter>



    






  )


}

export default App;
