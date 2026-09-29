import type { Task } from "../types/Task";
import TaskCard from "./TaskCard";

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
      <div className="text-center py-10 px-4 border-2 border-dashed border-slate-200 rounded-xl bg-white/60">
        <p className="text-slate-500 font-medium">No tasks yet</p>
        <p className="text-xs text-slate-400 mt-1">Add a task above to get started!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
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