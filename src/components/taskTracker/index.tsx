import { TextField } from "@mui/material"
import { Box, Container } from "@mui/system"
import { taskTrackerprops } from "./model"

const Tasktracker = (props: taskTrackerprops) => {
    return (

        <Box sx={{ minWidth: 83 }} className='mt-3 my-2'>
            <span className="h-4 w-16 ml-4 mt-14 text-left text-xs tracking-normal text-black">{props.title}</span>
            <div style={{ backgroundColor: props.color }} className="mt-2 ml-4 mb-4 mr-6 w-16 h-7 bg-[#EBEBEB] bg-no-repeat rounded">
                <div className="w-6 h-7 bg-[#EF5245] flex bg-no-repeat rounded-l">
                    <span className="mt-1 ml-2 text-white text-center text-sm font-bold opacity-1 h-3 w-2">{props.firstHalf}</span>
                    <span className="mt-1 ml-5 text-black text-center text-sm font-bold opacity-1 h-3 w-2">{props.secondHalf}</span>
                </div>
            </div>
        </Box>
    )
}
export default Tasktracker;