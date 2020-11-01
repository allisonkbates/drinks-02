import styled from 'styled-components';
import {getFilteredDrinks} from '../helpers/drinkFormat';

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
 	grid-auto-rows: auto;
 	grid-gap: 8% 5%;
	padding: 5%;
`;

function RecDrinks(props) {
	const drinks = props.drinks;
	const recDrinks = getFilteredDrinks(drinks, 'daniel-recommends', 6)
	
	return (
		<StyledContainer>
			{recDrinks}
		</StyledContainer>
	)
}

export default RecDrinks;