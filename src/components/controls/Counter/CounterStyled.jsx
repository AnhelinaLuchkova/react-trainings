import styled from 'styled-components';

const CounterStyled = styled.div`
  display: inline-block;

  .btn:focus, .input:focus {
    outline: none;
  }

  .btn {
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

  .btn-minus {
    border-radius: 25px 0 0 25px;
    padding-left: 9px;
  }

  .btn-plus {
    border-radius: 0 25px 25px 0;
    padding-right: 9px;
  }

  .input {
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

`;

export default CounterStyled;
