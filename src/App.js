import './Style.css';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div >
        <div className="divflex" >
            <div> <FullName /> </div>
            <div><ProfilePhoto /></div>
            
        </div>
        <Address />
      
    </div>
  );
}

export default App;
