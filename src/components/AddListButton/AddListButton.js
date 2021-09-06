import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { FiX, FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { addList } from '../../features/todosReducer';

import {
  Container,
  CardContainer,
  ControlContainer,
  AddAnotherListContainer,
} from './styles';

function AddListButton() {
  const dispatch = useDispatch();

  const [formOpen, setFormOpen] = useState(false);
  const [title, setTitle] = useState('');

  function openForm() {
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setTitle('');
  }

  function handleInputChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleAddList() {
    if (title !== '') {
      dispatch(addList(title));
    }
    setFormOpen(false);
    setTitle('');
  }

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

  return formOpen ? renderForm() : renderAddButton();
}

export default AddListButton;
