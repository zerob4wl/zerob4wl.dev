import 'babel-polyfill'
import MicroAppManager from "./MicroAppManager";

class Apper {
   constructor() {} 
   
   init({element = document.body}) {
        this._applicationRoot = element;
        this._MicroAppManager = new MicroAppManager(element);
        console.log(element);
   }

   addMicroApp({name, app, element}) {
        const microApp = this._MicroAppManager.initMicroApp({name, app, element});
        microApp.render('hi');
        microApp.start();
   }
}

export default new Apper();