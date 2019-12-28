// write and export your action creator function here

const catsUrl = 'https://learn-co-curriculum.github.io/cat-api/cats.json'

export const fetchCats = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_CATS'})
        fetch(catsUrl)
        .then(resp => resp.json())
        .then(catsData => dispatch({type: 'ADD_CATS', cats: catsData.images}))
    }
}

