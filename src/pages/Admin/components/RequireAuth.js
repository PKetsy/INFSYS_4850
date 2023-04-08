import { useEffect } from 'react';
import authStore from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

export default function RequireAuth(props) {
  const store = authStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);

  const handleOkayClick = () => {
    navigate('/admin/login');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  if (store.loggedIn === false) {
    return (
      <div className="section">
        <div className="container">
          <main>
            <h2>Please Log in!</h2>
            <button onClick={handleOkayClick}>Okay</button>
            <button onClick={handleHomeClick}>Take me Home</button>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">{props.children}</div>
    </div>
  );
}
