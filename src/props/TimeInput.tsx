import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

interface props {
  label: string
  onChange: (time: string) => void  
}

export default function TimeInput({ label, onChange }: props) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
      if (newValue && newValue.isValid()) {
        onChange(newValue.format('hh:mm A'))
      }
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label={label}
          value={value}
          onChange={handleChange}
          views={['hours', 'minutes']}
        />
    </LocalizationProvider>
  );
}