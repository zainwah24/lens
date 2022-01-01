import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import NDAPage from "../Views/NDA";
import DocumentsPage from "../Views/Documents";
import ProjectScopePage from "../Views/ProjectScope";
import OverviewPage from "../Views/Overview";
import Team from "../Views/Team";
import GettingStarted from "../Views/GettingStarted";
import Proposal from "../Views/Proposal";
import Home from "../Views/Home";
const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/project-scope" element={<ProjectScopePage />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/team" element={<Team />} />
        <Route path="/nda" element={<NDAPage />} />
        <Route path="/getting-started" element={<GettingStarted />} />
      </Routes>
    </Router>
  );
};

export default Routers;
