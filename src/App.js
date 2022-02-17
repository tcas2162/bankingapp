import { useEffect } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './components/home'
import NavBar from './components/navbar'
import CreateAccount from './components/createaccount'
import Deposit from './components/deposit'
import AllData from './components/alldata'
import Withdraw from './components/withdraw'
import Profile from './components/profile'
import { UserProvider } from './components/usercontext'

const App = () => {

  useEffect(() => {
    document.title = "Bank Of Timerica"
  }, [])

return (
  <HashRouter>
    <NavBar />
    <UserProvider>
      <Route path ="/" exact component={Home} />
      <Route path="/createaccount" component={CreateAccount} />
      <Route path="/deposit" component={Deposit} />
      <Route path="/withdraw" component={Withdraw} />
      <Route path="/alldata" component={AllData} />
      <Route path='/users/:username' component={Profile} />
    </UserProvider>
  </HashRouter>
)
}

export default App;
