import UserInfo from './components/UserInfo';
import styles from './App.css';

function App() {
  return (
    <div className="App">
      <br></br><br></br>
      <UserInfo></UserInfo>
      <br></br><br></br>
    </div>
  );
}

export default App;
/*
current to-do:
*change textfield color to white
*add edit button that links to the edit page
*change placeholder image size to fit
*make buttons same size

needed changes:
*use info from a database
*submit info to a database

ideal changes:
*change to make height flexible
*add option to change text size
*high contrast mode
*/