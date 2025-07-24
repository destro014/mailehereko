function authenticated({ store, route, redirect }) {
  const adminRoute = /\/admin\/*/g;
  const loginRoute = /\/login\/*/g;
  if (route.path.match(adminRoute)) {
    if (!store.getters["users/isLoggedIn"]) {
      return redirect("/login");
    }
  }
  if (route.path.match(loginRoute)) {
    if (store.getters["users/isLoggedIn"]) {
      return redirect("/admin");
    }
  }
}

export { authenticated as default };
//# sourceMappingURL=authenticated-9HZ3mXR4.mjs.map
