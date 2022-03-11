import { Switch, Link, Redirect } from 'react-router-dom';
 import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './components/header/Header';
import AddChallenge from './pages/addChallenge/AddChallenge';
import Users from './pages/addChallenge/users/User';
import Submissions from './pages/submissions/Submissions'

 // Create a client
 const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Switch>
          {/* <Link to={'/add-challege'} component={AddChallenge} /> */}
          {/* <Link to={'/users'} component={Users} /> */}
          <Link to={'./submissions'} component={Submissions} />
        </Switch>
      </div>
    </QueryClientProvider>
  )
}

export default App;