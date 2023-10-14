import { useState } from 'react'
import { useFetchPost } from '../../../hook/useFetchPost'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  const [inputText, setInputText] = useState('')
  const { postView, fetchPost } = useFetchPost()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchPost(inputText)
    }
  }

  return (
    <SearchFormContainer>
      <header>
        <h2>Públicações</h2>
        <span>
          {postView.length > 1
            ? `${postView.length} publicações`
            : `${postView.length} publicação`}
        </span>
      </header>
      <input
        type="text"
        placeholder={inputText ? 'Texto da busca' : 'Buscar conteúdo'}
        onFocus={() => setInputText('Texto da busca')}
        onBlur={() => setInputText('')}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInputText(e.target.value)}
      />
    </SearchFormContainer>
  )
}
