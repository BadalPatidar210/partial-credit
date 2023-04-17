# partial-credit

How to run :-
First clone this repo and try to run following commands:
1. yarn (which installs all dependencies)
2. yarn start (to start the express server and connection with database)


DB Creation :-
Crearted two collections, names as customerdetails and transactionlogs.
The first collection contains the details of customers with their total pending amount along with the information of salesRepresentative Person and 
also I have maintained a counter which will tells us that in how many times a customer is paying the amount.
The second collection contains the updated paid amount to be paid with which mode it chooses to pay, along with a status for payment and this thing is 
being mapped with customerdetails.

High Level Design :-

Problem Statement:-
To provide a reconciliation solution to distributors by enabling the salesrep to collect money against pre-populated invoices.These invoices are processed before hand, mapping it to the retailer and the salesrep
Also, the invoices might not be cleared by the retailer in one go, hence the same invoice might be received multiple times. In these cases, salesrep only needs to collect the pending amount on the invoice.

High Level Components:-
Basically, the API's are being created with two routes
1. /customers (this route includes three apis)
  a. AddCustomer
     To add invvoices that will be visible as per my taken salesRepresentative Person whose id is ("SPR1001") and name is ("Badal"). 
  b. GetCustomersList
     To get all the customers who needs to pay their total amount to the saledRepresentaive Person.
  c. GetCustomer
     Whoever is going to pay some amount or the whole amount, that customer details will be requiring.

2. /transactions (this route includes one api)
  a. ConfirmPayment
     This will manage a partial payment or the whole payment of a customer/distributor and also update the total pending amount of the customer. 

Data Model:-
Contains two collection and both of them have one common key which acts as a bridge between them is customerId.
Only constraint in database is that I took hardcore values for salesRepresentativeId and name and stored it in only one collection.

API's :-

1./customer
  a. POST : /api/v1/customer/add
      { 
        "customerName": "Godavari Partners",
        "salesRepresentativeId" :"SPR1001",
        "salesRepresentativeName": "Badal",
        "totalAmount" : 4581,
        "installmentCount": 0
      }
  b  GET: http://d6bjjp-5660.csb.app/api/v1/customer/getCustomers?salesRepresentativeId=SPR1001
  c. GET: http://d6bjjp-5660.csb.app/api/v1/customer/getCustomer?customerId=<customer_id>

2. /transactions
  a. POST: http://d6bjjp-5660.csb.app/api/v1/transaction/pay 
      Request Object :
      {
        "paidAmount" : 20000,
        "customerId": "6T31JZVR4",
        "paymentMode" : "CASH"
      } 


Deployment:-
This repository is being hosted on my local machine, on codesandbox and the url for the live app is "http://d6bjjp-5660.csb.app"
Will soon learn docker and will going to implement that.
AWS account is not being active till now, so not able to use that.



 
