import Navbar from './Components/Navbar/nav';
import { Route, Routes } from 'react-router-dom';
import { Productos } from './Views/Productos';
import { useNavbar } from './Hooks/useNavbar';
import { Usuarios } from './Views/Usuarios';
import {Ventas} from './Views/Ventas';

export default function App() {
  const{NAVIGATION}=useNavbar()
  return (
    <div className='App'>
        <Navbar data={NAVIGATION} />
        <Routes>
          <Route path='/Productos' element={<Productos/>}></Route>
          <Route path='/Usuarios' element={<Usuarios/>}></Route>
          <Route path='/Ventas' element={<Ventas/>}></Route>

        </Routes>

        </div>
  )
}
