import React from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import { Logo } from '../components/logo'

const neon = keyframes`
	from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
  }

`
const Wrapper = styled.div`
  display: flex;
  height: 100vh
  align-items: center;
  justify-content: center;
	transition: background-color 0.2s ease;
	background-color: white;
	&.hover {
		background-color: black;
	}
`
const Title = styled.h1`
  font-size: 142px;
  color: black;
  font-weight: 900;
  letter-spacing: -6px;
  cursor: crosshair;
  transition: all 0.2s ease;
  &:hover svg g {
    fill: white;
    animation: ${neon} 1.5s ease-in-out infinite alternate;
  }
`

class IndexPage extends React.PureComponent {
  state = {
    hover: false,
  }

  hover = () => this.setState({ hover: true })
  unHover = () => this.setState({ hover: false })
  render() {
    const { hover } = this.state
    return (
      <Layout>
        <Wrapper className={hover ? 'hover' : ''}>
          <Title onMouseOver={this.hover} onMouseOut={this.unHover}>
            <Logo color="black" width="400" />
          </Title>
        </Wrapper>
      </Layout>
    )
  }
}

export default IndexPage
