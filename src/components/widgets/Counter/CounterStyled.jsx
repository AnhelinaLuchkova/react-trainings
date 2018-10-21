import styled from 'styled-components';

const CounterStyled = styled.div`
  display: inline-block;

  button {
    height: 35px;
    width: 35px;
    vertical-align: bottom;
    border: none;
    background-color: #07889b;
    color: #ffffff;

    :hover {
      cursor: pointer;
      font-size: 20px;
      line-height: 16px;
    }
  }

  > button:nth-of-type(1) {
    border-radius: 25px 0 0 25px;
    padding-left: 9px;
  }

  > button:nth-of-type(2) {
    border-radius: 0 25px 25px 0;
    padding-right: 9px;
  }

  > input {
    display: inline-block;
    width: 65px;
    height: 35px;
    padding: 2px 0;
    vertical-align: top;
    box-sizing: border-box;
    border: none;
    background-color: #07889b;
    text-align: center;
    font-size: 20px;
    color: #ffffff;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  > button:focus,
  > input:focus {
    outline: none;
  }
`;

export default CounterStyled;
