import React, { FunctionComponent, useCallback } from 'react';
import Task from '../models/Task';
interface IProps {
    task: Task,
    markCompleted: (task: Task) => void,
    deleteTask: (task: Task) => void,
    isEven: boolean
}

const TaskItem: FunctionComponent<IProps> = ({ task, markCompleted, deleteTask, isEven }) => {

    const getDescription = useCallback(
        (description: string, completed: boolean) => {
            return completed ? <h6><s>{description}</s></h6> : <h6>{description}</h6>
        },
        [],
    )

    return (
        <div className={`row mb-1 ${isEven ? "bg-light" : ""}`}>
            <div className="col-2 d-flex align-items-center">
                <input type="checkbox" checked={task.completed} onChange={() => markCompleted(task)} />
            </div>
            <div className="col-7 d-flex align-items-center">
                {getDescription(task.description, task.completed)}
            </div>
            <div className="col-3 d-flex align-items-center h-80">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteTask(task)}
                    disabled={!task.completed}
                >
                    Delete
                </button>
            </div>

        </div>
    )
}

export default TaskItem;