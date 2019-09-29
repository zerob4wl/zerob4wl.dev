import 'babel-polyfill'
import MicroAppManager from "./MicroAppManager";
import EventManager from './EventManager';

class Apper {
   constructor() {} 
   
   init({element = document.body}) {
        this._applicationRoot = element;
        this._eventManager = new EventManager();
        this._MicroAppManager = new MicroAppManager(element, this._eventManager);
   }

   addMicroApp({name, app, element}) {
        const microApp = this._MicroAppManager.initMicroApp({name, app, element});
        microApp.render('hi');
        microApp.start();
   }
}

export default new Apper();