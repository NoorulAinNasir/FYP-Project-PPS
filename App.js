import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./users/admin/Admin";
import Student from "./users/student/Student";
import Teacher from "./users/teacher/Teacher";
import MainPage from "./spellBee/MainPage";
import ScoreModal from "./ScoreModal";
import SpellLevel from "./spellBee/SpellLevel";
import SpeechToText from "./spellBee/speechTotext/SpeechToText";
import AddWord from "./users/admin/AddWordAdmin";
import Auth from "./Auth";
import Confirmation from "./components/UIElements/Confirmation";
import CreateWorksheets from "./components/Worksheets/CreateWorksheets";
import ShowWorksheets from "./components/Worksheets/ShowWorksheets";
import ApprovedWS from "./components/Worksheets/ApprovedWS";
import MyWorksheets from "./components/Worksheets/MyWorksheets";
import WorksheetsHistory from "./components/Worksheets/WorksheetsHistory";
import English1 from "./Subjects/Grade1/English/English1";
import English2 from "./Subjects/Grade2/English/English2";
import English3 from "./Subjects/Grade3/English/English3";
import English4 from "./Subjects/Grade4/English/English4";
import English5 from "./Subjects/Grade5/English/English5";
import Maths1 from "./Subjects/Grade1/Mathematics/Maths1";
import Maths2 from "./Subjects/Grade2/Mathematics/Maths2";
import Maths3 from "./Subjects/Grade3/Mathematics/Maths3";
import Maths4 from "./Subjects/Grade4/Mathematics/Maths4";
import Maths5 from "./Subjects/Grade5/Mathematics/Maths5";
import Contents from "./Subjects/Contents";
import LectureNotes from "./users/teacher/LectureNotes";
import StudentNotes from "./users/student/StudentNotes";
import BasicTable from "./components/Table/BasicTable";
import Checkbox from "./Checkbox";
// import NotesStudent from "./users/student/NotesStudent";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact>
          <Auth />
        </Route>

        <Route path="/admin" exact>
          <Admin />
        </Route>

        <Route path="/student" exact>
          <Student />
        </Route>
        <Route path="/teacher" exact>
          <Teacher />
        </Route>
        <Route exact path="/Student/SpellBee">
          <MainPage />
        </Route>

        <Route exact path="/Student/SpellBee">
          <ScoreModal />
        </Route>

        <Route exact path="/SpellBee/SpellLevel">
          <SpellLevel />
        </Route>
        <Route exact path="/SpeechToText">
          <SpeechToText />
        </Route>
        <Route exact path="/addWord">
          <AddWord />
        </Route>
        <Route exact path="/Confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/CreateWorksheets">
          <CreateWorksheets />
        </Route>

        <Route exact path="/ShowWorksheets">
          <ShowWorksheets />
        </Route>
        <Route exact path="/confirmWorksheets">
          <ApprovedWS />
        </Route>

        <Route exact path="/WorksheetsHistory">
          <WorksheetsHistory />
        </Route>

        <Route exact path="/LectureNotes">
          <LectureNotes />
        </Route>

        <Route exact path="/StudentNotes">
          <StudentNotes />
        </Route>

        <Route exact path="/MyWorksheets">
          <MyWorksheets />
        </Route>

        <Route exact path="/BasicTable">
          <BasicTable />
        </Route>

        <Route exact path="/english1">
          <English1 />
        </Route>

        <Route exact path="/english2">
          <English2 />
        </Route>

        <Route exact path="/english3">
          <English3 />
        </Route>

        <Route exact path="/english4">
          <English4 />
        </Route>

        <Route exact path="/english5">
          <English5 />
        </Route>

        <Route exact path="/maths1">
          <Maths1 />
        </Route>

        <Route exact path="/maths2">
          <Maths2 />
        </Route>

        <Route exact path="/maths3">
          <Maths3 />
        </Route>

        <Route exact path="/maths4">
          <Maths4 />
        </Route>

        <Route exact path="/maths5">
          <Maths5 />
        </Route>

        <Route exact path="/Contents">
          <Contents />
        </Route>
        <Route exact path="/checkbox">
          <Checkbox />
        </Route>

        {/* <Route exact path="/NotesStudent"> */}
        {/* <NotesStudent />
        </Route> */}

        {/* <Redirect to="/" /> */}
      </Router>
    </div>
  );
}

export default App;
