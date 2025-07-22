import { LightningElement, track } from 'lwc';

export default class TrackDecorator extends LightningElement {
    @track trackval = "World";

    changeHandler(event){
        this.trackval = event.target.value;
    }
}