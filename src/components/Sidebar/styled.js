import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarContainer = styled.aside`
  align-items: center;
  border-right: 1px solid ${props => props.theme.borders};
  background: ${props => props.theme.mediumBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 320px;
  padding: 2rem;
  text-align: center;
  width: 320px;

  ${media.lessThan('large')`
    align-items: flex-start;
    height: auto;
    padding: 1rem;
    width: 100%;
  `}

  p {
    color: ${props => props.theme.texts};
  }

  a {
    color: ${props => props.theme.texts};
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${props => props.theme.highlight};
    }
  }
`