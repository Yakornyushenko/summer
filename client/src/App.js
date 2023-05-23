import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {ApplicationContainer} from "./components/ApplicationContainer";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  return (
      <MantineProvider theme={{ fontFamily: "Inter" }} withGlobalStyles withNormalizeCSS>
          <BrowserRouter>
              <ApplicationContainer>
                  <AppRouter/>
              </ApplicationContainer>
          </BrowserRouter>
      </MantineProvider>
  );
})

export default App;
