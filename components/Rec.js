//import CardLayout from './CardLayout';
import Slider from "react-slick";

export default function Rec() {
	let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
	};
	
	return (
		<Slider {...settings}>
			
		</Slider>
	)
}


/*
export default function Recommended(props) {
	return (
		<div className="rec__container">
			<h2 className="rec__heading">{props.label}</h2>
			<CardLayout drinks={props.drinks} filter={"daniel-recommends"} count={6}></CardLayout>
		</div>
	)
}*/