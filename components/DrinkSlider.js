import Link from 'next/link';
import Slider from "react-slick";
import { getFilteredDrinks } from '../helpers/drinkFormat';

function HideArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default function DrinkSlider(props) {	
	const drinks = getFilteredDrinks(props.drinks, props.allTags, props.count); /* Re-evaluate if this is the BEST way to do this */

	/* Slider Settings */
	let settings = {
    dots: true,
    infinite: true,
		speed: 500,
		nextArrow: <HideArrow />,
		prevArrow: <HideArrow />,
    slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1.75,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}
		]
	};

	return (
		<div className="rec__container">
			<div className="inline">
				<h2 className={`rec__heading ${props.size}`}>{props.label}</h2>
			{/*<Link href="/drinks">
					<a className="drink__body--link inline-link">View All</a>
				</Link> */}
			</div>
			<Slider {...settings} className="rec__slider">
				{drinks}
			</Slider>
		</div>
	)
}