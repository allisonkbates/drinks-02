import Link from 'next/link';

export default function Nav() {
	return (
		<div className="nav__container">
      <div class="hamburger__container">
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
      </div>
			<Link href="/">
				<div className="logo__container">
					<img src="/logo-color.svg" className="logo__img"></img>
					<h1 className="logo__title">Drinks DB</h1>
				</div>
			</Link>
			<div className="nav__button-group">
        <Link href="/liquor-cabinet">
          <a className="link--primary">Liquor Cabinet</a>
        </Link>
        <Link href="/add">
					<a className="btn--primary">+ Add Drink</a>
				</Link>
        <Link href="/add">
          <a className="btn--primary mobile">+</a>
        </Link>
			</div>
		</div>
	)
}