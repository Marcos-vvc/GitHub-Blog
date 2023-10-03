import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContainerPage, Content, InfoProfile, PageContent } from './styles'
import { Link, useParams } from 'react-router-dom'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import { relativeDateDistanceToNow } from '../../utils/formatter'
import MySVGComponent from '../../components/Spinner'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Post {
  id: number
  title: string
  body: string
  html_url: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  number: number
}

export function PostPage() {
  const [postDetail, setPostDetail] = useState<Post>({} as Post)
  const [isLoadingPostDetail, setIsLoadingPostDetail] = useState(false)

  const { id } = useParams()

  const fetchPostById = useCallback(async () => {
    setIsLoadingPostDetail(true)
    const response = await axios.get(
      `https://api.github.com/repos/Marcos-vvc/GitHub-Blog/issues/${id}`,
    )

    setPostDetail(response.data)
    setIsLoadingPostDetail(false)
  }, [id])

  useEffect(() => {
    fetchPostById()
  }, [fetchPostById])

  let formattedDate =
    postDetail.created_at && relativeDateDistanceToNow(postDetail.created_at)

  // Deixando primeira letra da string em maiúsculo
  formattedDate =
    formattedDate && formattedDate[0].toUpperCase() + formattedDate.substring(1)

  return (
    <div className="container">
      <ContainerPage>
        {isLoadingPostDetail ? (
          <MySVGComponent />
        ) : (
          <>
            <PageContent>
              <header>
                <Link className="a" to={'/'}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  VOLTAR
                </Link>
                <a href={postDetail.html_url} target="blank">
                  VER NO GITHUB
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </header>
              <h2>{postDetail.title}</h2>
            </PageContent>
            <InfoProfile>
              <span>
                <FontAwesomeIcon icon={faGithub} /> {postDetail.user?.login}
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarDay} />
                {formattedDate}
              </span>
              <span>
                <FontAwesomeIcon icon={faComment} /> {postDetail.comments}
                comments
              </span>
            </InfoProfile>
          </>
        )}
      </ContainerPage>
      <Content>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {postDetail.body}
        </ReactMarkdown>
      </Content>
    </div>
  )
}
