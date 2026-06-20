import { LightningElement,track  } from 'lwc';

export default class BasicLwc extends LightningElement {
    //Reactivity & Track 
    course =["Admin","Apex","LWC","Triggers"];
    @track QASLOT={
        Session:"9PM",
        Timing:"8:00",
        Duration:" 1hour"
    }
    handleChangeSlot(event){
        this.QASLOT.Session=event.target.value;

    }
}