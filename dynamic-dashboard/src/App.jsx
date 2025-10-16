import DynamicDashboard from './DynamicDashboard'
import TodaysDate from './TodaysDate';
import './App.css'

function App() {

  return (
    <>
      <header>
        <TodaysDate />
      </header>
      <div>
        <DynamicDashboard />
      </div>
    </>
  )
}

export default App;
