import React, { Component } from 'react'
import styled from 'styled-components'

const StldPopup = styled.div`
	position: absolute;
	width: 60vw;
	height: 60vh;
	background-color: rgba(255,255,255,0.5);
	border-radius: 5px;
	box-shadow: 5px 5px 20px;
	z-index: 10;
	top: 5vh;
	overflow: hidden;
`

const Cabecalho = styled.div`
	width: 100%;
	height: 10vh;
`
const Conteudo = styled.div`
	width: 100%;
	height: 50vh;
`
class Popup extends Component {
	render(){
		return(
			<StldPopup>
				<Cabecalho />
				<Conteudo />
			</StldPopup>
		)
	}
}

export default Popup