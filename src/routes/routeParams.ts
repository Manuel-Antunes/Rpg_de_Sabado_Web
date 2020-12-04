import { RouteComponentProps } from 'react-router';

interface MesaParams {
  id: string;
}

export type MesaComponentProps = RouteComponentProps<MesaParams>;
