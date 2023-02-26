import './App.scss';
// bootstrap javascript
import 'bootstrap/dist/js/bootstrap.bundle';
//routes
import Routes from 'routes/Routes';
//react toastify 
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import AuthContextProvider from 'context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>

      {/* react toastify */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>
  );
}

export default App;
