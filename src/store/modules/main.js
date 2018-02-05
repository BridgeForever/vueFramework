import { mainMutations } from '../mutations/main';
import { mainActions } from '../actions/main';
const menu = {
    state: {
        mainCount: {
            applayCount: 0,
            toDoCount: 0,
            notifyCount: 0

        }
    },
    mutations: mainMutations,
    actions: mainActions
};
export default menu;