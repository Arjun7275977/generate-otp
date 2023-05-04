
import './App.css';
import OtpGenerator from './Component/otp'
import  OtpSent from './Component/axiosmethod'

function App() {
  return (
    <div className="App">
      <OtpGenerator/>
      <OtpSent/>
    </div>
  );
}

export default App;
