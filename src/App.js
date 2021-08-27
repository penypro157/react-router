import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Router, NavLink, Switch } from 'react-router-dom';
import routeList from './routes'
import Menu from './components/menu'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Menu />

        <Switch>
          {showRouteList(routeList)}  
        </Switch>
      </div>
    </BrowserRouter >
  );
}

var showRouteList = (routeList) => {
  var result = null;
  result = routeList.map((item, index) => {
    return (
      <Route key={index} path={item.path} exact={item.exact} component={item.component} />
    )
  })
  console.log(result);
  return result;
}
export default App;
