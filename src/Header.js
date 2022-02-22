import React, {useContext} from 'react';
import styled from 'styled-components';
import {Button}  from './compoents/button';
import {ThemeContext} from './const/contexts/ThemeContext';


const Header = (props) => {
  const tab = props.tab;
  const setTab = props.setTab;
  
  const [theme, toggleTheme] = useContext(ThemeContext);

  return(
    <Container>
    <HeaderUl>
      <HeaderLi focused={tab=== 'list'} onClick={() => setTab('list')}>List</HeaderLi>
      <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>Form</HeaderLi>
    </HeaderUl>
    <HeaderButton onClick={toggleTheme}>Theme Change</HeaderButton>
  </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #f44336': 'none'}
`

const HeaderButton = styled(Button)`
width: 130px;
height: 32px;
padding: 0;
margin-bottom: 4px;
`

export default Header;