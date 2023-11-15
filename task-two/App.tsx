import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type FilterValuesType = "all" | "active" | "completed"| "three" ;

//Hi guys!
//1. Let's create a 'DELETE ALL TASKS' button, and place it above the filter buttons
//Clicking the button removes all tasks
//2. Let's create a fourth filter button-if you click it, the first three tasks will be displayed
//3. Relocate everything associated with  filters to the Todolist.tsx component. Make it work

function App() {

    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: false },
    ]);


    const deleteAllTasks = () => setTasks([])

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
                // changeFilter={filter} 
                deleteAllTasks={deleteAllTasks}/>
        </div>
    );
}

export default App;
