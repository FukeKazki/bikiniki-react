import React from "react";
import {useRecoilState} from "recoil";
import {toggleState} from "../recoil/Toggle";

export const ToggleA = () => {
    const [isOpen, setToggle] = useRecoilState(toggleState);
    return (
        <>
            {isOpen.toString()}
            <button onClick={() => setToggle(prevState => !prevState)}>γΌγγ</button>
        </>
    );
}