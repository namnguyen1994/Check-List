import React from "react"
import TasksItem from "./TasksItem"
import tasksData from "./tasksData"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            tasks: tasksData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTasks = prevState.tasks.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
                   return task
            })
            return{
                tasks: updatedTasks
            }
        })
    }
    render() {
        const tasksItem = this.state.tasks.map(item => <TasksItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="Game-List">
                {tasksItem}
            </div>
        )
    }
}

export default App