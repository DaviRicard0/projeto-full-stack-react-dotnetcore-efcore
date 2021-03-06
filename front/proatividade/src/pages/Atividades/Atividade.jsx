import { useEffect, useState } from 'react';

import AtividadeForm from './AtividadeForm';
import AtividadeLista from './AtividadeLista';

import {Button, Modal} from 'react-bootstrap';

import api from '../../api/atividade';
import { Trash } from '../../emojis/trash';
import TitlePage from '../../components/TitlePage';
import { Plus } from '../../emojis/Plus';

export default function Atividade() {
  const [showAtividadeModal, setShowAtividadeModal] = useState(false);
  const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);
  const [atividades,setAtividades] = useState([]); 
  const [atividade,setAtividade] = useState({id:0});

  const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal);

  const handleConfirmModal = (id) => {
    if (id !== 0 && id !== undefined) {
      const atividade = atividades.filter(atividade => atividade.id === id);
      setAtividade(atividade[0]);
    }else{
      setAtividade({id:0}); 
    }
    setSmShowConfirmModal(!smShowConfirmModal)
  };

  const pegaTodasAtividades = async () => {
    const response = await api.get('atividade');
    return response.data;
  }

  const novaAtividade = () => {
    setAtividade({id:0});
    handleAtividadeModal();
  }

  useEffect(()=>{
    const getAtividades = async () => {
      const todasAtividades = await pegaTodasAtividades();
      console.log(todasAtividades);
      if (todasAtividades){
        setAtividades(todasAtividades);
      }
    } 
    getAtividades();
  },[]);

  const addAtividade = async (ativ) => {
    handleAtividadeModal();
    const response = await api.post('atividade', ativ)
    console.log(response.data);
    setAtividades([...atividades,response.data]);
  }

  function cancelarAtividade() {
    setAtividade({id:0});
    handleAtividadeModal();
  }

  const atualizarAtividade = async (ativ) => {
    handleAtividadeModal();
    if(await api.put(`atividade/${ativ.id}`,ativ))
    {
      setAtividades(atividades.map(item =>  item.id === ativ.id ? ativ : item));
      setAtividade({id:0});
    }
  }

  const deletarAtividade = async (id) => {
    handleConfirmModal(0);
    if(await api.delete(`atividade/${id}`))
    {
      const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
      setAtividades([...atividadesFiltradas]);
    }
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter(atividade => atividade.id === id);
    setAtividade(atividade[0]);
    handleAtividadeModal();
  }

  return (
    <>
    <TitlePage
      title={`Atividades ${atividade.id !== 0 ? atividade.id : ''}`}
      novaAtividade={novaAtividade}
    >
      <Button variant="outline-secondary" onClick={novaAtividade}>
        <Plus/>
      </Button>
    </TitlePage>
    <AtividadeLista
      atividades={atividades}
      pegarAtividade={pegarAtividade}
      handleConfirmModal={handleConfirmModal}
    />

    <Modal show={showAtividadeModal} onHide={handleAtividadeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Atividades {atividade.id !== 0 ? atividade.id : ''}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AtividadeForm
          addAtividade={addAtividade}
          ativSelecionada={atividade}
          atualizarAtividade={atualizarAtividade}
          atividades={atividades}
          cancelarAtividade={cancelarAtividade}
        />
      </Modal.Body>
    </Modal>

    <Modal size='sm' show={smShowConfirmModal} onHide={handleConfirmModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Excluindo Atividade {atividade.id !== 0 ? atividade.id : ''}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza que deseja excluir a atividade {atividade.id}?
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-between'>
        <button className='btn btn-outline-success me-2' onClick={()=>deletarAtividade(atividade.id)}>
          <Trash/>
          Sim
        </button>
        <button className='btn btn-danger me-2' onClick={()=>handleConfirmModal(0)}>
          N??o
        </button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
