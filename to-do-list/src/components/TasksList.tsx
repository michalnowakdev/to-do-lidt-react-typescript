import React, { FunctionComponent } from 'react';
import Task from '../models/Task';
import TaskItem from './TaskItem';

interface IProps {
    listOfTasks: Task[],
    markCompleted: (task: Task) => void,
    deleteTask: (task: Task) => void,
}

const TasksList: FunctionComponent<IProps> = ({ listOfTasks, markCompleted, deleteTask }) => {
    return (
        <div>
            <div className="row pb-2">
                <div className="col-2">
                    <h6>Status</h6>
                </div>
                <div className="col-7 font-size-2">
                    <h6>Description</h6>
                </div>
                <div className="col-3 font-size-2">
                    <h6>Action</h6>
                </div>

            </div>
            {listOfTasks.map((task, index) =>
                <TaskItem
                    key={task.id}
                    task={task}
                    markCompleted={markCompleted}
                    deleteTask={deleteTask}
                    isEven={!(index % 2)}
                />)}
        </div>
    );
}

export default TasksList;

