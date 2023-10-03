import { ImageHeader } from './styles'
import logoImg from '../../assets/logo-github.svg'

export function Header() {
  return (
    <ImageHeader>
      <img src={logoImg} alt="" />
    </ImageHeader>
  )
}
