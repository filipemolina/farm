import React, { Component } from 'react'
import styled from 'styled-components'

const Plus = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 7vw;
  height: 7vw;
  background-image: url(/bg/plus-minus.svg);
  background-size: 15vw;
  background-position: -4vw -3vw;
  cursor: pointer;
  z-index: 10;
  display: none;
`
const Minus = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 4vw;
  height: 4vw;
  background-image: url(/bg/plus-minus.svg);
  background-size: 10vw;
  background-position: -3vw -8vw;
  cursor: pointer;
  z-index: 10;
  display: none;
`
const StldSinais = styled.div`
  width: 10vw;
  height: 100%;
  position: absolute;
  right: -10vw;
  top: 0;

  &:hover ${Plus} {
    display: block;
  }

  &:hover ${Minus} {
    display: block
  }
`
class Sinais extends Component {
	render(){

    const { mudarFelicidade } = this.props

		return(
			<StldSinais>
				<Plus onClick={() => mudarFelicidade(1)} />
				<Minus onClick={() => mudarFelicidade(-1)} />
			</StldSinais>
		)
	}
}

export default Sinais