import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import state from '../../store'
import Button from '../Button'
import v from '../../styles/vars/colors'

const Styles = styled.div`
  border-bottom: solid 1px ${v.blue}
`

const TodoItem = ({ item: { message, date, id } }) => (
	<Styles>
		<p>{message}</p>
		<p>When: {date.toString()}</p>
		<Button onClick={() => state.removeItem(id)}>Complete</Button>
	</Styles>
)
  
TodoItem.propTypes = {
	item: PropTypes.object.isRequired
}
  
export default TodoItem