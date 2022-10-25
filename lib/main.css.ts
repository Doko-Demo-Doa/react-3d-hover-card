import { style } from "@vanilla-extract/css";

export const wrapper = style({
  transform: "scale(1)",
  perspective: "600px",
  transition: "all 250ms ease-out",
  ":hover": {
    transform: "scale(1.14)",
  },
});
