const initialState = {
    historicFilms: []
  }
  
  function manageHistoricFilms(state = initialState, action) {
      let nextState 
      switch (action.type){
          case 'TOGGLE_FILMDETAIL' :
            nextState = {
                ...state,
                historicFilms: [...state.historicFilms, action.value]
              }
            
            
            case 'REMOVE_HISTORIC_FILM':
                const historic = state.historicFilms.findIndex(item => item.id === action.value.id)
            if (historic !== -1) {
              // Le film est déjà dans l'historique, on le supprime de la liste
              nextState = {
                ...state,
                historicFilms: state.historicFilms.filter( (item, index) => index !== favoriteFilmIndex)
              }
            }

            case 'RESET_HISTORIC' :

            nextState = {
                historicFilms : []
            }
            return nextState || state
            
            default:
                return state
      }
  }
  
  export default manageHistoricFilms
  