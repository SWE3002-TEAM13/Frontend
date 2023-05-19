import { StyledLayout, CoveredLayout } from "./styles";

function BasicLayout(props) {
  return <StyledLayout>{props.children}</StyledLayout>;
}

export default BasicLayout;
