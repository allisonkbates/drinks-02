import Link from 'next/link';



export default function Nav() {
	return (
		<div className="nav">
			<Link href="/">
				<div className="logo">
					<img className="logo" src="/logo-color.svg"></img>
					<h1 className="logoTitle">Drinks DB</h1>
				</div>
			</Link>
			<Link href="/add">
				<a className="styles">Add a Drink</a>
			</Link>
		</div>
	)
}