import React, { useState } from 'react';


type TaskType = {
    id: number
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    // changeFilter: (value: FilterValuesType) => void
    deleteAllTasks: () => void
}

export function Todolist(props: PropsType) {

    const [filter, setFilter] = useState<string>("all");

    let tasksForTodolist = props.tasks;

    if (filter === "active") {
        debugger
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }
    if (filter === "three") {
        tasksForTodolist = props.tasks.filter(t => t.id <= 3);
    }

    function changeFilter(value: string) {
        setFilter(value);
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={() => { props.removeTask(t.id) }}>x</button>
                </li>)
            }
        </ul>

        <button onClick={props.deleteAllTasks}>
            DELETE ALL TASKS
        </button>
        <div>
            <button onClick={() => changeFilter("all")}>
                All
            </button>
            <button onClick={() => changeFilter("active")}>
                Active
            </button>
            <button onClick={() => changeFilter("completed")}>
                Completed
            </button>
            <button onClick={() => changeFilter("three")}>
                First three
            </button>
        </div>
    </div>
}


