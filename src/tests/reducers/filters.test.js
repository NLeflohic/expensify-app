import moment from "moment";
import filtersReducers from "../../reducers/filters";

test("Should setup default value", () => {
  const state = filtersReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set sortBy to amount", () => {
  const state = filtersReducers(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to amount", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducers(currentState, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
  expect(state).toEqual({
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducers(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set text filter", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducers(currentState, {
    type: "SET_TEXT_FILTER",
    text: "Test jest"
  });
  expect(state.text).toBe("Test jest");
});

test("Should set startDate filter", () => {
  const state = filtersReducers(undefined, {
    type: "SET_START_DATE",
    startDate: moment(0)
      .add(10, "days")
      .valueOf()
  });
  expect(state.startDate).toBe(
    moment(0)
      .add(10, "days")
      .valueOf()
  );
});

test("Should set endDate filter", () => {
  const state = filtersReducers(undefined, {
    type: "SET_END_DATE",
    endDate: moment(0)
      .subtract(10, "days")
      .valueOf()
  });
  expect(state.endDate).toBe(
    moment(0)
      .subtract(10, "days")
      .valueOf()
  );
});
