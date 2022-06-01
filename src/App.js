import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//  Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
