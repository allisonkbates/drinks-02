export default function Hero() {
	return (
		<div className="hero__container">
			<img src="/hero-image-desktop.jpg" className="hero-img--mobile"></img>
			<div className="badge">
				<p className="badge__text">DRINK OF THE DAY</p>
			</div>
		  <div className="hero-card">
				<h2 className="hero-card__heading">Boulevardier</h2>
				<p className="hero-card__text">Learn how to make this classic whiskey twist on the Negroni. A simple drink with whiskey, sweet vermouth & campari.</p>
			</div>
		</div>
	)
}