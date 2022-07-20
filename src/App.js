import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//  Páginas base
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import SerTutor from './pages/SerTutor';
import Demo from './pages/Demo';
import AppPrincipal from './pages/AppPrincipal';
import MiPerfil from './pages/AppMiPerfil';
import VerMasTutor from './pages/AppVerMasTutor';
import MisFavoritos from './pages/MisFavoritos';
import AppBuscar from './pages/AppBuscar';

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