import { relativeDateDistanceToNow } from '../../../utils/formatter'
import { Container, Description, PostCardContainer } from './styles'
import { useNavigate } from 'react-router-dom'

interface PostPreviewProps {
  id: number
  number: number
  title: string
  createdAt: string
  body: string
}

export function PostCard({ number, title, body, createdAt }: PostPreviewProps) {
  const navigate = useNavigate()

  function handlePostClick() {
    navigate(`/post/${number}`)
  }

  let formattedDate = createdAt && relativeDateDistanceToNow(createdAt)

  // Deixando primeira letra da string em maiúsculo
  formattedDate =
    formattedDate && formattedDate[0].toUpperCase() + formattedDate.substring(1)

  return (
    <Container>
      <PostCardContainer onClick={handlePostClick}>
        <header>
          <p>{title}</p>
          <span>{formattedDate}</span>
        </header>
        <Description>{body}</Description>
      </PostCardContainer>
    </Container>
  )
}
