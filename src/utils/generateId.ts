import { init } from "@paralleldrive/cuid2";

const createId = init({
  length: 8,
});

export const generateId = () => {
  return createId();
};
