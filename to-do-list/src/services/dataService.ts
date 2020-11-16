import axios from 'axios';

import Task from '../models/Task';


export let dataService: null | DataService = null;
const uri = process.env.REACT_APP_API_URI || "";

export default class DataService {

    static init = () => {
        if (dataService == null) {
            dataService = new DataService();
        }
    }

    getTasks = async (): Promise<Task[]> => {
        let mappedData: Task[] | [] = [];
        const response = await axios.get(uri).catch(e => console.error(e));

        if (response && response.data && response.data?.success) {
            const data: Task[] = response.data.content;
            mappedData = data.map(i => new Task(i?.id, i?.description, i?.completed));
        }
        return mappedData;
    }

    addTask = async (task: Task): Promise<void> => {
        const response: any = await axios.post(`${uri}add`, {
            description: task.description,
            completed: task.completed
        })
            .catch(e => console.error(e));
        if (response?.data?.success) {
            return response?.data?.success;
        }
        throw new Error("Problem with adding task");
    }

    markComplete = async (task: Task): Promise<void> => {
        const response: any = await axios.post(`${uri}update`, {
            id: task.id,
            description: task.description,
            completed: !task.completed
        })
            .catch(e => console.error(e));
        if (response?.data?.success) {
            return response?.data?.success;
        }
        throw new Error("Problem with updating task");
    }

    deleteTask = async (task: Task): Promise<void> => {
        const response: any = await axios.delete(`${uri}${task.id}`)
            .catch(e => console.error(e));
        if (response?.data?.success) {
            return response?.data?.success;
        }
        throw new Error("Problem with deleting task");
    }
}