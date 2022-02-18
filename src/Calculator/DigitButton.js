import { Actions } from "./Calculator";

export const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: Actions.Add_digit, payload: { digit } });
      }}
    >
      {digit}
    </button>
  );
};
