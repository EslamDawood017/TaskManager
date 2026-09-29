import { useState } from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./types/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  const toggleComplete = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <FluentProvider theme={webLightTheme} className="min-h-screen bg-slate-50 text-slate-900 py-10 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">Task Manager</h1>
          <p className="text-sm text-slate-500">Organize and manage your daily tasks efficiently</p>
        </header>

        <main className="space-y-6">
          <section className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <TaskForm onAddTask={addTask} />
          </section>

          <section>
            <TaskList
              tasks={tasks}
              onDelete={deleteTask}
              onToggleComplete={toggleComplete}
            />
          </section>
        </main>
      </div>
    </FluentProvider>
  );
}

export default App;
