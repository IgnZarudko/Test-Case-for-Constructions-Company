import { api, LightningElement, track } from 'lwc';
import getProperties from '@salesforce/apex/PropertyController.getProperties';


export default class PropertyTable extends LightningElement {
    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Price', fieldName: 'Price__c' }
    ];

    @track properties = [];
    @track error;

    @api selectedpropertyid;

    connectedCallback() {
        getProperties()
        .then(result => {
            this.properties = result;

            if (this.selectedpropertyid != undefined) {
                var table = this.template.querySelector('lightning-datatable');
                table.selectedRows = this.selectedpropertyid;
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleRowSelection(event) {
        var selectedRows = event.detail.selectedRows;

        var table = this.template.querySelector('lightning-datatable');

        if(selectedRows.length > 1)
        {
            table.selectedRows = table.selectedRows.slice(1);
        }

        selectedRows = table.selectedRows;

        this.selectedpropertyid = selectedRows[0];

        const changeEvent = new CustomEvent('change', {
            detail : {
                propertyId : this.selectedpropertyid
            }
        });

        this.dispatchEvent(changeEvent);
    }

    handleBack() {
        const event = new CustomEvent('back');

        this.dispatchEvent(event);
    }

    handleSave() {
        const event = new CustomEvent('save');

        this.dispatchEvent(event);
    }
}