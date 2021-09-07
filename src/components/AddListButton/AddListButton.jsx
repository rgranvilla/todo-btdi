import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { FiX, FiPlus } from 'react-icons/fi';
import { connect, useDispatch } from 'react-redux';

import {
  Container,
  CardContainer,
  ControlContainer,
  AddAnotherListContainer,
} from './styles';

import { addList } from '../../features/todosReducer';

function AddListButton() {
  const dispatch = useDispatch();

  //estados do componente
  const [formOpen, setFormOpen] = useState(false);
  const [title, setTitle] = useState('');

  //responsável por alterar o estado formOpen para true e abrir o campo para
  //adicionar o texto
  function openForm() {
    setFormOpen(true);
  }

  //responsável por alterar o estado formOpen para false e fechar o formulário,
  //ao fechar o estado title é zerado.
  function closeForm() {
    setFormOpen(false);
    setTitle('');
  }

  //lida com a alteração dos dados no input
  function handleInputChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  //lida com adição de uma lista, caso o conteúdo title exista, dispara o comando
  //para incluir a lista no store, altera o estado formOpen para false, fechando
  //o formulário, finalmente zero o estado do title.
  function handleAddList() {
    if (title !== '') {
      dispatch(addList(title));
    }
    setFormOpen(false);
    setTitle('');
  }

  //função responsável por renderizar o botão de adição de lista.
  const renderAddButton = () => {
    return (
      <Container>
        <AddAnotherListContainer onClick={openForm}>
          <FiPlus />
          <p>Add another list</p>
        </AddAnotherListContainer>
      </Container>
    );
  };

  //função responsável por renderizar o formulário de inclusão de lista.
  const renderForm = () => {
    return (
      <Container>
        <CardContainer>
          <input
            placeholder="Enter a title for this list..."
            value={title}
            autoFocus
            onChange={handleInputChange}
            onBlur={closeForm}
          />
        </CardContainer>
        <ControlContainer>
          <div>
            <Button
              className="teste"
              onMouseDown={handleAddList}
              variant="contained"
              style={{ color: 'white', backgroundColor: '#5aac44' }}
            >
              Add List
            </Button>
          </div>
          <div>
            <FiX onClick={closeForm} size={24} />
          </div>
        </ControlContainer>
      </Container>
    );
  };

  //chave seletora, caso o estado formOpen seja true, renderiza o renderForm,
  //caso o estado seja false, renderiza o renderAddButton.
  return formOpen ? renderForm() : renderAddButton();
}

//conecta o component ao store.
export default connect()(AddListButton);
