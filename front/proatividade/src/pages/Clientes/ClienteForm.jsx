import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TitlePage from '../../components/TitlePage'

export default function ClienteForm() {
  const navigate = useNavigate();
  let {id} = useParams();

  return (
    <>
        <TitlePage title={'Cliente Detalhe ' + (id !== undefined ? id : '')}>
          <button className='btn btn-outline-secondary' onClick={()=>{navigate('/cliente/lista')}}>Voltar</button>
        </TitlePage>
        <div>
            
        </div>
    </>
  )
}
