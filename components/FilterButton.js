export default function FilterButton(props) {
	return (
		<button
			type="button"
			className="filter__chip"
			aria-pressed={props.isPressed}
			onClick={() => props.setFilter(props.name)}
		>
			{props.name}
		</button>
	)
}