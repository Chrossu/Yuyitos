const loadingReducer = (state = {}, action: any) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type)

  // If not a *_REQUEST | *_SUCCESS | *_FAILURE actions, we ignore them
  if (!matches)
    return state

  const [, requestName, requestState] = matches

  return {
    ...state,
    // Store whether a request is happening at the moment or not, e.g:
    // Will be true when receiving GET_TODOS_REQUEST
    // And false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
    [requestName]: requestState === 'REQUEST'
  }
}

export default loadingReducer