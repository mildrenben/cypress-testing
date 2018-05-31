import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import state from '../../store'
import Button from '../Button'
import v from '../../styles/vars/colors'

const Root = styled.div`
  border-bottom: solid 1px ${v.blue}
`

const TodoItem = ({ item: { message, date, id } }) => (
	<Root data-cy='TodoItem'>
		<p data-cy='TodoItem_Message'>{message}</p>
		<p data-cy='TodoItem_Timestamp'>When: {date.toString()}</p>
		<Button onClick={() => state.removeItem(id)} data-cy='TodoItem_Complete'>Complete</Button>
	</Root>
)
  
TodoItem.propTypes = {
	item: PropTypes.object.isRequired
}
  
export default TodoItem