import React, { useState } from "react";


type Action = { type : 'INCREASE'} | { type : 'DECREASE'};

function reducer(state:number, action:Action): number{
    switch (action.type)
    {

    }}

function Counter(){
    const [state, setState] = useState<number>(0);
    return(
        <div>{state}</div>
    )
}

export default Counter;