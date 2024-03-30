import React from 'react';
import { Button, DataType, Input, Modal } from '..';
import { checkHasNumberType } from '@/utils';

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

  const hasTitleValidLength = React.useMemo(() => {
    return taskForm.title.length <= 128;
  }, [taskForm.title]);

  const hasNumberValidRange = React.useMemo(() => {
    if (!checkHasNumberType(taskForm.time)) {
      return false;
    }

    const parseTime = parseInt(taskForm.time);

    return parseTime > 0 && parseTime <= 24;
  }, [taskForm.time]);

  const hasNumberValidType = React.useMemo(() => {
    return checkHasNumberType(taskForm.time);
  }, [taskForm.time]);

  const onSubmit = () => {
    const parseTime = parseInt(taskForm.time);

    if (!hasNumberValidType || !hasTitleValidLength || !hasNumberValidRange) {
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
      >
        <>
          {!hasTitleValidLength ? (
            <div>Title length should less than 128 characters.</div>
          ) : null}

          {!hasNumberValidType ? (
            <div>Time should be numertic values.</div>
          ) : null}

          {!hasNumberValidRange ? <div>Time range shoule be 0-24</div> : null}
        </>
      </Modal>
    </React.Fragment>
  );
};

export default TaskForm;
