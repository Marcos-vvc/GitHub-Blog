import axios from 'axios'
import React, { useEffect, useState } from 'react'

export interface Post {
  id: number
  title: string
  created_at: string
  body: string
  comments: number
  html_url: string
  number: number
}

export interface PostContextType {
  postView: Post[]
  isLoadingPosts: boolean
  fetchPost: (query?: string) => Promise<void>
}

type Props = {
  children?: React.ReactNode
}

export const PostsContext = React.createContext({} as PostContextType)

export const PostsProvider: React.FC<Props> = ({ children }) => {
  const [postView, setPostView] = useState<Post[]>([])
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

  async function fetchPost(query?: string) {
    setIsLoadingPosts(true)
    try {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${query}%20repo:marcos-vvc/GitHub-Blog`,
      )

      setPostView(response.data.items)
    } catch (error) {
      // Lida com erros de requisição aqui, se necessário
    } finally {
      setIsLoadingPosts(false)
    }
  }

  useEffect(() => {
    fetchPost('')
  }, [])

  return (
    <PostsContext.Provider value={{ postView, fetchPost, isLoadingPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
