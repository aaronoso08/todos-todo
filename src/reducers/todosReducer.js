
const INITIAL_STATE = {
    items: [
        'learnnn',
        'redux',
        'hmmm'
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO': return state
        default: return state
    }
}
