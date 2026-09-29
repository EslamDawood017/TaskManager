import {
  Button,
  Card,
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
    <Card className="flex flex-row items-center justify-between gap-4 p-4 shadow-sm hover:shadow transition-shadow border border-slate-200 rounded-lg">
      <Checkbox
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        label={
          <span
            className={
              task.completed
                ? "line-through text-slate-400 select-none transition-colors"
                : "text-slate-800 font-medium select-none transition-colors"
            }
          >
            {task.title}
          </span>
        }
      />

      <Button
        appearance="subtle"
        icon={<DeleteRegular />}
        onClick={() => onDelete(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </Button>
    </Card>
  );
}

export default TaskCard;