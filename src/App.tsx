import GlobalStyles from "./styles/GlobalStyles";
import TimeStumps from "./components/TimeStumps/TimeStumps";
import { MainContainer } from "./components/TimeStumps/TimeStumps.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <TimeStumps />
      </MainContainer>
    </>
  );
}

export default App;
