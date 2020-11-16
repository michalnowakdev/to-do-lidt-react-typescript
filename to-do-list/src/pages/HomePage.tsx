import React from "react";
import { FunctionComponent, useState, useEffect } from "react";

import TasksList from '../components/TasksList';
import AddNewTaskSection from '../components/AddNewTaskSection';

import { dataService } from '../services/dataService';

import Task from "../models/Task";


const HomePage: FunctionComponent<{}> = (props) => {
    const [list, setlist] = useState<Task[]>([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await dataService?.getTasks();
        const data: Task[] = response ? response : [];
        setlist(data);
    }

    const markCompleted = async (task: Task): Promise<void> => {
        const sucess = await dataService?.markComplete(task);
        sucess && await getData();
    }

    const addNew = async (description: string): Promise<void> => {
        const task = new Task(new Date().getTime().toString(), description)
        const sucess = await dataService?.addTask(task);
        sucess && await getData();
    }

    const deleteTask = async (task: Task): Promise<void> => {
        const sucess = await dataService?.deleteTask(task);
        sucess && await getData();
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center my-4">
                    <h4 className="text-uppercase">To Do List</h4>
                </div>
                <AddNewTaskSection addNew={addNew} />
                <TasksList
                    listOfTasks={list}
                    markCompleted={markCompleted}
                    deleteTask={deleteTask}
                />
            </div>

        </>
    );
}


export default HomePage;