import { Profile } from '../../components/Profile'
import MySVGComponent from '../../components/Spinner'
import { useFetchPost } from '../../hook/useFetchPost'
import { PostCard } from '../components/PostCard'
import { SearchForm } from '../components/SearchForm'
import { HomeContainer, PostCardContainer } from './styles'

export function Home() {
  const { postView, isLoadingPosts } = useFetchPost()

  return (
    <div className="container">
      <Profile />
      <HomeContainer>
        <SearchForm />
        <PostCardContainer>
          {isLoadingPosts ? (
            <MySVGComponent />
          ) : (
            postView.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  createdAt={post.created_at}
                  body={post.body}
                  number={post.number}
                />
              )
            })
          )}
        </PostCardContainer>
      </HomeContainer>
    </div>
  )
}
