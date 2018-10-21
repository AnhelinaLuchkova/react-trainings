import styled from 'styled-components';
import cartBoxImg from 'components/theme/images/cart-icon.svg';

const CartBoxStyled = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background: transparent url(${cartBoxImg}) no-repeat center center;
  color: #f1f2f3;

  > span {
    display: flex;
    align-self: baseline;
    margin-left: 8px;
  }
`;

export default CartBoxStyled;
