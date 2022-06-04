import { CardProps, SvgIcon } from "@mui/material";
import { Box } from "@mui/system"
import Tasktracker from "../taskTracker";
// import Accordion from "@material-ui";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import AccordionSummary from "@material-ui/core/AccordionSummary";


const Card = (props: CardProps) => {
    return (
        <section className="mt-3 ml-4 mb-2 w-72 h-28 bg-white bg-no-repeat border-[1px] border-solid border-color-[#C7CED5] rounded-md opacity-[1] shadow-[0px 2px 2px #0000001A]" >
            {/* <Accordion> */}
            <div className="flex justify-between     ml-4 mr-36">
                <span className="mt-1  mr-36  w-24 h-5 text-left text-lg font-medium tracking-tighter text-[#54575A]">
                    {props.title}
                </span>
                <SvgIcon htmlColor="#a9abac" className="mr-12 mt-1">
                    <path d="M14.074,17.689,6,9.844,7.9,8l6.177,5.989L20.251,8l1.9,1.844Z" />
                </SvgIcon>
            </div>

            <div className=" flex w-72 justify-center">
                <Tasktracker title={"Not Started"} firstHalf={2} secondHalf={8} />
                <Tasktracker title={"In Progress"} firstHalf={5} secondHalf={10} />
                <Tasktracker title={"Completed"} color={"#92D150"} firstHalf={2} secondHalf={8} />
            </div>
            {/* </Accordion> */}

        </section>
    )
}

export default Card;