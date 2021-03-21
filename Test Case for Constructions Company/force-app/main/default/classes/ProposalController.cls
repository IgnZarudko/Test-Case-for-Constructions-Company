public class ProposalController {
    @AuraEnabled() 
    public static Id saveProposal(Id clientContactId, Id agentContactId, Id propertyId, Id opportunityId) {
        Proposal__c proposal = new Proposal__c(Client_Contact__c = clientContactId, 
                                Partner_Agent_Contact__c = agentContactId,
                                Property__c = propertyId,
                                Opportunity__c = opportunityId);

        insert proposal;
        
        return proposal.Id;
    }
}
