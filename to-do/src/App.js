import ToDoMain from "./components/ToDoMain";
import { TasksContext } from "./contexts/ToDoListContext";

function App() {
  return (
    <TasksContext>
      <ToDoMain />
    </TasksContext>
    
  );
}

export default App;
