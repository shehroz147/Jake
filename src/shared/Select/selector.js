export const compareSelector = state => state.options.compare;
export const trendSelector = state => state.options.trend;
export const stateSelector = state => state.options.state;
export const yearSelector = state => state.options.year;

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
