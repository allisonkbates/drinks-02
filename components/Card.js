import styled from 'styled-components';

const StyledCard = styled.div`
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

	.img-container {
		height: 250px;	
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-top-right-radius: 4px;
		border-top-left-radius: 4px;
	}

	.drink-bar {
		height: 64px;
		background-color: #377084;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom-right-radius: 4px;
		border-bottom-left-radius: 4px;
	}
	
	h2 {
		font-family: 'Advent Pro', sans-serif;
		font-size: 28px;
		font-weight: 400;
		text-align: center;
		margin: 0;
		color: #fff;
	}
`;

export default function Card(props) {
	const drink = props.drink.fields;
	console.log(drink.imgpath);
	return (
		<StyledCard>
			<div className="img-container">
				<img src={`/${drink.imgpath}.png`}></img>
			</div>
			<div className="drink-bar">
				<h2>{drink.cocktailName}</h2>
			</div>
		</StyledCard>
	)
}

//<img src={`/${drinkImageName}.png`} height="194" width="210"></img>
