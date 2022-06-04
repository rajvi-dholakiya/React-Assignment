

import Slider from "react-slick";
import Cardbox from "../cardbox";


const Rectangle = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3

    };


    return (
        <section className=" h-[780px] mt-5 bg-white bg-no-repeat border-2 border-solid border-[#DDDFE2] rounded-md opacity-[1]">
            <div className="ml-3">

                <Slider {...settings}>
                    <Cardbox title="Indigo" />
                    <Cardbox title="test" />
                    <Cardbox title="Indigo" />
                    <Cardbox title="Indigo" />
                    <Cardbox title="Indigo" />
                    <Cardbox title="Indigo" /><Cardbox title="Indigo" />
                    <Cardbox title="Indigo" />

                </Slider>
            </div>
        </section>
    )
}
export default Rectangle;
