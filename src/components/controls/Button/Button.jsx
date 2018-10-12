import styled from 'styled-components';

const Button = styled.button`

  margin-left: 20px;

  position:relative;
  padding: 10px 12px;
  border:none;
  border-radius: 1px;
  outline:none;
  background-color: #e37222;
  font-size: 16px;
  color: #ffffff;
  transition:800ms ease all;
  cursor: pointer;

  :hover {
    background-color: #ffffff;
    color: #e37222;
  }

  :before,:after{
    content:'';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #e37222;
    transition: 400ms ease all;
  }

  :after{
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  :hover:before,:hover:after{
    width: 100%;
    transition: 800ms ease all;
  }
`;

export default Button;
