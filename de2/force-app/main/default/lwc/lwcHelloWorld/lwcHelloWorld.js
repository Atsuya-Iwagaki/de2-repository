import { LightningElement } from 'lwc';

export default class lwcHelloWorld extends LightningElement {
    greeting = 'World';

    changeHandler(event){
        this.greeting = event.target.value;
    }
}