import { LightningElement, api, track } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class FlowSelectVisitedProperties extends LightningElement {
    @api columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Price', fieldName: 'Price__c'}
    ];

    @track _properties = [];
    @track _selectedProperties = [];

    @api
    get properties() {
        return this._properties;
    }
 
    set properties(val) {
        this._properties = val;
    }

    @api
    get selectedProperties() {
        return this._selectedProperties;
    }
 
    set selectedProperties(val) {
        this._selectedProperties = val;
    }

    handleRowSelection(event) {
        this._selectedProperties = event.detail.selectedRows;

        console.log(JSON.stringify(this._selectedProperties));

        const attributeChangeEvent = new FlowAttributeChangeEvent('selectedProperties', this._selectedProperties);
        this.dispatchEvent(attributeChangeEvent);
    }

    @api
    validate() {
        if(this.selectedProperties.length > 0) {
            return { isValid: true };
        } 
        return {
                isValid: false,
                errorMessage:  'Please, select at least 1 property'
            }
        }
}