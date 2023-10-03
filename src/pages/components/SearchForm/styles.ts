import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
  }

  input {
    flex: 1;
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};

    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['blue-normal']};
    }
  }
`
