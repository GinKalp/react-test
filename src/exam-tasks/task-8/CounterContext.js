import {createContext, useContext, useState} from "react";

export const CounterContext = createContext({
    counter: 0,
    plus10: () =>{},
    minus10: () =>{}
})

CounterContext.displayName = 'CounterContext'


function CounterProvider({children}){
    const [ctxCounter, setCtxCounter] = useState(0)

    const plus10 = () =>{
        if (ctxCounter >= 100) return
        setCtxCounter(ctxCounter + 10)
    }
    const minus10 = () =>{
        if (ctxCounter <= 0) return
        setCtxCounter(ctxCounter - 10)
    }

    const counterCtx = {
        counter: ctxCounter,
        plus10,
        minus10
    }
    return (
        <CounterContext.Provider value={counterCtx}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider

export function useCounterCtx(){
    return useContext(CounterContext)
}