import React from 'react';
import { Box } from '.';
import { addZeroPad } from '@/utils';

type Props = {
  days: number;
};

const DaysBox: React.FC<Props> = (props) => {
  const { days } = props;

  const dayString = React.useMemo(() => {
    return addZeroPad(days, 2);
  }, [days]);

  return <Box value={dayString} label="Total Days" />;
};

export default DaysBox;
