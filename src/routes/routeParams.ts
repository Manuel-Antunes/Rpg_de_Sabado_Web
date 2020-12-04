import { RouteComponentProps } from "react-router";

interface MesaParams {
  id: string;
}

export interface MesaComponentProps extends RouteComponentProps<MesaParams> {}
