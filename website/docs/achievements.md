---
id: achievements
title: Achievements
---
**1.** 
**Simple Achievement Data GET Request**
----

Request which will send Achievements data of the user to Bramble API. So if a user has completed a particular achievment the game can send data to Bramble API with this request.

* **URL**

    /achievement/armygrid/:achievement_name

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**

      `achievement_name=[String] (example: 'sample_achievement_2')`  

* **Header Params**

      `Authorization='Bearer ' + access_token_received_in_grant_request`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `Added Achievement Successfully`

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

  * **Code:** 500 <br />
    **Content:** <br/>
    `Achievement Already Added`

  * **Code:** 501 <br />
    **Content:** <br/>
    `No such achievement`


* **Sample Call:**

  ```javascript
        var xhr = new XMLHttpRequest();
        var achievementURL = "http://brambleapi.herokuapp.com/achievement/armygrid/sample_achievement_2";
        xhr.open('GET',achievementURL, true);
        xhr.setRequestHeader("Authorization","Bearer "+ "199146e7e010ffa216301333b4c8cc14b9184958");
        xhr.onreadystatechange = function() {

        if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }

        xhr.send();
  ```




* **Notes:**

  After the achievements are sent to the Bramble API. The Bramble API rewards the user Brambles and the reward is reflected in the Bramble Wallet of the User.