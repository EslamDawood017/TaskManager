import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Badge,
} from "@fluentui/react-components";
import { Search20Regular, CheckmarkCircle24Filled } from "@fluentui/react-icons";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import type { Task } from "./types/Task";

type TaskFilter = "all" | "active" | "completed";

function App() {
  // Load tasks from LocalStorage
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");

    if (!saved) {
      return [];
    }

    try {
      return JSON.parse(saved);
    } catch {
      console.error("Failed to parse saved tasks");
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<TaskFilter>("all");

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  // Derived state calculations for counts & list filtering
  const activeCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.filter((t) => t.completed).length;

  const visibleTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) => {
      if (filter === "active") {
        return !task.completed;
      }
      if (filter === "completed") {
        return task.completed;
      }
      return true;
    });

  return (
    <main className="app-bg-gradient min-h-screen py-8 sm:py-16 px-4 flex justify-center items-start">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
        {/* Container Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          {/* Header */}
          <header className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
                <CheckmarkCircle24Filled />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Task Manager
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Organize and track your daily work
                </p>
              </div>
            </div>

            {/* Quick Status Pill */}
            {tasks.length > 0 && (
              <Badge appearance="tint" color="brand" size="large">
                {activeCount} remaining
              </Badge>
            )}
          </header>

          {/* Add Task Form */}
          <TaskForm onAddTask={addTask} />

          {/* Search Input */}
          <Input
            className="w-full"
            size="large"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            contentBefore={<Search20Regular className="text-slate-400" />}
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Button
              appearance={filter === "all" ? "primary" : "secondary"}
              onClick={() => setFilter("all")}
              size="medium"
            >
              All ({tasks.length})
            </Button>

            <Button
              appearance={filter === "active" ? "primary" : "secondary"}
              onClick={() => setFilter("active")}
              size="medium"
            >
              Active ({activeCount})
            </Button>

            <Button
              appearance={filter === "completed" ? "primary" : "secondary"}
              onClick={() => setFilter("completed")}
              size="medium"
            >
              Completed ({completedCount})
            </Button>
          </div>

          {/* Task List */}
          <TaskList
            tasks={visibleTasks}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
          />
        </div>
      </div>
    </main>
  );
}

export default App;