import React, { Component } from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
	width: 9vw;
	height: 9vw;
	background-color: white;
	border-radius: 1vw;
	margin: 0 1vw 1vw;
	box-shadow: 3px 3px 20px;
	padding: 1vw;

	& > img {
		max-width: 100%;
		cursor: pointer;
	}
`
class Item extends Component {
	render(){

		const { pasta, nome, click } = this.props

		return(
			<StyledItem>
				<img onClick={click} src={`/${pasta}/${nome}.png`} alt="" />
			</StyledItem>
		)
	}
}

export default Item