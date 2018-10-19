import styled from 'styled-components';

const Text = styled.span`
  font-family: "Arial";
  font-size: 14px;
`;

const HeaderText = styled(Text)``;

const ProductText = styled(Text)`
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  mix-blend-mode: lighten;
`;

const PriceText = styled(Text)`
  width: 70px;
  padding: 11px;
  box-sizing: border-box;
  /* background-color: rgba(189, 189, 189, 0.35); */
  text-align: center;
  font-size: 17px;
  color: #ffffff;
`;

const FormItemText = styled(Text)``;

const FormSectionText = styled(Text)``;

export {
  Text, HeaderText, ProductText, PriceText, FormItemText, FormSectionText,
};
