import { e as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useUsersStore } from './users-D6d-_zbj.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import 'vue-router';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware((to) => {
  if (to.path === "/sitemap.xml" || to.path === "/robots.txt") {
    return;
  }
  const usersStore = useUsersStore();
  if (!usersStore.isLoggedIn) {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-D6FGDHMK.mjs.map
