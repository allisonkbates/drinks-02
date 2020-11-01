import Link from 'next/link';
import styled from "styled-components";

const StyledNav = styled.div`
	height: 100px;
	background-color: #EFF3F4;
	font-family: 'Oxygen', sans-serif;
`;

const StyledTitle = styled.h1`
	font-family: 'Advent Pro', sans-serif;
	font-size: 24px;
	font-weight: 400;
	color: #377084;
`;

const StyledLogo = styled.div`
	cursor: pointer;
`


export default function Nav() {
	return (
		<StyledNav>
			<Link href="/test">
				<StyledLogo>
					<img src="favicon.ico" height="40"></img>
					<StyledTitle>Your Fave Drinks	</StyledTitle>
				</StyledLogo>
			</Link>
		</StyledNav>
	)
}
