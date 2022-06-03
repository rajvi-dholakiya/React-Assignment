import Cardbox from "../cardbox"

import Slider from "react-slick";
import { useRef } from "react";

const Rectangle = () => {
    const caseStudySliderRef: any = useRef(null);
    const settings = {
        dots: false,
        infinite: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrow: false

    };


    return (
        <section className=" h-[780px] mt-5 bg-white bg-no-repeat border-2 border-solid border-[#DDDFE2] rounded-md opacity-[1]">
            <div className="flex ml-4">
                <Slider {...settings} >
                    <Cardbox title="Indigo" />
                    <Cardbox title="test" />
                    <Cardbox title="Indigo" />
                    <Cardbox title="Indigo" />
                </Slider>
            </div>
        </section>
    )
}
export default Rectangle;