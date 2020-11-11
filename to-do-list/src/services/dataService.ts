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

        if (response && response.data && response.data?.length) {
            const data: Task[] = response.data;
            mappedData = data.map(i => new Task(i?.id, i?.description, i?.completed));
        }
        return mappedData;
    }

    addTask = async (task: Task): Promise<void> => {
        await axios.post(`${uri}add`, {
            description: task.description,
            completed: task.completed
        })
            .catch(e => console.error(e));
    }

    markComplete = async (task: Task): Promise<void> => {
        await axios.post(`${uri}update`, {
            id: task.id,
            description: task.description,
            completed: !task.completed
        })
            .catch(e => console.error(e));
    }

    deleteTask = async (task: Task): Promise<void> => {
        await axios.delete(`${uri}${task.id}`)
            .catch(e => console.error(e));
    }
}