export const requireAuth = (nextState: any, replace: any, next: any) => {
  // if (!authenticated) {
  //   replace({
  //     pathname: "/login",
  //     state: {nextPathname: nextState.location.pathname}
  //   })
  // }

  next()
}

// export const checkIfLoggedIn = (user) => req