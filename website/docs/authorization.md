---
id: authorization
title: Authorization
---

**1.**
**User clicks the Bramble Authorize Button**
----
  Opens up the Bramble Authorization Page. The user puts in his username and password and then is redirected back to the game. 

* **URL**

    /bramble?response_type=code&client_id=client_id&redirect_uri=callback_url&state=teststate&scope=profile

* **Method:**

  `GET`
  
*  **URL Query Params**

   **Required:**
 
   `response_type='code' (example: 'code')`
  
   `client_id=[String] (example: 'mansim')`
    
   `redirect_uri=[String] (example: 'http://armygrid.com/callback/')`
    
   `state=[String] (example: 'teststate')`
    
   `scope=[String] (example: 'profile')`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
     `Opens the Bramble Authorization Page for the user`

* **Error Response:**

  * **Code:** 400 <br />
    **Content:** <br />
    `{
    "statusCode": 400,
    "status": 400,
    "code": 400,
    "message": "Invalid client: redirect_uri does not match client value",
    "name": "invalid_client"
   }`

  * **Code:** 400 <br />
    **Content:** <br />
    `{
    "statusCode": 400,
    "status": 400,
    "code": 400,
    "message": "Invalid client: missing client grants",
    "name": "invalid_client"
    }`

  * **Code:** 400 <br />
    **Content:** <br />
    `{
    "statusCode": 400,
    "status": 400,
    "code": 400,
    "message": "Unsupported response type: response_type is not supported",
    "name": "unsupported_response_type"
    }`


* **Sample Call:**

  ```javascript
  window.open('https://brambleapi.herokuapp.com/bramble?response_type=code&client_id=mansim&redirect_uri=http://armygrid.com/callback/&state=teststate&scope=profile', '_self');
  ```
* **Notes:**

  The user will be redirected after the authorization step to the callback url of the game. The authorization code will be attached to the callback url ( Example: http://armygrid.com/callback/authorization_code ). Extract the authorization_code value and use it in the next request.
<br/>

**2.**
**Authorization Grant Request**
----
 The access Token which will help you to send reward data to Bramble API is received in this request.

* **URL**

  /grant

* **Method:**

  `POST`

* **Header Params**
  
  **Required:**

  `Authorization='Basic ' + btoa('client_id:client_secret_id)'`

* **Body Params(raw JSON):**

    `{
     "grant_type":"authorization_code",
     "code":"authorization_code_recieved_in_the_previous request",
     "redirect_uri":"armygrid.com/bramble_callback/"
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
      `{
        "accessToken": "199146e7e010ffa216301333b4c8cc14b9184958",
        "accessTokenExpiresAt": "2020-03-24T13:34:07.337Z",
        "scope": "profile",
        "refreshToken": "1dcabd1c75520b4b8567517fc8cd0a8e218865b2",
        "refreshTokenExpiresAt": "2020-04-24T21:21:56.017Z"
       }`

* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `
    {
    "statusCode": 400,
    "status": 400,
    "code": 400,
    "message": "Invalid grant: authorization code has expired",
    "name": "invalid_grant"
    }`

* **Sample Call:**

  ```javascript
    //JS
        var xhr = new XMLHttpRequest();
        authURL = "https://brambleapi.herokuapp.com/grant";
        xhr.open('POST',authURL, true);
        xhr.setRequestHeader("Authorization","Basic "+ btoa("mansim:armygrid"));
        xhr.setRequestHeader("Content-Type", "application/json"); 
        var data = JSON.stringify({ "grant_type": "authorization_code", "code": "335c162ae937c0ece349fdea6d57ec0e8160100d", "redirect_uri":"armygrid.com/bramble_callback/" });

        xhr.onreadystatechange = function() {

        if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }
        xhr.send(data);
  ```

  ```javascript
  // Request module Nodejs 
  var postData = {
    "grant_type": 'authorization_code',
    "code":"335c162ae937c0ece349fdea6d57ec0e8160100d",
    "redirect_uri": 'http://armygrid.com/bramble_callback/'
  }

  var options = {
    url: 'https://brambleapi.herokuapp.com/grant',
    method: 'POST',
    headers: {
    "Authorization":"Basic " + btoa("mansim:armygrid")
    },
    body:postData,
    json:true
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body.accessToken);
      console.log(body.refreshToken)
    }
    else{
      console.log(body);
    }
  }

  request(options, callback);
  ```

* **Notes:**

  You will get two tokens. Refresh Token and Access Token. Refresh Token is the one which doesn't expire frequently but Access token expire frequently. This Access Token will help you in sending the Achievement Data to the Bramble API as seen in the next request.

<br/>

**3.** 
**Renewing Access Token / Refresh Token to get back access to the Bramble API**
---

Sometimes the Access Token / Refresh Token will expire you will renew them again by this request 

* **URL**

    /renew

* **Method:**

  `POST`
  
* **Header Params**

    `Authorization='Basic ' + btoa('client_id:client_secret_id)'`

*  **URL Query Params**

   **Recommended:**

   `type=[String] (example: 'access')`

   It will renew only the access token, if set, if not then it will renew both refresh token and access token.

* **Body Params(raw JSON)**
    `{  
      "grant_type": "refresh_token",
      "refresh_token": "a6332349d0eb240b26f03a53ec12ad12d53ab90b"
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    `{
        "access_token": "199146e7e010ffa216301333b4c8cc14b9184958",
        "accessTokenExpiresAt": "2020-03-24T13:34:07.337Z",
        "scope": "profile",
        "refreshToken": "1dcabd1c75520b4b8567517fc8cd0a8e218865b2",
        "refreshTokenExpiresAt": "2020-04-24T21:21:56.017Z"
    }`

* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    `{
    "statusCode": 400,
    "status": 400,
    "code": 400,
    "message": "Invalid grant: refresh token is invalid",
    "name": "invalid_grant"
    }`

  * **Code:** 400 <br />
    **Content:** 
    `{
    "statusCode": 400,
    "status": 400,
    "code": 400,
    "message": "Invalid client: cannot retrieve client credentials",
    "name": "invalid_client"
    }`

  * **Code:** 401 <br />
    **Content:** <br/>
    ` {
    "statusCode": 401,
    "status": 401,
    "code": 401,
    "message": "Invalid token: refresh token has expired",
    "name": "invalid_token"
    }`


* **Sample Call:**

  ```javascript
      //js
        var xhr = new XMLHttpRequest();
        var renewTokenURL = "http://brambleapi.herokuapp.com/renew";
        xhr.open('POST',renewTokenURL, true);
        xhr.setRequestHeader("Authorization","Basic "+ btoa("mansim:armygrid"));
        xhr.setRequestHeader("Content-Type", "application/json"); 
        var data = JSON.stringify({ "grant_type": "refresh_token","refresh_token": "5ce62efd36a7396abe79e8324bb65f5e33804859"});
        xhr.onreadystatechange = function() {

        if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }

        xhr.send(data);        
  ```

  ```javascript
      //request module nodejs
      var postData = {  
      "grant_type": "refresh_token",
      "refresh_token": "a6332349d0eb240b26f03a53ec12ad12d53ab90b"
      }

    var options = {
      url: 'http://brambleapi.herokuapp.com/grant',
      method: 'POST',
      headers: {
      "Authorization":"Basic " + btoa("mansim:armygrid")
      },
      body:postData,
      json:true
    };

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body.accessToken);
        console.log(body.refreshToken)
      }
      else{
        console.log(body);
      }
    }

    request(options, callback);
  ```
* **Notes:**

  Using the old refresh Token you can regenerate new Refresh Token and new Access Token again. Refresh Token as it is called is used to refresh or renew tokens.