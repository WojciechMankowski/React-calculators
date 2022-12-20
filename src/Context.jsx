import { createContext } from 'react'

const actionsContext = createContext({
	result: 0,
	present_value: 0,
	previousValue: 0,
	sign: '',
	listHistory: [],
})

export default actionsContext
