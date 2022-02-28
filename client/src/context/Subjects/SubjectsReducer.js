import { GET_SUBJECTS, GET_SECTIONS } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_SUBJECTS:
      return {
        ...state,
        subjects: payload,
      };
    case GET_SECTIONS:
      return {
        ...state,
        sections: payload,
      };
    default:
      return state;
  }
};
