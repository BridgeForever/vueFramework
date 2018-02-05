import {monitorMutations} from '../mutations/monitor';
import {monitorActions} from '../actions/monitor';
import {monitorGetters} from '../getters/monitor';
const monitor={
	state:{
		list:{}
	},
	mutations:monitorMutations,
	actions:monitorActions,
	getters:monitorGetters
}
export default monitor