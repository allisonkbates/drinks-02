import styled from "styled-components";

const StyledHero = styled.div`
	background: url('/hero-image-desktop.jpg');
	background-position: center center;
	background-size: cover;
	height: 490px;
	display: flex;
	flex-direction: column;
`;

const StyledBadge = styled.div`
	background-color: #377084;
	height: 110px;
	width: 110px;
	border-radius: 50%;
	margin: 110px 25px -55px 25px;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		font-family: 'Advent Pro', sans-serif;
		font-size: 18px;
		font-weight: 400;
		color: #EFF3F4;
		text-align: center;
		padding: 22px;
	}
`;

const StyledHeroCard = styled.div `
	background-color: #EFF3F4;
	height: 220px;
	width: 300px;
	margin: 0px 5%;
	color: #222222;

  h2 {
		font-family: 'Advent Pro', sans-serif;
		font-size: 32px;
		font-weight: 400;
		text-align: center;
		margin-top: 32px 0px 24px 0px;
	}

  p {
	font-family: 'Oxygen', sans-serif;
	font-size: 16px;
	padding: 0px 32px;
	text-align: center;
	}	
`;

export default function Hero() {
	return (
		<StyledHero>
			<StyledBadge>
				<p>DRINK OF THE DAY</p>
			</StyledBadge>
			<StyledHeroCard>
				<h2>Boulevardier</h2>
				<p>Learn how to make this classic whiskey twist on the Negroni. A simple drink with whiskey, sweet vermouth & campari.</p>
			</StyledHeroCard>
		</StyledHero>
	)
}