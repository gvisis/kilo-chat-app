import { FaEnvelope, FaKey } from "react-icons/fa";
import styled from "styled-components";

const iconStyling = `
    color: #29c0cd;
    width: 32px;
    height: 32px;
    opacity: 60%;
    padding: 10px;
  `;

export const EmailIcon = styled(FaEnvelope)`
  ${iconStyling}
`;

export const PassIcon = styled(FaKey)`
  ${iconStyling}
`;
