import { StyledLayout, CoveredLayout } from "./styles";

function BasicLayout(props) {
  return (
    <CoveredLayout>
      <StyledLayout>{props.children}</StyledLayout>
    </CoveredLayout>
  );
}

export default BasicLayout;
