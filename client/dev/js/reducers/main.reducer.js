let defaultState = {
    messages: [],
    cur_user: {}
}

export default function(state=defaultState, action) {
    switch (action.type) {
        case "SAY_HELLO":
            return Object.assign({}, state, {
                message: "Oh, hello there!"
            });
    }
    return state;
}