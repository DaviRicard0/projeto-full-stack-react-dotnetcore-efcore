import React from 'react'
import { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import TitlePage from '../../components/TitlePage'

const clientes = [
  {
    id: 1,
    nome: "Microsoft",
    responsavel: "Oto",
    contato: '1015564',
    situacao: "Ativo"
  },
  {
    id: 2,
    nome: "Amazon",
    responsavel: "Silvia",
    contato: '10694',
    situacao: "Ativo"
  },
  {
    id: 3,
    nome: "Google",
    responsavel: "Márcia",
    contato: '1065564',
    situacao: "Ativo"
  },
  {
    id: 4,
    nome: "Facebook",
    responsavel: "Terça",
    contato: '105564',
    situacao: "Ativo"
  },
  {
    id: 5,
    nome: "Twiter",
    responsavel: "Quarta",
    contato: '10635564',
    situacao: "Ativo"
  }
]

export default function ClienteLista() {
  const navigate = useNavigate();
  const [termoBusca,setTermoBusca] = useState('');
  const handleInputChange = (e) => {
    setTermoBusca(e.target.value);
  }

  const clientesFiltrados = clientes.filter((cliente)=>{
    return Object.values(cliente).join(' ').toLowerCase().includes(termoBusca.toLowerCase());
  });

  const novoCliente = () => {
    navigate('/cliente/detalhe');
  }

  return (
    <>
        <TitlePage title='Cliente Lista'>
          <Button variant="outline-secondary" onClick={novoCliente}>
            Novo Cliente
          </Button>
        </TitlePage>
        <InputGroup className="mb-3 mt-3">
          <InputGroup.Text>
            Buscar:
          </InputGroup.Text>
          <Form.Control
            placeholder='Buscar por nome do cliente...'
            onChange={handleInputChange}
          />
        </InputGroup>
        <table className="table table-striped table-hover">
          <thead className='table-dark mt-3'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Responsável</th>
              <th scope="col">Contato</th>
              <th scope="col">Situação</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente)=>(
              <tr key={cliente.id}>
              <th scope="row">{cliente.id}</th>
              <td>{cliente.nome}</td>
              <td>{cliente.responsavel}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.situacao}</td>
              <td>
                <div>
                  <button 
                    className='btn btn-sm btn-outline-primary me-2' 
                    onClick={()=>{navigate(
                      `/cliente/detalhe/${cliente.id}`
                    )}}
                  >
                    Editar
                  </button>
                  <button className='btn btn-sm btn-outline-danger me-2'>
                    Desativar
                  </button>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}
