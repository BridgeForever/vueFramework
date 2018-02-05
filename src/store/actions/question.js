import * as types from '../constants/types';
import util from '../../libs/util';
export const monitorActions={
	fetchMonitorListAction({ commit, state, dispatch }, params){
		util.ajax.get('/monitor/snapshot/latestdata',{
			headers:{
				token:"11111111111111111111111"
			}

		}).then((res) => {
           console.log(res);
           if(res.status.toString()=="200"){
           	commit(types.CHANGE_MONITOR_LIST,res.data.snapdata
	);

           }
        })
		.catch((error)=>{
			console.log(error)
		})

	}
}