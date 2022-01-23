import styled from 'styled-components'

export const NavMobileContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const HeaderLogoImg = styled.img`
  width: 150px;
`
export const NavMobileIcons = styled.div``

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
`

export const MenuList = styled.ul`
  list-style: none;
  padding-left: 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MenuLink = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`

export const MenuHeading = styled.p`
  font-weight: 500;
  padding-left: 15px;
  text-decoration: none;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
`

export const CloseButton = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`
