import * as types from '../constants/types'
export const monitorGetters={
	[types.MONITOR_LENGTH](state){
		if(state && state.list && state.list.topN){
			return state.list.topN.length
		}else{
			return 0
		}
		
	}
}