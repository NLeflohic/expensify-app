import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startEditExpense,
  startSetExpenses,
  startRemoveExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const uid = "testUID";
const defaultAuthState = { auth: { uid } };

const createMockStore = configureMockStore([thunk]);
beforeAll(done => {
  database.goOnline();
  done();
});

afterAll(done => {
  database.goOffline();
  done();
});

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("123abc", {
    note: "myNote"
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "myNote"
    }
  });
});

test("Should setup add expense action object", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("Should add expense to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "mouse",
    amount: 5000,
    note: "Mouse note",
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    database
      .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
      .once("value")
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });
});

test("Should set expenses", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("Should update expense and store to databasse", done => {
  const store = createMockStore(defaultAuthState);
  const updates = expenses[1];
  updates.description = "Description test";
  store.dispatch(startEditExpense(updates.id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      id: updates.id,
      updates: {
        id: expect.any(String),
        ...updates
      }
    });

    database
      .ref(`users/${uid}/expenses/${actions[0].updates.id}`)
      .once("value")
      .then(snapshot => {
        const exp = snapshot.val();
        exp.id = actions[0].updates.id;
        expect(snapshot.val()).toEqual(updates);
        done();
      });
  });
});

test("Should fetch the expenses from firebase", done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});

test("Should remove the expense from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});
