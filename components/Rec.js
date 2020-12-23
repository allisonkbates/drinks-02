import CardLayout from './CardLayout';

export default function Recommended(props) {
	return (
		<div className="rec__container">
			<h2 className="rec__heading">{props.label}</h2>
			<CardLayout drinks={props.drinks} filter={"daniel-recommends"} count={6}></CardLayout>
		</div>
	)
}