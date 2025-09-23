import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ToastMessage from "./components/ToastMessage";
import './styles/toast.css';

function App() {

  const [toast, setToast] = useState({ show: false, message: "", bg: "" });

  return (
    <>
      <Navbar />
      <Home setToast={setToast} />
      <Footer />
      <div className='toast-container'>
        <ToastMessage
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          message={toast.message}
          bg={toast.bg}
        />
      </div>
    </>
  );
}

export default App;
