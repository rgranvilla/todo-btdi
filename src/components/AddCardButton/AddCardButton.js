import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { FiX, FiPlus } from 'react-icons/fi';
import TextArea from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';

import { addCard } from '../../features/todosReducer';

import {
  Container,
  CardContainer,
  ControlContainer,
  AddAnotherCardContainer,
} from './styles';

function AddCardButton({ listId }) {
  const dispatch = useDispatch();

  const [formOpen, setFormOpen] = useState(false);
  const [content, setContent] = useState();

  function openForm() {
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setContent('');
  }

  function handleInputChange(e) {
    setContent(e.target.value);
  }

  function handleAddCard() {
    if (content !== '') {
      dispatch(addCard({ content, listId }));
    }
    setFormOpen(false);
    setContent('');
  }

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

  return formOpen ? renderForm() : renderAddButton();
}

export default AddCardButton;
