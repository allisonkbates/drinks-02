import Link from 'next/link';
import styled from "styled-components";

const StyledNav = styled.div`
	height: 80px;
	background-color: #EFF3F4;
	font-family: 'Oxygen', sans-serif;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 5%;
`;

const StyledTitle = styled.h1`
	font-family: 'Advent Pro', sans-serif;
	font-size: 24px;
	font-weight: 400;
	color: #377084;
`;

const StyledLogo = styled.div`
	display: flex;
	cursor: pointer;
`;

const StyledCTA = styled.a`
	height: 40px;
	display: flex;
	align-items: center;
	padding: 0px 25px;
	background-color: #377084;
	border-radius: 20px;
	color: #EFF3F4;
	font-family: 'Advent Pro', sans-serif;
	font-size: 16px;
	text-decoration: none;
	cursor: pointer;
	
	&:hover {
		background-color: #2c5969;
	}
`;

export default function Nav() {
	return (
		<StyledNav>
			<Link href="/">
				<StyledLogo>
					<img src="/logo-color.svg" height="50"></img>
					<StyledTitle>It's Happy Hour</StyledTitle>
				</StyledLogo>
			</Link>
			<Link href="/add">
				<StyledCTA>Add Cocktail</StyledCTA>
			</Link>
		</StyledNav>
	)
}