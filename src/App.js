import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles";

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes user={window.localStorage.getItem('user')}/>
    </>
  );
}
