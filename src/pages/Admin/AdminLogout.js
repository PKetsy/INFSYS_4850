import React, { useEffect } from 'react';
import authStore from './stores/authStore';

export default function AdminLogout() {
  const store = authStore();

  useEffect(() => {
    store.logout();
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div>
          <main>
            <h1>You are now logged out</h1>
          </main>
        </div>
      </div>
    </div>
  );
}
