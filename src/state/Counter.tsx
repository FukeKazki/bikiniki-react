import React, {createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect} from 'react';

type ContextProps = {
    count: number,
    setCount: Dispatch<SetStateAction<number>>
};

// 共有するデータを作成
export const CounterContext = createContext<ContextProps>({
    count: 0,
    setCount: () => {},
});

type Props = {
    children: ReactNode
}

// データの配布
export const CounterProvider = ({ children }: Props) => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {

    }, [])
    return (
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    );
};
