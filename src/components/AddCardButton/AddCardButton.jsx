import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { FiX, FiPlus } from 'react-icons/fi';
import TextArea from 'react-textarea-autosize';
import { useDispatch, connect } from 'react-redux';

import {
  Container,
  CardContainer,
  ControlContainer,
  AddAnotherCardContainer,
} from './styles';

import { addCard } from '../../features/todosReducer';

function AddCardButton({ listId }) {
  const dispatch = useDispatch();

  //estados do componente
  const [formOpen, setFormOpen] = useState(false);
  const [content, setContent] = useState();

  //responsável por alterar o estado formOpen para true e abrir o campo para
  //adicionar o texto
  function openForm() {
    setFormOpen(true);
  }

  //responsável por alterar o estado formOpen para false e fechar o formulário,
  //ao fechar o estado content é zerado.
  function closeForm() {
    setFormOpen(false);
    setContent('');
  }

  //lida com a alteração dos dados no input
  function handleInputChange(e) {
    setContent(e.target.value);
  }

  //lida com adição de um cartão, caso o conteúdo exista, dispara o comando
  //para incluir o cartão no store, altera o estado formOpen para false, fechando
  //o formulário, finalmente zero o estado do content.
  function handleAddCard() {
    if (content !== '') {
      dispatch(addCard({ content, listId }));
    }
    setFormOpen(false);
    setContent('');
  }

  //função responsável por renderizar o botão de adição de lista.
  const renderAddButton = () => {
    return (
      <Container>
        <AddAnotherCardContainer onClick={openForm}>
          <FiPlus />
          <p>Add another card</p>
        </AddAnotherCardContainer>
      </Container>
    );
  };

  //função responsável por renderizar o formulário de inclusão de lista.
  const renderForm = () => {
    return (
      <Container>
        <CardContainer>
          <TextArea
            placeholder="Enter a text for this card..."
            autoFocus
            onBlur={closeForm}
            value={content}
            onChange={handleInputChange}
            className="textarea-input"
          />
        </CardContainer>
        <ControlContainer>
          <div>
            <Button
              className="teste"
              onMouseDown={handleAddCard}
              variant="contained"
              style={{ color: 'white', backgroundColor: '#5aac44' }}
            >
              Add Card
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
export default connect()(AddCardButton);
