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
	position: relative;

	& > img {
		max-width: 100%;
		cursor: pointer;
	}
`
const StyledPreco = styled.div`
	width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  background-image: url(/bg/coin.png);
  background-size: 3.8vw 3.8vw;
  background-position: -0.4vw -0.4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 3px 5px black;
`
class Item extends Component {
	render(){

		const { item, click } = this.props

		return(
			<StyledItem>
				<img onClick={click} src={`/${item.pasta}/${item.nome}.png`} alt="" />
				<StyledPreco>{item.preco}</StyledPreco>
			</StyledItem>
		)
	}
}

export default Item