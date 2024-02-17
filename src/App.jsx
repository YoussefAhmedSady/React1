import React from 'react';
import { createHashRouter,HashRouter} from 'react-router-dom';
import Layout from './Componants/layout/Layout';
import Home from './Componants/Home/Home';
import NotFound from './Componants/notFound/NotFound';
import 'jquery/dist/jquery'
import About from './Componants/About/About';
import Portofolio from './Componants/Portofolio/Portofolio';
import Contact from './Componants/Contact/Contact';


let routers=createHashRouter([
  {path:'',element:<Layout/> ,children:[
    {index:true,element:<Home/>},
    {path:'React1/',element:<Home/>},
    {path:'React1/About',element:<About/>},
    {path:'React1/portofolio',element:<Portofolio/>},
    {path:'React1/contact',element:<Contact/>},
    {path:'*',element:<NotFound/>},
  
  ]}
])
const App = () => {
  return<>
 <HashRouter router={routers}></HashRouter>
  </>
}

export default App;

