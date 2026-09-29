import { useState } from "react";
import { Button, Input } from "@fluentui/react-components";
import { AddRegular } from "@fluentui/react-icons";

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
      className="flex gap-3 w-full"
    >
      <Input
        className="flex-1"
        size="large"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button
        appearance="primary"
        size="large"
        type="submit"
        icon={<AddRegular />}
      >
        Add Task
      </Button>
    </form>
  );
}

export default TaskForm;