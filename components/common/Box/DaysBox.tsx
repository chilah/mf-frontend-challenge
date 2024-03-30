import React from 'react';
import { Box } from '.';

type Props = {
  days: number;
};

const DaysBox: React.FC<Props> = (props) => {
  const { days } = props;
  return <Box value={days.toFixed(2)} label="Total Days" />;
};

export default DaysBox;
