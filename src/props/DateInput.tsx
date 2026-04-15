import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface props {
  label: string
  onChange: (date: string) => void  
}

export default function DateInput({ label, onChange }: props) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    if (newValue && newValue.isValid()) {
      onChange(newValue.format('MMMM DD'))
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={value}
          onChange={handleChange}
        />
    </LocalizationProvider>
  );
}