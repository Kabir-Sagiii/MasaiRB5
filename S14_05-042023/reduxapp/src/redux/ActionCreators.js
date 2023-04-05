import { INC } from "./ActionTypes";
export const incActionCreator = (countvalue) => {
  return {
    type: INC,
    countValue: countvalue,
  };
};
