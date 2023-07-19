import { DatePicker } from "antd";
import moment from "moment/moment";
import React, { useState } from "react";
const { RangePicker } = DatePicker;
const DatePickerAnt = ({ value, setValue }) => {
  const [dates, setDates] = useState(null);

  const disabledDate = (current) => {
    return current && current < moment().startOf("day");
  };

  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <RangePicker
      value={dates || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => {
        setDates(val);
      }}
      onChange={(val) => {
        setValue(val);
      }}
      onOpenChange={onOpenChange}
      changeOnBlur
    />
  );
};
export default DatePickerAnt;
