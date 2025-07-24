import { defineStore } from 'pinia';
import { b as useNuxtApp } from './server.mjs';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const useUsersStore = defineStore("users", {
  state: () => ({
    authUser: null,
    loading: false,
    error: null
  }),
  getters: {
    isLoggedIn: (state) => !!state.authUser
  },
  actions: {
    async login(email, password) {
      this.loading = true;
      this.error = null;
      const { $auth } = useNuxtApp();
      try {
        const userCredential = await signInWithEmailAndPassword(
          $auth,
          email,
          password
        );
        const user = userCredential.user;
        this.authUser = { uid: user.uid, email: user.email || "" };
      } catch (e) {
        this.error = e.message;
        this.authUser = null;
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      const { $auth } = useNuxtApp();
      await signOut($auth);
      this.authUser = null;
    },
    initAuthListener() {
      const { $auth } = useNuxtApp();
      onAuthStateChanged($auth, (user) => {
        if (user) {
          this.authUser = { uid: user.uid, email: user.email || "" };
        } else {
          this.authUser = null;
        }
      });
    }
  }
});

export { useUsersStore as u };
//# sourceMappingURL=users-D6d-_zbj.mjs.map
