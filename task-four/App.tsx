import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';


// Hi guys!
//1.Let`s wrap up our bunch  of filters in a function.
//How can we do this? We can wrap all our goodies into a new function:
//     const filteredTasks=()=>{
//          let tasksForTodolist = tasks;
//
//          if (filter === "active") {
//          return   tasksForTodolist = tasks.filter(t => !t.isDone);
//          }
//          if (filter === "completed") {
//            return  tasksForTodolist = tasks.filter(t => t.isDone);
//          }
//          return tasksForTodolist
//     }

//2.Let`s replace our if`s with  switch.

// Привет, ребята!
//1.Давайте объединим нашу кучу фильтров в функцию.
//Как мы можем это сделать? Мы можем объединить все наши полезные функции в новую функцию:
// // const filtered Tasks=()=>{
// // разрешать задачи для списка дел = задачи;
//
// if (filter === "активный") {
// // возвращать задачи для списка дел = задачи.filter(t => !t.is Готово);
// }
// if (filter === "завершено") {
// // возвращает задачи для списка дел = задачи.filter(t => t.is Готово);
// }
// // возвращает задачи для списка дел
// }

//2.Давайте заменим наши if на switch.
export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = { id: v1(), title: title, isDone: false };
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    const filteredTasks = () => {
        let tasksForTodolist = tasks;

        //     if (filter === "active") {
        //         tasksForTodolist = tasks.filter(t => t.isDone === false);
        //     }
        //     if (filter === "completed") {
        //         tasksForTodolist = tasks.filter(t => t.isDone === true);
        //     }
        //     return tasksForTodolist
        // }
        //Task two, solution:
        switch (filter) {
            case "active":
                return tasksForTodolist = tasks.filter(t => t.isDone === false);
            case "completed":
                return tasksForTodolist = tasks.filter(t => t.isDone === true);
            default:
                return tasksForTodolist
        }
    }
    function changeFilter(value: FilterValuesType) {
        setFilter(value);
        filteredTasks()
    }



    return (
        <div className="App">
            <Todolist title="What to learn"
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask} />
        </div>
    );
}

export default App;
