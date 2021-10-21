export const GET_COMPANY = 'GET_COMPANY'
export const GET_COMPANY_ERROR = 'GET_COMPANY_ERROR'
export const GET_COMPANY_LOADING = 'GET_COMPANY_LOADING'


export const addToFav = (company) => ({
    type: 'ADD_TO_FAV',
    payload: company
})

export const removeFromFav = (company) => ({
    type: 'REMOVE_FROM_FAV',
    payload: company
})


export const getJobAction = () => {
    return async (dispatch, getState) => {
      console.log('...fetching the company name')
      dispatch({
        type: GET_COMPANY_LOADING,
        payload: true,
      })
      try {
        let resp = await fetch('https://strive-jobs-api.herokuapp.com/jobs?company=' + this.props.match.params.companyName)
        if (resp.ok) {
          let jobs = await resp.json()
         
          dispatch({
            type: GET_COMPANY,
            payload: jobs,
          })
          dispatch({
            type: GET_COMPANY_ERROR,
            payload: false,
          })
          dispatch({
            type: GET_COMPANY_LOADING,
            payload: false,
          })
        } else {
          console.log('error')
          dispatch({
            type: GET_COMPANY_ERROR,
            payload: true,
          })
          dispatch({
            type: GET_COMPANY_LOADING,
            payload: false,
          })
        }
      } catch (error) {
        console.log(error)
        dispatch({
          type: GET_COMPANY_ERROR,
          payload: true,
        })
        dispatch({
          type: GET_COMPANY_LOADING,
          payload: false,
        })
      }
    }
  }
