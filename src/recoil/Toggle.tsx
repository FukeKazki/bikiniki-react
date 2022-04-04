import React from "react";
import {atom} from "recoil";

// 共有するデータの作成
export const toggleState = atom({
    key: "toggleState",
    default: false,
})
