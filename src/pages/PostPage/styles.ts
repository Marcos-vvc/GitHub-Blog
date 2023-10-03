import styled from 'styled-components'

export const ContainerPage = styled.div`
  position: relative;
  z-index: 1;
  min-height: 10.5rem;

  margin: -7rem auto 0;
  width: 100%;
  padding: 2rem;

  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
    margin-top: 1.25rem;
  }

  header {
    display: flex;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme['blue-normal']};
      text-decoration: none;
      font-size: 0.75rem;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.blue};
        transition: 0.2s;
      }
    }
  }
`
export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const InfoProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem 2rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 2.5rem auto 2rem;
  padding: 2.5rem 2rem;
  overflow: hidden;
  color: ${(props) => props.theme['base-text']};

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    margin: 2rem 0 0.5rem;
  }

  p {
    margin: 0.25rem 0;
  }
`
