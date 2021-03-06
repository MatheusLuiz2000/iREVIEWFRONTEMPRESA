import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.form`
  max-width: 900px;
  width: 900px;
  padding: 25px;
  text-align: center;

  h2 {
    margin-bottom: 30px;
    color: #0c1e5b;
  }
`;

export const ContainerSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
  }
`;
