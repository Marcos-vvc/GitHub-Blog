import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  z-index: 1;

  margin: -7rem auto 0;
  width: 100%;
  min-height: 13.25rem;
  max-width: 54rem;
  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    border-radius: 0.5rem;
    width: 9.25rem;
    height: 9.25rem;
  }

  span {
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      margin: 0 auto;
    }
  }
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    color: ${(props) => props.theme['base-title']};
  }

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

  p {
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-label']};
  }
`
