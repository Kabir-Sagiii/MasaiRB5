import { INC } from "./ActionTypes";
export const incActionCreator = (countvalue) => {
  return {
    type: INC,
    countValue: countvalue,
  };
};

export const todoActionCreator = (tododata) => {
  return {
    type: "todo",
    payload: tododata,
  };
};
