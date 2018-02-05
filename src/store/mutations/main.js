import * as types from '../constants/types';
export const mainMutations = {
    [types.CHANGE_MAIN_COUNT](state, action) {
        state.mainCount = action.data;

    },
};