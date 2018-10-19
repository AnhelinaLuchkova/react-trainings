import styled from 'styled-components';

const ProductStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;

  width: 200px;
  height: 300px;
  box-sizing: border-box;
  padding: 10px;

  background-color: rgba(189, 189, 189, 0.25);

  > span {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 180px;
  }

  > div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    align-self: flex-end;
    width: 100%;
  }
`;

export default ProductStyled;
