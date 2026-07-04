import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './pages/Home.tsx'
import Footer from "./components/Footer.tsx"
import Login from "./pages/Login.tsx"
import Register from "./pages/Register.tsx"
import Navbar from "./components/Navbar.tsx"
import Account from "./pages/Account.tsx"
import { useAppData } from "./context/AppContext.tsx"
import Loading from "./components/Loading.tsx"
import PublicRoutes from "./components/PublicRoutes.tsx"
import ProtectedRoutes from "./components/ProtectedRoutes.tsx"
import AnalysePage from "./pages/Analyse.tsx"
import JobMatcherPage from "./pages/JobMatcher.tsx"

const App = () => {

const { loading } = useAppData();

  if (loading) {
    return <Loading />;
  }

  return <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route element={<PublicRoutes/>}>
             <Route path='/login' element={<Login/>}></Route>
          </Route>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/account' element={<Account/>}></Route>
            <Route path='/analyse' element={<AnalysePage/>}></Route>
            <Route path='/jobmatcher' element={<JobMatcherPage/>}></Route>
          </Route>
          <Route path='/register' element={<Register/>}></Route>
          
        </Routes>
        <Footer/>
     </BrowserRouter>
}

export default App