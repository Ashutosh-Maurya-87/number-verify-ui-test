import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectCompnent = () => {
    const [countryLanguage, setCountryLanguage] = useState('');

    const handleChange = (event) => {
        setCountryLanguage(event.target.value);
    };

    return (
        <FormControl sx={{minWidth: 60,p:0 }} size="small">
            <InputLabel id="demo-select-small-label">EN</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={countryLanguage}
                label="Age"
                onChange={handleChange}
            >
                {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
                <MenuItem value={10}>EN</MenuItem>
                {/* <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
        </FormControl>
    );
}

export default SelectCompnent;