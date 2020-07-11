import { AlertColorTypes } from 'types/generals'

export const SET_ALERT = 'SET_ALERT'
export const UNSET_ALERT_MSG = 'UNSET_ALERT_MSG'

export const setAlert = (color: AlertColorTypes, message: string, timeout?: number) => (dispatch: any) => {
    dispatch({
        type: SET_ALERT,
        color,
        message
    })

    // setTimeout(() => dispatch({ type: UNSET_ALERT_MSG }), timeout || 3500)
}
