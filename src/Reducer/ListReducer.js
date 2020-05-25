const covinState={};

export default function (state =covinState, action){
    switch (action.type) {
        case "COVID_LIST":
        return action.payload;
        default:
            return state;
    }
};