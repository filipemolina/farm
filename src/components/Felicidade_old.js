import React, { Component } from 'react'
import styled from 'styled-components'

import Cubo from './Cubo'

const StldFelicidade = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 19%;
	padding-top: 4%;
`
const Nivel = styled.div`
	width: 44%;
  height: 92%;
  opacity: 0.5;
  margin-left: 9%;
  margin-bottom: 5%;
`
class Felicidade extends Component {
	render(){
		return(
			<StldFelicidade>
				<Nivel>
					<Cubo bgColor="#f1f1f1" />
				</Nivel>
			</StldFelicidade>
		)
	}
}

export default Felicidade