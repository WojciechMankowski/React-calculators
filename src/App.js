import actionsContext from './Context'
import './CSS/style.css'
import Screen from './components/Screen'
import History from './components/History'
import ButtonNumber from './components/ButtonNumber'
import ButtonFunction from './components/ButtonFunction'
import { useState } from 'react'

const DoAction = {
	result: 0,
	present_value: 0,
	previousValue: '',
	sign: '',
	listHistory: [],
}

function App() {
	const [doAction, setDoAction] = useState(DoAction)
	return (
		<div className="contarner">
			<actionsContext.Provider value={doAction}>
				<Screen />
				<History />
			</actionsContext.Provider>

			<div className="button">
				<ButtonFunction value={'C'} setDoAction={setDoAction} doAction={doAction} />
				<ButtonFunction value={'delet'} setDoAction={setDoAction} doAction={doAction} />
				<ButtonFunction value={'%'} setDoAction={setDoAction} doAction={doAction} />
				<ButtonFunction value={'/'} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={9} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={8} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={7} setDoAction={setDoAction} doAction={doAction} />
				<ButtonFunction value={'*'} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={6} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={5} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={4} />
				<ButtonFunction value={'-'} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={3} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={2} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={1} setDoAction={setDoAction} doAction={doAction} />
				<ButtonFunction value={'+'} setDoAction={setDoAction} doAction={doAction} />
				<ButtonNumber value={0} setDoAction={setDoAction} doAction={doAction} />
				<ButtonFunction value={'.'} setDoAction={setDoAction} doAction={doAction} />
				<ButtonFunction value={'='} setDoAction={setDoAction} doAction={doAction} />
			</div>
		</div>
	)
}

export default App
