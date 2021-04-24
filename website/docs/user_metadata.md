---
id: user_metadata
title: User Metadata
---

**1.** 
**Returns the total bramble reals in the wallet.**
---

  To read the total amount of bramble reals in the user's wallet.

* **URL**

    /wallet_brambles_reals

* **Method:**

  `GET`
  
* **Header Params**

    `Authorization='Bearer ' + access_token_received_in_grant_request`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `80.35`

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
        var walletBrambleRealsURL = "http://brambleapi.herokuapp.com/wallet_brambles_reals";
        xhr.open('GET', walletBrambleRealsURL, true);
        xhr.setRequestHeader("Authorization","Bearer "+ "199146e7e010ffa216301333b4c8cc14b9184958");
        xhr.onreadystatechange = function() {

        if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }

        xhr.send();
  ```