import { Actions } from "./Calculator";

export const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: Actions.Choose_Operation, payload: { operation } });
      }}
    >
      {operation}
    </button>
  );
};
