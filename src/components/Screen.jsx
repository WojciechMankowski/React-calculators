import { useContext } from 'react'
import actionsContext from '../Context'
const Screen = () => {
	const doAction = useContext(actionsContext)
	const result = `${doAction.previousValue} ${doAction.sign} ${doAction.present_value}`
	console.log(result)
	return (
		<div>
			<span>{result}</span>
		</div>
	)
}

export default Screen
