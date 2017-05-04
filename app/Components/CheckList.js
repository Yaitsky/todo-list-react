import React, {Component} from 'react';

class CheckList extends Component {
    render() {
        let tasks = this.props.tasks.map((task) => (
            <li className="checklist__task">
                <input className="checklist__input" type="checkbox" defaultChecked={task.done}/>
                <span className="checklist__text">{task.name}</span>
                <a href="#" className="checklist__task--remove"/>
            </li>
        ))

        return (
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default CheckList;