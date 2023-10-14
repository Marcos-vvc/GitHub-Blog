import { useState, useEffect } from 'react'
import axios from 'axios'

export interface Post {
  id: number
  title: string
  created_at: string
  body: string
  comments: number
  html_url: string
  number: number
}

export const useFetchPost = () => {
  const [postView, setPostView] = useState<Post[]>([])
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

  const fetchPost = async (query?: string) => {
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

  return { postView, fetchPost, isLoadingPosts }
}
