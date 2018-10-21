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

const PageNameText = styled(Text)`
  display: flex;
  font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
  font-size: 26px;
  text-align: left;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  color: #d5d5d5;
`;

const LogoText = styled(PageNameText)`
  font-size: 42px;
  letter-spacing: .05em;
  text-shadow:
    4px 4px 0px rgba(44, 44, 44, 0.4),
    7px 7px 0px rgba(44, 62, 80, 0.6);
`;

const CartBoxText = styled(PageNameText)`
  padding: 0 4px;
  border-radius: 3px;
  background-color: rgba(44, 62, 80, 0.7);
  font-size: 18px;
`;

export {
  Text, HeaderText, ProductText, PriceText, FormItemText,
  FormSectionText, LogoText, PageNameText, CartBoxText,
};
