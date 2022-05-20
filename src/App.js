
  import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

import Nav from "./components/nav/Nav";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div className='container'>
      <div className='bg-effect'>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
      <main>
        <Nav />
        <section>
          <Weather />
        <ToastContainer />
        </section>
      </main>
    </div>
  );
}

export default App;
