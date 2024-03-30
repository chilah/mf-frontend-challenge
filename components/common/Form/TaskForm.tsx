import React from 'react';
import { Button, DataType, Input, Modal } from '..';

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
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);

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
    const hasValidLenth = taskForm.title.length < 128;
    const hasValidRange = parseTime > 0 && parseTime <= 24;

    if (Number.isNaN(parseTime) || !hasValidLenth || !hasValidRange) {
      setIsOpenModal(true);
    } else {
      onAddTask({
        time: parseTime,
        title: taskForm.title,
        id: Date.now(),
      });

      setTaskForm(defalutTaskForm);
    }
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

      <Modal
        open={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
        }}
      ></Modal>
    </React.Fragment>
  );
};

export default TaskForm;
