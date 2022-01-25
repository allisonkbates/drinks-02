import Link from 'next/link';
import { useMenu } from '../helpers/menuState';
import Search from './Search';
import styled from 'styled-components';

function Hamburger() {
  const { toggleMenu } = useMenu();
  return (
    <button type="button" className="hamburger__container"> {/*need to re-add onClick*/}
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </button>
  )
}
/*

const MenuExpandedStyles = styled.div`
  display: flex;
  background-color: red;
  color: black;
  transform: translateX(-150%);
  ${(props) => props.open && `transform: translateX(0);`}
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

function MenuExpanded() {
  const { menuOpen } = useMenu()
  return (
    <MenuExpandedStyles open={menuOpen}>
      <h1>I'm an expanded menu for mobile!</h1>
    </MenuExpandedStyles>
  )
}*/

export default function Nav() {
	return (
		<div className="nav__container">
      <Hamburger />
			<Link href="/">
				<div className="logo__container">
					<img src="/logo-color.svg" className="logo__img"></img>
					<h1 className="logo__title">Drinks DB</h1>
				</div>
			</Link>
      {/* <Search></Search> */}
			<div className="nav__button-group">
        
        <Link href="/liquor-cabinet">
          <a className="link--primary">Liquor Cabinet</a>
        </Link>
        {/* removing add drink button for now */}
        {/* <Link href="/add">
					<a className="btn--primary">+ Add Drink</a>
				</Link>
        <Link href="/add">
          <a className="btn--primary mobile">+</a>
        </Link> */}
			</div>
		</div>
	)
}