import {Route, Routes} from "react-router-dom";
import UsersTable from "./componets/pages/UsersTable";


function App() {
  return (
      <Routes>
        <Route path="/" element={<UsersTable/>} />
      </Routes>

  )

}

export default App;
