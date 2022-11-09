import Navbar from './Hooks/Navbar/nav';
import { Route, Routes } from 'react-router-dom';
import { Productos } from './Views/Productos';
import { useNavbar } from './Hooks/useNavbar';
import { Usuarios } from './Views/Usuarios';
import { Ventas } from './Views/Ventas';
import { InicioSesion } from './Views/InicioSesion';

export default function App() {
  const { NAVIGATION, abrir, setabrir } = useNavbar()
  return (
    <div className='App'>
      <Navbar data={NAVIGATION} open={abrir} setopen={setabrir} />
      <Routes>
        <Route path='/Productos' element={<Productos />}></Route>
        <Route path='/Usuarios' element={<Usuarios />}></Route>
        <Route path='/Ventas' element={<Ventas />}></Route>
        <Route path='/InicioSesion' element={<InicioSesion/>}></Route>

      </Routes>

    </div>
  )
}
