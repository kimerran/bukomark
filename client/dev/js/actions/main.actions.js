export const SayHello = () => {
    return function(dispatch) {
        dispatch({type: "SAY_HELLO"});
    }
}