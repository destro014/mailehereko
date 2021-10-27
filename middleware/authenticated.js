export default function ({ store, route, redirect }) {
  const adminRoute = /\/admin\/*/g
  const loginRoute = /\/login\/*/g
  if (route.path.match(adminRoute)) {
    if (!store.getters['users/isLoggedIn']) {
      return redirect('/login')
    }
  }
  if (route.path.match(loginRoute)) {
    if (store.getters['users/isLoggedIn']) {
      return redirect('/admin')
    }
  }
}
