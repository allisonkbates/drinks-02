import styled from 'styled-components';
import Card from '../components/Card';

const StyledCardLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
 	grid-auto-rows: auto;
 	grid-gap: 8% 5%;
	padding: 5%;
`;

function getFilteredDrinks(drinks, tag, count) {
	return drinks
		.filter(drink => drink.fields.tags && drink.fields.tags.includes(tag))
		.map(drink => <Card key={drink.id} drink={drink}></Card>)
		.slice(0, count)
}

function CardLayout(props) {
	const Drinks = getFilteredDrinks(props.drinks, props.filter, props.count);
	
	return (
		<StyledCardLayout>
			{Drinks}
		</StyledCardLayout>
	)
}

export default CardLayout;