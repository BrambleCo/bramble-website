---
id: payments
title: Payments
---
<br/>

**1.** 
**Initial Payment Step**
---

  To start the payment process

* **URL**

    /paylink?amount=1

* **Method:**

  `GET`
  
* **Header Params**

    `Authorization='Bearer ' + access_token`

*  **URL Query Params**

   **Required:**
 
   `amount=[Number] (example: 1.2)`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `https://brambleapi.herokuapp.com/bramblepay?pintent=21312312`

* **Error Response:**

  * **Code:** 401 <br />
    **Content:** <br/>
    ` {
    "statusCode": 401,
    "status": 401,
    "code": 401,
    "message": "Invalid token: access token has expired",
    "name": "invalid_token"
    }`

  * **Code:** 401 <br />
    **Content:** <br/>
    ` {
    "statusCode": 401,
    "status": 401,
    "code": 401,
    "message": "Invalid token: access token is invalid",
    "name": "invalid_token"
   }`

* **Sample Call:**

  ```javascript
        var xhr = new XMLHttpRequest();
        var paylinkURL = "https://brambleapi.herokuapp.com/paylink?amount=1";
        xhr.open('GET', paylinkURL, true);
        xhr.setRequestHeader("Authorization","Bearer "+ "199146e7e010ffa216301333b4c8cc14b9184958");
        xhr.onreadystatechange = function() {

        if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }

        xhr.send();
  ```

<br/>

**2.**
**Opens the Payment Page**
----

  Opens up the Bramble Payment Page. You have to just open the URL recieved in the previous request.

* **URL**

    /bramblepay?pintent=21312312

* **Method:**

  `GET`
  
*  **URL Query Params**

   **Required:**

   `pintent=[String] (example: '21312312')`
    
* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
     `Opens the Bramble Payment Page for the user`
     

* **Error Response:**

    `Will show Bramble API's generic Error Page`

* **Sample Call:**

  ```javascript
  window.open('https://brambleapi.herokuapp.com/bramblepay?pintent=21312312', '_self');
  ```
* **Notes:**
  After successful completion of the payment the user will be redirected back to the game with the payment intent as a url param. Use that payment intent in the next step. Actually you recieve that payment intent in the 1st request as well.

<br/>

**3.** 
**Payment Receipt**
---

  To get the receipt of the payment and also confirm the receival of payment. 

* **URL**

    /payment_received_confirmation

* **Method:**

  `GET`
  
* **Header Params**

    `Authorization='Bearer ' + access_token_received_in_grant_request`

* **Body Params(raw JSON)**

    `{  
      "paymentintent": "607eb2ac1088153ca09ce7b3",      
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `{
      _id: '607eb2ac1088153ca09ce7b3',
      sender_account: 'rahul.soshte47@gmail.com',
      receiver_account: 'mansim',
      amount: 1,
      status: 'closed',
      __v: 0
    }`

* **Error Response:**

  1) `Some error`
  2) `No such txn`

* **Sample Call:**

  ```javascript
        var xhr = new XMLHttpRequest();
        var paymentReceivedConfirmationURL = "https://brambleapi.herokuapp.com/payment_received_confirmation";
        xhr.open('GET', paymentReceivedConfirmationURL, true);
        xhr.setRequestHeader("Authorization","Bearer "+ "199146e7e010ffa216301333b4c8cc14b9184958");
        xhr.setRequestHeader("Content-Type", "application/json"); 
        var data = JSON.stringify({ "paymentintent": "607eb2ac1088153ca09ce7b3"});
        
        xhr.onreadystatechange = function() {

        if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }

        xhr.send(data);
  ```

  ```javascript
      //request module nodejs
      var rData = {
        "paymentintent": "607eb2ac1088153ca09ce7b3"
      }

      var options = {
      url: 'https://brambleapi.herokuapp.com/payment_received_confirmation',
        method: 'GET',
        headers: {
          "Authorization":"Bearer " + "199146e7e010ffa216301333b4c8cc14b9184958"
        },
        body:rData,
        json:true,
      };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
      else{
        console.log(body);
      }
    }

    request(options, callback);
  ```