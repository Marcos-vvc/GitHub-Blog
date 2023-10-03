import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;
`

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;
  margin-bottom: -1rem;

  width: 26rem;
  height: 16.25rem;
  border-radius: 0.625rem;
  border: 2px solid transparent;
  padding: 2rem;
  gap: 1.25rem;
  background: ${(props) => props.theme['base-post']};

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    p {
      flex: 1;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.6;
    }

    span {
      font-size: 14px;
      width: max-content;
      line-height: 1.6;
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`
export const Description = styled.p`
  height: 6.5rem;
  line-height: 1.6;
  overflow: hidden;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; //número máximo de linha que o parágrafo terá, tudo depois é representado pelo ...
`
