import styled from 'styled-components';

const StyledHero = styled.div`
	background: url('/hero-image-desktop.jpg');
	background-position: center center;
	background-size: cover;
	height: 250px;
	width: 100%;
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: 768px) {
		height: 490px;
	}
`;

const StyledBadge = styled.div`
	background-color: #377084;
	height: 110px;
	width: 110px;
	border-radius: 50%;
	margin: 16px;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (min-width: 768px) {
		margin: 110px 25px -55px 25px;
	}

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
	background-color: #FFFFFF;
	margin: 110px 0px 0px;
	color: #222222;
	@media only screen and (min-width: 768px) {
		height: 220px;
		width: 300px;
		margin: 0px 5%;
	}

  h2 {
		font-family: 'Advent Pro', sans-serif;
		font-size: 32px;
		font-weight: 400;
		color: #377084;
		margin: 16px 16px 8px 16px;
		@media only screen and (min-width: 768px) {
			text-align: center;
			color: #222222;
			margin: 32px 0px 24px 0px;
		}
	}

  p {
		font-family: 'Oxygen', sans-serif;
		font-size: 16px;
		margin: 0px 16px 16px;
		@media only screen and (min-width: 768px) {
			text-align: center;
			padding: 0px 32px;
		}
	}	
`;

export {StyledHero, StyledBadge, StyledHeroCard};