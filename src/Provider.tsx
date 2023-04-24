import { ThemeProvider } from 'styled-components';
import { COLORS } from './config/config';

interface ProviderProps {
  children: React.ReactNode;
}

const theme = {
  ...COLORS
};

export const Provider = ({ children }: ProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
