import React from 'react';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Layout from './Componants/layout/Layout';
import Home from './Componants/Home/Home';
import NotFound from './Componants/notFound/NotFound';
import 'jquery/dist/jquery'
import About from './Componants/About/About';
import Portofolio from './Componants/Portofolio/Portofolio';
import Contact from './Componants/Contact/Contact';

let routers=createBrowserRouter([
  {path:'',element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'About',element:<About/>},
    {path:'portofolio',element:<Portofolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>},
  
  ]}
])
const App = () => {
  return<>
 <RouterProvider router={routers}></RouterProvider>
  </>
}

export default App;

