import { Stack, SvgIcon } from "@mui/material";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Title = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());

    return (

        <>
            <div className="flex">
                <span className="text-2xl mr-8"> Status Monitor</span>
                <div>
                    <SvgIcon htmlColor="#706F6F" className="mr-2">
                        <path d="M20,3H19V1H17V3H7V1H5V3H4A2.006,2.006,0,0,0,2,5V21a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,20,3Zm0,18H4V8H20Z" />
                    </SvgIcon>

                </div>
            </div>
            <span className="mt-2 text-[#A9ABAC] text-base"> Brief intro to the page functionality will be listed here.</span>
        </>
    )
}

export default Title;