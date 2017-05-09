import React, {Component} from 'react';
import {render} from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import KanbanBoardContainer from './Components/KanbanBoardContainer';
import KanbanBoard from './Components/KanbanBoard';
import EditCard from './Components/EditCard';
import NewCard from './Components/NewCard';

const routes = (
  <Router history={browserHistory}>
    <Route component={KanbanBoardContainer}>
      <Route path="/" component={KanbanBoard}>
        <Route path="new" component={NewCard} />
        <Route path="edit/:card_id" component={EditCard} />
      </Route>
    </Route>
  </Router>
);

render(routes, document.getElementById('root'));
