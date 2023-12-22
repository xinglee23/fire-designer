import { atom } from "recoil";

export const pageState = atom({
  key: "page",
  default: [
    {
      type: "page",
      name: "default page",
      posRect: {
        x: 0,
        y: 0,
        h: 100,
        w: 100,
      },
    },
  ],
});
