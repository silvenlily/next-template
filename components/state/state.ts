import { atom, selector } from "recoil";

// state
export const state1 = atom({
  key: "state1",
  default: "default value",
});

// selectors derived from state
export const state1len = selector({
  key: "state2",
  get: ({ get }) => {
    let a = get(state1);
    return a.length;
  },
});
