import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 4.5rem auto 0;
`
export const PostCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
`
