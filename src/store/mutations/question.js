import * as types from '../constants/types';
export const monitorMutations={
	[types.CHANGE_MONITOR_LIST](state,data){
		state.list=data;

	}
}