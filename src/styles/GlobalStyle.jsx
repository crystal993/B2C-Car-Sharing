import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
* {
	box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
	background-color: #ffffff;
  font-family: "Inter";
}
body * {
	background-color: transparent;
	letter-spacing: -0.5px;
}
h1, h2, h3, h4, h5 {
  font-family: 'Roboto', sans-serif;
}
h1 {
  font-size: 1.8rem;
}
h2 {
  font-size: 1.4rem;
}
h3 {
  font-size: 1.2rem;
}
h4 {
  font-size: 1rem;
}
h5 {
  font-size: 0.8rem;
}
span {
  font-size: 1rem;
}
p {
}
a {
	text-decoration: underline;
  cursor: pointer;
}
`;
export default GlobalStyle;
