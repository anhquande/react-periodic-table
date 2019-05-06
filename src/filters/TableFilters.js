import React from "react";
import { Paper } from "@material-ui/core";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { setFilterByClassification, setFilterByRadioactive } from '../reducers/filterReducer';
import { TableContext } from '../TableContext';

export const TableFilters = ({ filter }) => {

  const { dispatch } = React.useContext(TableContext)
  const handleCheckbox = (e) => {
    switch(e.target.value){
      case 'radioactive':
        dispatch(setFilterByRadioactive(e.target.checked))
        break;

      case 'metal':
        dispatch(setFilterByClassification(e.target.checked))
        break;
    }

  }

  console.log("TableFilter render, filter state : ",filter)
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
            checkedIcon={<CheckBoxIcon fontSize="small"/>}
            checked={filter.radioactive}
            onChange={handleCheckbox}
            value={'radioactive'}
          />
        }
        label="Radioactive only"
      />

    </FormGroup>
  );
};
