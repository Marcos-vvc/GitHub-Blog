import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { PostPage } from './pages/PostPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
