import React from 'react';
import { Box } from '.';

type Props = {
  tasks: number;
};

const TaskBox: React.FC<Props> = (props) => {
  const { tasks } = props;
  return <Box value={tasks} label="Total Tasks" />;
};

export default TaskBox;
