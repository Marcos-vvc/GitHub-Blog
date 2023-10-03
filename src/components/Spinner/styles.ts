import styled, { keyframes } from 'styled-components'

export const SpinnerContainer = styled.div``
export const MySVG = styled.svg`
  left: 50%;
  top: 85%;
  width: 12rem;
  height: 12rem;
  position: absolute;
  transform: translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0);

  @media (max-width: 768px) {
  }
`

const outlineAnimation = keyframes`
  12.5% {
    stroke-dasharray: 33.98873px, 242.77666px;
    stroke-dashoffset: -26.70543px;
  }

  43.75% {
    stroke-dasharray: 84.97183px, 242.77666px;
    stroke-dashoffset: -84.97183px;
  }

  100% {
    stroke-dasharray: 2.42777px, 242.77666px;
    stroke-dashoffset: -240.34889px;
  }
`

export const Outline = styled.path`
  stroke-dasharray: 2.42777px, 242.77666px;
  stroke-dashoffset: 0;
  -webkit-animation: ${outlineAnimation} 1.6s linear infinite;
  animation: ${outlineAnimation} 1.6s linear infinite;
`
