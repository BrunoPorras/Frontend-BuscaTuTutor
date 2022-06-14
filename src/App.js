import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//  Páginas base
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Menu from './pages/Menu';
import Demo from './pages/Demo';
import AppPrincipal from './pages/AppPrincipal';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="demo" element={<Demo/>}/>
                <Route path="menu" element={<AppPrincipal/>}/>                
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
