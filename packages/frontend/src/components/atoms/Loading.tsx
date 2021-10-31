import styled from 'styled-components'
import { alphaLevel, colors } from '@violet/frontend/src/utils/constants'
import { Portal } from './Portal'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colors.black}${alphaLevel[8]};
`

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 10px;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #fff;
  -webkit-animation: load 1.1s infinite linear;
  animation: load 1.1s infinite linear;

  &,
  ::after {
    width: 10em;
    height: 10em;
    border-radius: 50%;
  }

  @-webkit-keyframes load {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(0deg);
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes load {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(0deg);
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`

export const Loading = () => {
  return (
    <Portal>
      <Container>
        <Loader />
      </Container>
    </Portal>
  )
}
