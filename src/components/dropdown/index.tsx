

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DropdownProps } from './model';

export default function Dropdown(props: DropdownProps) {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    let listitem = props.item;

    return (
        <Box sx={{ minWidth: 120 }} className='mt-3 mr-10  '>
            <FormControl className='w-56 h-12 '>
                <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    {
                        listitem.map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
