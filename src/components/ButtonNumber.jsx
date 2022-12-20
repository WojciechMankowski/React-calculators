const ButtonNumber = ({ doAction, setDoAction, value }) => {
	
	const onClick = present_value => {
		const doObj = {present_value: present_value, previousValue: doAction.present_value}
		setDoAction({ ...doAction, doObj})
	}
	return (
		<button
			onClick={() => {
				onClick(value)
			}}>
			{value}
		</button>
	)
}
export default ButtonNumber
