function FormLayout(props) {
	return (
		<div className="add__page">
			<div className="add__container">
				<h1 className="add__heading">{props.heading}</h1>
				<p className="add__text">{props.description}</p>
				{props.children}
			</div>
		</div>
	)
}

export default FormLayout;