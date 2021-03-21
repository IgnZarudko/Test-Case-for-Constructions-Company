public with sharing class PropertyController {

    @AuraEnabled(cacheable=true)
    public static List<Property__c> getProperties() {
        List<Property__c> properties = [SELECT Id, Name, Price__c FROM Property__c];
        return properties;
    }
}
