import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { useDispatch, connect } from 'react-redux';

import { Container } from './styles';

import { deleteCard } from '../../features/todosReducer';
import CardModal from '../CardModal/CardModal';

function Card({ content, cardId, listId, indexCard, indexList }) {
  const dispatch = useDispatch();

  //estado do showModal
  const [showModal, setShowModal] = useState(false);

  //chave liga/desliga, ativa o modal do cartão
  function handleShowModal() {
    setShowModal(prev => !prev);
  }

  //dispara a função para deletar um cartão
  function handleDeleteCard() {
    dispatch(deleteCard({ indexCard, indexList, cardId, listId }));
  }

  return (
    <Draggable draggableId={String(cardId)} index={indexCard}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="wrapper">
            <header>
              <FiEdit onClick={handleShowModal} />
              <FiTrash2 onClick={handleDeleteCard} />
              <CardModal
                showModal={showModal}
                setShowModal={setShowModal}
                content={content}
                cardId={cardId}
                listId={listId}
                indexCard={indexCard}
                indexList={indexList}
              />
            </header>
            <main>
              <p>{content}</p>
            </main>
          </div>
        </Container>
      )}
    </Draggable>
  );
}

//conecta o component ao store.
export default connect()(Card);
