import { store } from 'react-easy-state'

const state = store({
	// Data
	items: [],
	idCounter: 0,

	// Actions
	addItem ({ message }) {
		state.items.push({
			message,
			date: new Date(),
			id: state.idCounter
		})
		state.idCounter++
	},
	removeItem(id) {
		const removeIndex = state.items.findIndex(item => item.id === id)
		state.items = [...state.items.slice(0, removeIndex), ...state.items.slice(removeIndex + 1)]
	}
})

export default state