// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       // never change the existing state: always return new object!
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     }
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     }
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     }
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     }
//   }

//   return state
// }

// const store = createStore(counterReducer)
