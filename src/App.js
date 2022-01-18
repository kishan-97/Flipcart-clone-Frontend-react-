import Header from './components/header/header'
import Home from './components/home/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/cart/cart';
import { TemplateProvider } from './templates/templateProvider';

function App() {
  return (
   <TemplateProvider>
   <BrowserRouter>
     <Header></Header>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/cart' element={<Cart></Cart>}></Route>
     </Routes>
   </BrowserRouter>
   </TemplateProvider>
  );
}

export default App;
