import { useReducer } from "react";
import { DigitButton } from "./DigitButton";
import { OperationButton } from "./OperationButton";
import "./style.css";

export const Actions = {
  Add_digit: "add-digit",
  Choose_Operation: "choose_operation",
  Clear: "clear",
  Delete_digit: "delete_digit",
  Evaluate: "evaluate",
};
const reducer = (state, { type, payload }) => {
  console.log(state);
  switch (type) {
    case Actions.Add_digit:
      if (state.overwrite) {
        return {
          ...state,
          currentOperant: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperant === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperant.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperant: `${state.currentOperant || ""}${payload.digit}`,
      };
    case Actions.Choose_Operation:
      if (state.currentOperant == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperant == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperant,
          currentOperant: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        currentOperant: null,
      };
    case Actions.Clear:
      return {};
    case Actions.Delete_digit:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand === null) {
        return state;
      }
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case Actions.Evaluate:
      if (
        state.operation == null ||
        state.currentOperant == null ||
        state.previousOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperant: evaluate(state),
      };
    default:
      return new Error();
  }
};

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
  }
  return computation.toString();
}

const IntegerFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
function formatOperand(operand) {
  if (operand === null) {
    return;
  }
  console.log(operand);
  // const [integer, decimal] = operand.split(".");
  // if (decimal == null) {
  //   return IntegerFormatter.format(integer);
  // }
}
export const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)}
          {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button
        className="span-two"
        onClick={() => dispatch({ type: Actions.Clear })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: Actions.Delete_digit })}>
        DEl
      </button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: Actions.Evaluate })}
      >
        =
      </button>
    </div>
  );
};
