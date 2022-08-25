import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "~/redux/store";
import { theme } from "~/styles/theme";

interface TestWrapperComponentProps {
  children: React.ReactNode;
}

export const TestWrapperComponent: React.FC<TestWrapperComponentProps> = ({
  children,
}) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </ReduxProvider>
);
