import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

//createSlice é responsável por criar a configuração do reducer
export const todosReducer = createSlice({
  name: 'todos',
  //Fornece o estado inicial da store.
  initialState: [
    {
      listId: uuidv4(),
      listTitle: 'To Do',
      cards: [
        {
          id: uuidv4(),
          content: 'List All Tasks.',
        },
        {
          id: uuidv4(),
          content: 'List the tasks not yet completed.',
        },
        {
          id: uuidv4(),
          content: 'List tasks already completed.',
        },
        {
          id: uuidv4(),
          content:
            'Mark a particular task as completed. (Visually show that it has been completed)',
        },
        {
          id: uuidv4(),
          content: 'Insert new tasks.',
        },
        {
          id: uuidv4(),
          content: 'Change the description of a task.',
        },
        {
          id: uuidv4(),
          content: 'Delete task from list.',
        },
        {
          id: uuidv4(),
          content:
            'Display Counter: Total Tasks, Completed Tasks, and Uncompleted Tasks.',
        },
      ],
    },
    {
      listId: uuidv4(),
      listTitle: 'In Progress',
      cards: [],
    },
    {
      listId: uuidv4(),
      listTitle: 'Completed',
      cards: [],
    },
  ],

  //Fornece todos os reducers da nossa aplicação
  reducers: {
    addList: (state, action) => {
      const newState = state;
      const newList = {
        listId: uuidv4(),
        listTitle: action.payload,
        cards: [],
      };
      newState.push(newList);
      return newState;
    },
    deleteList: (state, action) => {
      const newState = state.filter(list => list.listId !== action.payload);
      return newState;
    },
    addCard: (state, { payload }) => {
      const newCard = {
        id: uuidv4(),
        content: payload.content,
      };

      const newState = state.map(list => {
        if (list.listId === payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;
    },
    deleteCard: (state, action) => {
      state.map(lists =>
        lists.listId === action.payload.listId
          ? (lists.cards = [
              lists.cards.slice(0, action.payload.indexCard),
              lists.cards.slice(action.payload.indexCard + 1),
            ].flat())
          : { ...lists },
      );
    },
    updateCard: (state, action) => {
      state.map(lists =>
        lists.listId === action.payload.listId
          ? (lists.cards[action.payload.indexCard].content =
              action.payload.content)
          : { ...lists },
      );
    },
    dragHappened: (state, action) => {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type,
      } = action.payload;

      // arrastando lista
      if (type === 'list') {
        const list = state.splice(droppableIndexStart, 1);
        state.splice(droppableIndexEnd, 0, ...list);
        return state;
      }

      // para mesma lista
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.listId);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // para outra outra
      if (droppableIdStart !== droppableIdEnd) {
        //find the list where drag happened
        const listStart = state.find(list => droppableIdStart === list.listId);

        //retira um cartão da lista'
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // encontra a lista para foi arrastado
        const listEnd = state.find(list => droppableIdEnd === list.listId);

        // coloca o cartão na lista destino
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return state;
    },
  },
});

export const {
  addList,
  deleteList,
  addCard,
  deleteCard,
  updateCard,
  dragHappened,
} = todosReducer.actions;

export default todosReducer.reducer;
