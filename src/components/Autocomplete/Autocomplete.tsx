import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags(props: any) {
  const { genres, setUrlFilter } = props;
  const handleChange = (_, value) => {
    setUrlFilter(value);
  };
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={genres}
      disableCloseOnSelect
      getOptionLabel={(option: any) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 5 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: 400 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
      onChange={handleChange}
    />
  );
}
