import Link from 'next/link';

export default function Nav() {
	return (
		<div className="nav__container">
			<Link href="/">
				<div className="logo__container">
					<img className="logo__img" src="/logo-color.svg"></img>
					<h1 className="logo__title">Drinks DB</h1>
				</div>
			</Link>
			<Link href="/add">
				<a className="btn--primary">Add a Drink</a>
			</Link>
		</div>
	)
}