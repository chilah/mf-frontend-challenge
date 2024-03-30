import React from 'react';
import { Box } from '.';
import { addZeroPad } from '@/utils';

type Props = {
  hours: number;
};

const HoursBox: React.FC<Props> = (props) => {
  const { hours } = props;

  const hoursString = React.useMemo(() => {
    return addZeroPad(hours);
  }, [hours]);

  return <Box value={hoursString} label="Total Hours" />;
};

export default HoursBox;
