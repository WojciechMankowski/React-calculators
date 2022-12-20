import { Add } from '../Helpers/MathActivities'
const ButtonFunction = ({ doAction, setDoAction, value }) => {
	const handleClick = sing => {
		console.log(value)
		setDoAction({ ...doAction, sing })
	}
	return (
		<button type="button" value={value} onCli onClick={() => handleClick(value)}>
			{value}
		</button>
	)
}
export default ButtonFunction
