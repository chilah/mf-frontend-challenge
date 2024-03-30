import React from 'react';
import { Button, DataType, Input } from '..';

type TaskFormType = {
  title: string;
  time: string;
};

const defalutTaskForm: TaskFormType = {
  title: '',
  time: '',
};

type Props = {
  onAddTask: (data: DataType) => void;
};

const TaskForm: React.FC<Props> = (props) => {
  const { onAddTask } = props;
  const [taskForm, setTaskForm] = React.useState<TaskFormType>(defalutTaskForm);

  const isTaskFormValid = React.useMemo(() => {
    return Boolean(taskForm.time && taskForm.title);
  }, [taskForm]);

  const onChangeTaskForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    const parseTime = parseInt(taskForm.time);

    onAddTask({
      time: parseTime,
      title: taskForm.time,
      id: Date.now(),
    });

    setTaskForm(defalutTaskForm);
  };

  return (
    <React.Fragment>
      <Input
        label="Task title"
        type="text"
        name="title"
        value={taskForm.title}
        onChange={onChangeTaskForm}
      />
      <Input
        label="Time Required(in Hrs)"
        type="text"
        name="time"
        value={taskForm.time}
        onChange={onChangeTaskForm}
      />

      <Button disabled={!isTaskFormValid} label="Add" onClick={onSubmit} />
    </React.Fragment>
  );
};

export default TaskForm;
