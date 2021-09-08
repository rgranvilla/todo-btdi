import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch, connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { Container } from './styles';

import { deleteList } from '../../features/todosReducer';
import Card from '../Card/Card';
import AddCardButton from '../AddCardButton/AddCardButton';

function List({ title, cards, listId, indexList }) {
  const dispatch = useDispatch();

  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  //o hook useEffect é utilizado para verificar sempre que ouver uma
  //modificação no titúlo e atualizar o estado do showDeleteIcon.
  useEffect(() => {
    switch (title) {
      case 'To Do':
      case 'In Progress':
      case 'Completed':
        setShowDeleteIcon(false);
        break;
      default:
        setShowDeleteIcon(true);
    }
  }, [title]);

  //Verifica o tamanho da lista e retorna o valor de cartões contidos.
  const counterCards = cards?.length ? cards.length : 0;

  //Função reponsável por lidar com excluir uma lista da nossa aplicação
  function handleDeleteList() {
    dispatch(deleteList(listId));
  }

  return (
    <Draggable draggableId={String(listId)} index={indexList}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listId)}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <header className="header-wrapper">
                  <div>
                    {showDeleteIcon && <FiTrash2 onClick={handleDeleteList} />}
                    <h4>{title}</h4>
                  </div>
                  <div className="counter">
                    <p>{counterCards}</p>
                  </div>
                </header>
                <main className="content">
                  {cards?.map((card, index) => (
                    <Card
                      listId={listId}
                      key={card.id}
                      indexCard={index}
                      indexList={indexList}
                      cardId={card.id}
                      content={card.content}
                    />
                  ))}
                  {provided.placeholder}
                </main>

                <footer>
                  <AddCardButton listId={listId} />
                </footer>
              </div>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

//conecta o component ao store.
export default connect()(List);
