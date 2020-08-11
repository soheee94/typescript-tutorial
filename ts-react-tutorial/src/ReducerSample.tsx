import React, {useRef} from "react";

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count : number,
    text : string,
    color : Color,
    isGood : boolean
};

type Action =
    | {type : 'SET_COUNT'; count : number}
    | {type : 'SET_TEXT'; text : string}
    | {type : 'SET_COLOR'; color : Color}
    | {type : 'TOGGLE_GOOD'};



function reducer(state: State, action:Action) : State{
    switch (action.type){
        case "SET_COUNT":
            return{
                ...state,
                count: action.count
            }

        default:
            throw new Error('zzz')
    }
}


const id = useRef<number>(0);
const increaseId = () => {
    id.current +=1;
}