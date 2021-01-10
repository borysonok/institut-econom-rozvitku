import './App.css';
import IERHeader from './components/IERHeader';
import IERFooter from './components/IERFooter';
import IERSidebar from './components/IERSidebar';
import IERMain from './components/IERMain';
import IERLanding from './components/IERLanding';

function App() {
  return (
    <div className="App">
      <div>
        <IERLanding />
      </div>
      <div>
        <IERSidebar />
      </div>
      <div>
        <IERHeader />
        <IERMain />
        <IERFooter />
      </div>
    </div>
  );
}

export default App;
