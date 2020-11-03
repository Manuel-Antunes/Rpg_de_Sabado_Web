import React from "react";

import {} from "@rocketseat/unform";
import { Button } from "./styles";

const SubmitButton: React.FC = (props) => {
  return (
    <Button type="submit">{props.children ? props.children : "Send..."}</Button>
  );
};

export default SubmitButton;
