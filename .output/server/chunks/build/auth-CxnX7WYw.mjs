import { h as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useUsersStore } from './users-u1Jv2-Pp.mjs';
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
import 'consola';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const auth = defineNuxtRouteMiddleware(() => {
  const usersStore = useUsersStore();
  if (!usersStore.isLoggedIn) {
    return navigateTo("/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-CxnX7WYw.mjs.map
