import type { Task } from "../types/Task";
import TaskCard from "./TaskCard";
import { CheckmarkCircle24Regular } from "@fluentui/react-icons";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

function TaskList({
  tasks,
  onDelete,
  onToggleComplete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-500 mb-3">
          <CheckmarkCircle24Regular />
        </div>
        <p className="text-sm font-medium text-slate-700">No tasks found</p>
        <p className="text-xs text-slate-400 mt-1">Add a new task above or clear your search filter.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;