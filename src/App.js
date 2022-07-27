import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//  Páginas base
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import NotFound from './pages/NotFound.js';
import SerTutor from './pages/SerTutor.js';
import Demo from './pages/Demo.js';
import AppPrincipal from './pages/AppPrincipal.js';
import MiPerfil from './pages/AppMiPerfil.js';
import VerMasTutor from './pages/AppVerMasTutor.js';
import MisFavoritos from './pages/MisFavoritos.js';
import AppBuscar from './pages/AppBuscar.js';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="demo" element={<Demo/>}/>
                <Route path="menu" element={<AppPrincipal/>}/>
                <Route path="miperfil" element={<MiPerfil/>}/>
                <Route path="sertutor" element={<SerTutor/>}/>
                <Route path="vermas" element={<VerMasTutor/>}/>
                <Route path="misfavoritos" element={<MisFavoritos/>}/>
                <Route path="buscar" element={<AppBuscar/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;