import { api, LightningElement, track } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class Flow_ContactAndDate extends LightningElement {
    @track _contact;
    @track _date;

    @api
    get contact() {
        return this._contact;
    }
 
    set contact(val) {
        this._contact = val;
    }

    @api
    get date() {
        return this._date;
    }
 
    set date(val) {
        this._date = val;
    }

    handleContact(event) {
        this._contact = event.detail.value[0];

        const attributeChangeEvent = new FlowAttributeChangeEvent('contact', this._contact);
        this.dispatchEvent(attributeChangeEvent);
    }

    handleDate(event) {
        this._date = event.detail.value;

        const attributeChangeEvent = new FlowAttributeChangeEvent('date', this._date);
        this.dispatchEvent(attributeChangeEvent);
    }


    connectedCallback(){
        let rightNow = new Date();

        rightNow.setMinutes(
            new Date().getMinutes() - new Date().getTimezoneOffset()
        );
        
        this._date = rightNow.toISOString().slice(0,10);
    }

    @api
    validate() {
        if(this._contact != undefined && this._date != undefined) {
                return { isValid: true };
        } 
        else if (this._contact == undefined) {
            if (this._date == undefined) {
                return {
                    isValid: false,
                    errorMessage:  'Please, enter contact and date'
                }
            }
            else {
                return {
                    isValid: false,
                    errorMessage:  'Please, enter contact'
                }
            } 
        }
        return {
            isValid: false,
            errorMessage:  'Please, enter date'
        }
    }
}