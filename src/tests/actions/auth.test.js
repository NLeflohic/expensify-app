import { login, logout, startLogin } from "../../actions/auth";
import configureMockStore from "redux-mock-store";

test("Should test login", () => {
  const action = login("123");
  expect(action).toEqual({
    type: "LOGIN",
    uid: "123"
  });
});

// const createMockStore = configureMockStore({});
// test("Should login via google auth", done => {
//   const store = createMockStore();
//   store
//     .dispatch(startLogin("id"))
//     .then(() => {
//       const action = store.getActions();
//       expect(action).toEqual({
//         type: "LOGIN",
//         id: "id"
//       });
//     })
//     .done();
// });

test("Should test logout", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
