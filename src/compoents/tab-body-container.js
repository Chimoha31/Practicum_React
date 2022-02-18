import styled from "styled-components";

export const TabBodyContainer = (props) => {
  const title = props.title;
  const children = props.children;

  return (
    <Container>
      <h4>{title}</h4>
      {children}
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 64px;
`;
