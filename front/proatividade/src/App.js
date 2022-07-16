import Atividade from "./pages/Atividades/Atividade";
import ClienteForm from "./pages/Clientes/ClienteForm";
import Cliente from "./pages/Clientes/Cliente";
import {Route,Routes} from 'react-router-dom';
import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/atividade/lista' element={<Atividade/>}/>
      <Route path='/cliente/lista' element={<Cliente/>}/>
      <Route path='/cliente/detalhe/' element={<ClienteForm/>}/>
      <Route path='/cliente/detalhe/:id' element={<ClienteForm/>}/>
      <Route element={<PageNotFound/>}/>
    </Routes>
  );
}