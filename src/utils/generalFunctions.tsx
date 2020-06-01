// Loading reducer selector
export const createLoadingSelector = (actions: string[]) => (state: any) => {
  let asd = actions.some(action => state.loading[action])
  return asd
}

// Loading reducer error selector
export const createErrorMessageSelector = (actions: string[]) => (state: any) => {
  const errors = actions.map(action => state.error[action])

  if (errors && errors[0])
    return errors[0]
  else
    return ''
}
