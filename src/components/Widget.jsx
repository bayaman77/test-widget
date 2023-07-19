import React, { useState } from "react";
import "./widget.css";
import { Button, Checkbox, DatePicker } from "antd";
import Select from "./Select";
import DatePickerAnt from "./DatePicker";
import moment from "moment";

const Widget = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [swithcDate, setSwitchDate] = useState(false);
  const [twoDates, setTwoDates] = useState(null);
  const [oneDate, setOneDate] = useState(null);

  const [warning, setWarning] = useState(false);

  const handleSwitchdate = () => {
    setSwitchDate(!swithcDate);
    setOneDate(null);
    setTwoDates(null);
  };

  const disabledDate = (current) => {
    return current && current < moment().startOf("day");
  };

  function isDataComplete(data) {
    const { from, to, twoDates } = data;

    // Проверяем, все ли поля заполнены
    if (!from || !to || !twoDates || twoDates.length !== 2) {
      setWarning(true);
      return false;
    } else {
      setWarning(false);
      return true;
    }
  }
  function isDataComplete2(data) {
    const { from, to, oneDate } = data;

    // Проверяем, все ли поля заполнены
    if (!from || !to || !oneDate) {
      setWarning(true);
      return false;
    } else {
      setWarning(false);
      return true;
    }
  }

  const submitHandler = () => {
    if (twoDates) {
      const arr = {
        from,
        to,
        twoDates,
      };
      if (isDataComplete(arr)) {
        console.log(arr);
      }
    } else {
      const arr = {
        from,
        to,
        oneDate,
      };
      if (isDataComplete2(arr)) {
        console.log(arr);
      }
    }
  };

  return (
    <div className="widget">
      <div className="container">
        <div className="selectBlock">
          <p>Откуда</p>
          <Select placeholder="Откуда" value={from} onChange={setFrom} />
        </div>
        <div className="selectBlock">
          <p>Куда</p>
          <Select placeholder="Куда" value={to} onChange={setTo} />
        </div>
        <div className="selectBlock">
          <div className="date-block">
            <p>Даты</p>
            <div>
              <Checkbox className="checkbox" onChange={handleSwitchdate} />
              <span>Без конечной даты</span>
            </div>
          </div>
          {swithcDate ? (
            <DatePicker
              disabledDate={disabledDate}
              value={oneDate}
              onChange={setOneDate}
            />
          ) : (
            <DatePickerAnt value={twoDates} setValue={setTwoDates} />
          )}
        </div>
        <div className="wrapper">
          <Button className="btn" onClick={submitHandler}>
            Найти
          </Button>
        </div>
      </div>
      {warning && <span className="warning">Заполните все поля!</span>}
    </div>
  );
};

export default Widget;
