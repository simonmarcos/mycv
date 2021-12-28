import './App.css';
import CurriculumVitae from './pages/curriculumVitae';
import worksService from './services/worksService';

const App = () => {

  const worksResponse = worksService.getMyWorks();

  return (
    <div className="App">
      <CurriculumVitae />
    </div>
  );
}

export default App;
