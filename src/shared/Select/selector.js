export const stateSelector = state => state.selection.state;
export const state1Selector = state => state.selection.state1;
export const state2Selector = state => state.selection.state2;
export const trendSelector = state => state.selection.trend;
export const yearSelector = state => state.selection.year;

// export const stateOptionsSelector = createSelector(
//   [trendSelector, yearSelector, dataSelector],
//   (trend, year, data) => {
//     states.map((state) => {
//       const data = find();
//       if (isEmpty(data)) {
//         return {
//           state: 'Florida',
//           disabled: true,
//         };
//       }
//
//       return {
//         state: 'Florida',
//         disabled: false,
//       };
//     });
//   },
// );
