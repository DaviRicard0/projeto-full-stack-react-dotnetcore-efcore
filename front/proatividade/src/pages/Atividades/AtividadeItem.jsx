import {Pen} from '../../emojis/pen';
import {Trash} from '../../emojis/trash';
import {Frown} from '../../emojis/Frown';
import {Smile} from '../../emojis/smile';
import {Neutral} from '../../emojis/neutral';

export default function AtividadeItem(props) {

  function prioridadeLabel(param) {
    switch (param) {
      case 'Baixa':
      case 'Normal':
      case 'Alta':
        return param;
      default:
        return 'Não definido';
    }
  }
  
  function prioridadeStyle(param, icone) {
    switch (param) {
      case 'Baixa':
        return icone ? <Smile styles='me-1'/> : 'success';
      case 'Normal':
        return icone ? <Neutral styles='me-1'/> : 'dark';
      case 'Alta':
        return icone ? <Frown styles='me-1'/> : 'warning';
      default:
        return 'Não definido';
    }
  }
  
  return (
    <div className={`card mb-2 shadow-sm border-${prioridadeStyle(props.ativ.prioridade)}`}>
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <h5 className='card-title'>
            <span className="badge bg-secondary me-1">{props.ativ.id}</span>
            - {props.ativ.titulo}
          </h5>
          <h6>
            Prioridade:
            <span className={`ms-1 text-${prioridadeStyle(props.ativ.prioridade)}`}>
              {prioridadeStyle(props.ativ.prioridade, true)}
              {prioridadeLabel(props.ativ.prioridade)}
            </span>
          </h6>
        </div>
        <p className="card-text">
         {props.ativ.descricao}
        </p>
        <div className='d-flex justify-content-end pt-2 m-0 border-top'>
          <button 
            className='btn btn-sm btn-outline-primary me-2'
            onClick={()=>props.pegarAtividade(props.ativ.id)}
          >
            <Pen/>
            Editar
          </button>
          <button 
            className='btn btn-sm btn-outline-danger' 
            onClick={()=>props.handleConfirmModal(props.ativ.id)}
          >
            <Trash/>
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}
