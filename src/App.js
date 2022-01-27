import Header from './components/header/header'
import Home from './components/home/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/cart/cart';
import { TemplateProvider } from './templates/templateProvider';
import ContextProvider from './context/loginContext';

function App() {
  return (
   <TemplateProvider>
    <ContextProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
   </TemplateProvider>
  );
}

export default App;
