/* 
The App component serves as the top-level component
or "root" component. It establishes the entire
web application's routing structure.
*/

/* eslint-disable no-unused-vars */
import BotSpecsPage from './pages/BotSpecsPage'
import NotFoundPage from './pages/NotFoundPage'
import BotPage from './pages/BotsPage'

// TODO: import Routes and Route
import { Routes, Route } from 'react-router-dom';

const App = () => {
  // TODO: Render Routes with a Route for:
  // - BotPage when the URL matches "/"
  // - BotSpecsPage when the URL matches "/robots/:id"
  // - NotFoundPage when the URL doesn't match either of the above URLs

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<BotPage />}></Route>
        <Route path='/robots/:id' element={<BotSpecsPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
