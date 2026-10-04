import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home.tsx';
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import Loading from "./components/Loading.tsx";
import PublicRoutes from "./components/PublicRoutes.tsx";
import ProtectedRoutes from "./components/ProtectedRoutes.tsx";
import { useAppData } from "./context/AppContext.tsx";

const Login = lazy(() => import("./pages/Login.tsx"));
const Register = lazy(() => import("./pages/Register.tsx"));
const Account = lazy(() => import("./pages/Account.tsx"));
const AnalysePage = lazy(() => import("./pages/Analyse.tsx"));
const JobMatcherPage = lazy(() => import("./pages/JobMatcher.tsx"));
const InterviewPrep = lazy(() => import("./pages/Interview.tsx"));
const BuildResumePage = lazy(() => import("./pages/BuildResume.tsx"));

const App = () => {
  const { loading } = useAppData();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      {/* Whole UI/Router flow ko Suspense ke andar rakhein */}
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/account" element={<Account />} />
            <Route path="/analyse" element={<AnalysePage />} />
            <Route path="/jobmatcher" element={<JobMatcherPage />} />
            <Route path="/interviewprep" element={<InterviewPrep />} />
            <Route path="/resumebuilder" element={<BuildResumePage />} />
          </Route>

          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;