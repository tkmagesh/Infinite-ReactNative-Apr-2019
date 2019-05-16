var SM = (function(){
	var _currentState = undefined,
		_subscribers = [],
		_reducer = null,
		_init_action = '@@INIT/ACTION';

	function getState(){
		return _currentState;
	}

	function subscribe(subscriptionFn){
		_subscribers.push(subscriptionFn);
	}

	function triggerChange(){
		_subscribers.forEach(subscriptionFn => subscriptionFn());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		};
	}

	return {
		createStore : createStore
	};
})();




















