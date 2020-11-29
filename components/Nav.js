import Link from 'next/link';
import StyledNav from './styles/NavStyles';
import StyledLogo from './styles/StyledLogo';
import StyledCTA from './styles/StyledCTA';

export default function Nav() {
	return (
		<StyledNav>
			<Link href="/">
				<StyledLogo>
					<img src="/logo-color.svg"></img>
					<h1>It's Happy Hour</h1>
				</StyledLogo>
			</Link>
			<Link href="/add">
				<StyledCTA>Add Drink</StyledCTA>
			</Link>
		</StyledNav>
	)
}