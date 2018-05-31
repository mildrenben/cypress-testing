import React from 'react'
import TodoItem from './TodoItem'
import state from '../../store'
import { view } from 'react-easy-state'

const HomeScreen = () => (
	<main>
		<div data-cy='TodoItemList'>
			{
				state.items.map((item, idx) => (
					<TodoItem key={idx} item={item} />
				))
			}
		</div>
		<div>
			<form 
				onSubmit={(e) => {
					e.preventDefault()
					const elem = document.querySelector(`input[type='text']`)
					const message = elem.value
					state.addItem({ message })
					elem.value = null
				}}
				data-cy='Form'
			>
				<input type='text' placeholder='Add new item...' autoFocus data-cy='Form_Input' />
				<input type='submit' value='Add' data-cy='Form_Submit' />
			</form>
		</div>
	</main>
)

export default view(HomeScreen)
