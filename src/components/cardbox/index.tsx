import { SvgIcon } from "@mui/material"
import { CardBoxProps } from "./model"
import PushPinIcon from '@mui/icons-material/PushPin';
import Card from "../card";


const Cardbox = (props: CardBoxProps) => {
    return (
        <section className="w-80 mr-5 mt-28 h-[635px] bg-[#FAFAFA] bg-no-repeat rounded border-2 border-solid border-[#DCE2EB]">
            <div className="flex justify-between ">
                <span className="mt-6 ml-5 mb-5 mr-48  w-24 h-5 text-left text-xl font-medium tracking-tighter text-[#706F6F]">
                    {props.title}
                </span>
                <SvgIcon htmlColor="#00008B" className="mr-12 mt-6">
                    <PushPinIcon />
                </SvgIcon>
            </div>
            <Card title="Accounting" />
            <Card title="Accounting" />


        </section>
    )
}
export default Cardbox;