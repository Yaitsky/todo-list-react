import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CheckList extends Component {
    render() {
        let tasks = this
            .props
            .tasks
            .map((task) => (
                <li key={task.id} className="checklist__task">
                    <input className="checklist__input" type="checkbox" defaultChecked={task.done}/>
                    <span className="checklist__text">{task.name}</span>
                    <a href="#" className="checklist__task--remove"/>
                </li>
            ))

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
                <input
                    type="text"
                    className="checklist--add-task"
                    placeholder="Add a Task"/>
            </div>
        );
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
};

export default CheckList;