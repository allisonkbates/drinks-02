import styled from 'styled-components';

const StyledNav = styled.div`
	height: 96px; /* previously 80px */
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 5%; /* 58px on 1152px, design is 64px */
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
`;

export default StyledNav;