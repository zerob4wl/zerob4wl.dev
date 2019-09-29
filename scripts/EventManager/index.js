/*
*   
*
*   _eventsListener = {
*       scopeName1 : [fn1, fn2], 
*   }
*/

export default class EventManager {
    constructor() {
        this._eventsList = {};
    }

    on(scope, listener) {
        if (!this._eventsList[scope]) {
            this._eventsList[scope] = [];
        }
        this._eventsList[scope].push(listener);
    }

    emit(scope, ...args) {
        const events = Object.keys(this._eventsList);

        for(var i = events.length; i--; ) {
            if (this._isInScope(scope, events[i])) {
                this._eventsList[events[i]].forEach(fn => {
                    fn(...args);
                });
            }
        }
    }

    remove(scope, listener) {
        const eventList = this._eventsList[scope];
        if (!eventList) return;
        this._eventsList[scope] = eventList.filter(fn => fn !== listener);
    }

    reset() {
        this._eventsList = {}; 
    }

    _isInScope(scope, key) {
        const regex = `^${key.replace(/\*/g, '\[a-z0-9\]+?')}$`;
        return new RegExp(regex).test(scope);
    }
}