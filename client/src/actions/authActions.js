import { TEST_DISPATCH } from "./types";

// Register User
export const registeruser = userdata => {
  return {
    type: TEST_DISPATCH,
    payload: userdata
  };
};
