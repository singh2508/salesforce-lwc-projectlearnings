import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

// Conditional Rendering 

   isShoppingChosen=false;
    isReadingChosen =false;
    handleShoppingCheck(event){
        this.isShoppingChosen=event.target.checked;
        this.isReadingChosen=false;
        this.template.querySelector(".readCheck").checked=false;
        console.log(`shopping : ${this.isShoppingChosen}`);

    }
    handleReadingCheck(event){
        this.isReadingChosen=event.target.checked;
        this.isShoppingChosen=false;
        this.template.querySelector(".shopCheck").checked=false;
        console.log(`reading : ${this.isReadingChosen}`);
    }
}