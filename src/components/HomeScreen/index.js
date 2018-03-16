import React from 'react'
import TodoItem from './TodoItem'
import state from '../../store'
import { view } from 'react-easy-state'

const HomeScreen = () => (
	<main>
		{
			state.items.map((item, idx) => (
				<TodoItem key={idx} item={item} />
			))
		}
		<div>
			<form onSubmit={(e) => {
				e.preventDefault()
				const elem = document.querySelector(`input[type='text']`)
				const message = elem.value
				state.addItem({ message })
				elem.value = null
			}}>
				<input type='text' placeholder='Add new item...' />
				<input type='submit' value='Add' />
			</form>
		</div>
	</main>
)

export default view(HomeScreen)
