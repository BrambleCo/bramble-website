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


**2.**
**Getting status of achievements**
----

Request which will send back a json which contains the status of the all achievements.

* **URL**

    /achievement/get_achievements_status

* **Method:**

  `GET`
  
* **Header Params**

      `Authorization='Bearer ' + access_token_received_in_grant_request`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{{
              "name": "level_up_5",
            "achievement_status_of_the_user": {
            "reward_given_in_reals": 1,
            }
        },
        {
            "name": "level_up_6",
        }
    }`

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
        var statusURL = "http://brambleapi.herokuapp.com/achievement/get_achievements_status";
        xhr.open('GET',statusURL, true);
        xhr.setRequestHeader("Authorization","Bearer "+ "199146e7e010ffa216301333b4c8cc14b9184958");
        xhr.onreadystatechange = function() {

        if (xhr.readyState == XMLHttpRequest.DONE) {
                alert(xhr.responseText);
            }
        }

        xhr.send();
  ```

* **Notes:**

  If the field `achievement_status_of_the_user` is not existent, then the achievement remains to be completed / rewarded.