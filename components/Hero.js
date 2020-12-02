import {StyledHero, StyledBadge, StyledHeroCard} from './styles/HeroStyles';

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