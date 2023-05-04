import React from "react";
import NanureLogo from "../../../assets/logo.svg";
import { LogoContainer } from "./styles";

function Logo(variant = "small") {
  return <LogoContainer src={NanureLogo} alt="nanure-logo" variant={variant} />;
}

export default Logo;