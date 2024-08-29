
import {AppRoutes} from "./routes/AppRoutes.jsx";
import GlobalStyles from './theme/GlobalStyles.js';
import {Global} from "@emotion/react";
import globalStyles from "./theme/GlobalStyles.js";



function App() {
  return (
      <>
          <Global styles={globalStyles} />
          <AppRoutes />
      </>
  )
}

export default App
