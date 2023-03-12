import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pures/task';

const TaskListComponent = () => {

    const defaulTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    
    // estado del componente
    const [tasks, setTasks] = useState([defaulTask]);
    const [loading, setLoading] = useState(true);

    // control del ciclo de vida

    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false)
        return () => {
            console.log('Tasklist component is going to unmount...')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>
            <h1>Your Tasks:</h1>
            {/* TODO: Aplicar un for/map para renderizar una lista */}
            <TaskComponent task={defaulTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
