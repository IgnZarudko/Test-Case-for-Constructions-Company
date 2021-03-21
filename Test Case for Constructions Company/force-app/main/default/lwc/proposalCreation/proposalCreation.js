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
        console.log(this.clientContact);
    }

    handleChangeAgent(event) {
        this.agentContact = event.detail.agentcontact;
        console.log(this.agentContact);
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
        console.log("saving: ");
        console.log("client contact Id: " + this.clientContact);
        console.log("agent contact Id: " + this.agentContact);
        console.log("property Id: " + this.propertyId);
        console.log("opportunity Id: " + this.recordId);

        saveProposal({
            clientContactId : this.clientContact,
            agentContactId : this.agentContact,
            propertyId : this.propertyId,
            opportunityId : this.recordId
        })
        .then(result => {
            console.log(JSON.stringify(result));
            console.log("saved successfully");
        })
        .catch(error => {
            console.log(error);
        })
    }
}