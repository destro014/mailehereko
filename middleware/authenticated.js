export default function ({ store, route, redirect }) {
  const adminRoute = /\/prasasan\/*/g
  const loginRoute = /\/login\/*/g
  if (route.path.match(adminRoute)) {
    if (!store.getters['users/isLoggedIn']) {
      return redirect('/bhitra')
    }
  }
  if (route.path.match(loginRoute)) {
    if (store.getters['users/isLoggedIn']) {
      return redirect('/prasasan')
    }
  }
}
