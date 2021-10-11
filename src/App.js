import './App.css';
import { Switch, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import DoesntExist from './Components/DoesntExist';


function App() {

  const location = useLocation();

  return (
      <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Page1}></Route>
            <Route path='/page2' component={Page2}></Route>
            <Route path='/page3' component={Page3}></Route>
            <Route path='/page4' component={Page4}></Route>
            <Route path='/page5' component={Page5}></Route>
            <Route path='*' component={DoesntExist}></Route>
          </Switch>
      </AnimatePresence>
  );
}

export default App;
