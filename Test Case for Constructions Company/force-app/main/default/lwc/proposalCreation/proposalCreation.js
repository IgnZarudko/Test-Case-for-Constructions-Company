import { LightningElement, api, track } from 'lwc';
import saveProposal from '@salesforce/apex/ProposalController.saveProposal';

export default class ProposalCreation extends LightningElement {
    @api recordId;
    @track isContactInputActive = true;
    @track clientContact;
    @track agentContact;
    @track propertyId;

    handleChangeClient(event) {
        this.clientContact = event.detail.clientcontact;
    }

    handleChangeAgent(event) {
        this.agentContact = event.detail.agentcontact;
    }

    handleNext() {
        this.isContactInputActive = false;
    }

    handlePropertyChange(event) {
        this.propertyId = event.detail.propertyId;
    }

    handleBack() {
        this.isContactInputActive = true;
    }

    handleSave() {
        saveProposal({
            clientContactId : this.clientContact,
            agentContactId : this.agentContact,
            propertyId : this.propertyId,
            opportunityId : this.recordId
        })
        .then(result => {
            console.log(JSON.stringify(result));
            console.log("saved successfully");
            
            const closeQA = new CustomEvent('close');
            this.dispatchEvent(closeQA);
        })
        .catch(error => {
            console.log(error);
        })
    }
}