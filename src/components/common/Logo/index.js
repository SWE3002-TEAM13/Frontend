import React from "react";
import NanureLogo from "../../../assets/logo.svg";
import { LogoContainer } from "./styles";

<<<<<<< HEAD
function Logo(variant = "small") {
=======
function Logo({variant}) {
>>>>>>> processing
  return <LogoContainer src={NanureLogo} alt="nanure-logo" variant={variant} />;
}

export default Logo;
