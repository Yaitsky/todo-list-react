import React, {Component} from 'react';
import {render} from 'react-dom';
import KanbanBoard from './Components/KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  }, {
    id: 1,
    title: "Write some code",
    description: "I should write some code",
    status: "in-progress",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: false
      }, {
        id: 2,
        name: "Kanban Example",
        done: false
      }, {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  }
];

render(
  <KanbanBoard cards={cardsList}/>, document.getElementById('root'));
