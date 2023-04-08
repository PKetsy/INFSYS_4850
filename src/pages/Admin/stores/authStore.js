// using a store from ZUSTAND
import create from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: '',
    password: '',
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },

  login: async () => {
    const { loginForm } = authStore.getState();

    const res = await axios.post(
      'http://localhost:5000/admin/login',
      loginForm,
      {
        withCredentials: true,
      }
    );
    set({ loggedIn: true });
    console.log(res);
  },

  checkAuth: async () => {
    try {
      await axios.get('http://localhost:5000/admin/check');
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },

  logout: async () => {
    axios.get('http://localhost:5000/admin/logout');
    set({ loggedIn: false });
  },
}));

export default authStore;
