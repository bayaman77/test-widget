import { Select as SelectAnt } from "antd";
import React from "react";

const Select = ({ placeholder, value, onChange }) => {
  const onChangeHandler = (value) => {
    onChange(value);
  };

  return (
    <SelectAnt
      value={value}
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChangeHandler}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={[
        {
          key: 1,
          value: "Guarulhos, São Paulo, Brazil",
          label: "Guarulhos, São Paulo, Brazil",
        },
        {
          key: 2,
          value: "Ribeirão Preto, São Paulo, Brazil",
          label: "Ribeirão Preto, São Paulo, Brazil",
        },
        {
          key: 3,
          value: "São José do Rio Preto, São Paulo, Brazil",
          label: "São José do Rio Preto, São Paulo, Brazil",
        },
        {
          key: 4,
          value: "Guarulhos, São Paulo, Brazil",
          label: "Guarulhos, São Paulo, Brazil",
        },
        {
          key: 5,
          value: "Ribeirão Preto, São Paulo, Brazil",
          label: "Ribeirão Preto, São Paulo, Brazil",
        },
        {
          key: 6,
          value: "São José do Rio Preto, São Paulo, Brazil",
          label: "São José do Rio Preto, São Paulo, Brazil",
        },
      ]}
    />
  );
};
export default Select;
