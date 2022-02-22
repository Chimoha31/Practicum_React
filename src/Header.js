import styled from 'styled-components';

const Header = (props) => {
  const tab = props.tab;
  const setTab = props.setTab;

  return(
    <Container>
    <HeaderUl>
      <HeaderLi focused={tab=== 'list'} onClick={() => setTab('list')}>List</HeaderLi>
      <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>Form</HeaderLi>
    </HeaderUl>
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

export default Header;