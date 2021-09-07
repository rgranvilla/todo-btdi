import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Container } from './styles';

import { sort } from '../../features/sort';
import AddListButton from '../AddListButton/AddListButton';
import List from '../List/List';

function Dashboard() {
  const dispatch = useDispatch();

  function onDragEnd(result) {
    let { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type,
      ),
    );
  }

  const lists = useSelector(state => state.todos);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="all-list" direction="horizontal" type="list">
          {provided => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list, index) => (
                <List
                  title={list.listTitle}
                  cards={list.cards}
                  listId={list.listId}
                  key={list.listId}
                  indexList={index}
                />
              ))}
              {provided.placeholder}
              <AddListButton />
            </Container>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = state => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(Dashboard);
