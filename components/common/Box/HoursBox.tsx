import React from 'react';
import { Box } from '.';

type Props = {
  hours: number;
};

const HoursBox: React.FC<Props> = (props) => {
  const { hours } = props;
  return <Box value={hours} label="Total Hours" />;
};

export default HoursBox;
