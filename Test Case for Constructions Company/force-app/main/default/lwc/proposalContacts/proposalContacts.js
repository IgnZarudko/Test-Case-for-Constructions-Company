import { api, LightningElement, track } from 'lwc';

export default class ProposalContacts extends LightningElement {
    @api clientcontact;
    @api agentcontact;

    handleClientContact(event) {
        this.clientcontact = event.detail.value[0];

        const customEvent = new CustomEvent('changeclient', {
            detail : {
                clientcontact : this.clientcontact
            }
        });

        this.dispatchEvent(customEvent);
    }

    handleAgentContact(event) {
        this.agentcontact = event.detail.value[0];

        const customEvent = new CustomEvent('changeagent', {
            detail : {
                agentcontact : this.agentcontact
            }
        });

        this.dispatchEvent(customEvent);
    }

    handleClick() {
        const event = new CustomEvent('next');

        this.dispatchEvent(event);
    }
}