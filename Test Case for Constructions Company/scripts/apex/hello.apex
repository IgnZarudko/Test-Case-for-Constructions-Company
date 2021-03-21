// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

string tempvar = 'Enter_your_name_here';
System.debug('Hello World!');
System.debug('My name is ' + tempvar);

insert new List<Property__c> {
    new Property__c(Name = 'property 1', Price__c = 12415.32),
    new Property__c(Name = 'property 2', Price__c = 900.90),
    new Property__c(Name = 'property 3', Price__c = 897.37)
};


insert new Proposal__c(Client_Contact__c = '0035g000002i4duAAA', 
                                Partner_Agent_Contact__c = '0035g000002i4dvAAA',
                                Property__c = 'a005g00002rYehiAAC',
                                Opportunity__c = '0065g000003e7kZAAQ')