import { useState } from "react";
import {
  Button,
  Input,
} from "@fluentui/react-components";
import { AddRegular, AddCircle20Regular } from "@fluentui/react-icons";

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAddTask(title.trim());
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-2.5 sm:flex-row"
    >
      <div className="flex-1">
        <Input
          className="w-full"
          size="large"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          contentBefore={<AddCircle20Regular className="text-indigo-500" />}
        />
      </div>

      <Button
        appearance="primary"
        size="large"
        type="submit"
        icon={<AddRegular />}
        disabled={!title.trim()}
        className="font-medium shadow-sm transition-all"
      >
        Add Task
      </Button>
    </form>
  );
}

export default TaskForm;