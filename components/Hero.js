import Image from 'next/image';
import {StyledHero, StyledBadge, StyledHeroCard} from './styles/HeroStyles';

export default function Hero() {
	return (
		<StyledHero>
			<Image
				src="/hero-image-desktop.jpg"
				alt="hero"
				layout="fill"
				object-fit="cover"
				object-position="center center"
				height={400}
				width={600}
			/>
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