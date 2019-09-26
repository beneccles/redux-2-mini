import axios from 'axios'

const initialState = {
    articles: [],
    loading: false
}

const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

export const requestArticles = () => {
    let data = axios.get('/api/reddit').then(res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case REQUEST_ARTICLES + '_FULFILLED':
            return {articles: payload, loading: false}
        case REQUEST_ARTICLES + '_PENDING':
            return {...state, loading: true}
        case REQUEST_ARTICLES + '_REJECTED':
            return {...state, loading: false}
        default:
            return state
    }
}