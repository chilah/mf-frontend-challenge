import React from 'react';
import { Box } from '.';
import { addZeroPad } from '@/utils';

type Props = {
  tasks: number;
};

const TaskBox: React.FC<Props> = (props) => {
  const { tasks } = props;

  const tasksString = React.useMemo(() => {
    return addZeroPad(tasks);
  }, [tasks]);

  return <Box value={tasksString} label="Total Tasks" />;
};

export default TaskBox;
