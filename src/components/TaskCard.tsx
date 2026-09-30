import {
  Button,
  Checkbox,
} from "@fluentui/react-components";
import { DeleteRegular } from "@fluentui/react-icons";
import type { Task } from "../types/Task";

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

function TaskCard({
  task,
  onDelete,
  onToggleComplete,
}: TaskCardProps) {
  return (
    <div
      className={`task-card-item group flex items-center justify-between gap-3 rounded-xl border p-3.5 transition-all duration-200 ${
        task.completed
          ? "border-slate-200 bg-slate-50/70"
          : "border-slate-200/80 bg-white hover:border-indigo-200 hover:shadow-sm"
      }`}
    >
      <div className="flex flex-1 items-center min-w-0">
        <Checkbox
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          label={
            <span
              className={`text-sm font-medium transition-colors select-none break-words ${
                task.completed
                  ? "text-slate-400 line-through"
                  : "text-slate-800 group-hover:text-slate-900"
              }`}
            >
              {task.title}
            </span>
          }
        />
      </div>

      <Button
        appearance="subtle"
        icon={<DeleteRegular className="text-slate-400 group-hover/btn:text-rose-600 transition-colors" />}
        onClick={() => onDelete(task.id)}
        className="group/btn opacity-80 hover:opacity-100 hover:bg-rose-50 hover:text-rose-600 transition-colors rounded-lg"
        size="small"
      >
        <span className="hidden sm:inline text-xs font-medium">Delete</span>
      </Button>
    </div>
  );
}

export default TaskCard;