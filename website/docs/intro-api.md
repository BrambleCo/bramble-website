---
id: intro-api
title: Introduction
---

### How Bramble API works?

A player scores a reward, in background he redeems the brambles. If in game server he gets a daily quest completion / achievement completion, it will report this information to his bramble wallet via the game server. So he will not need to redeem every bramble, he will get that automatically once he links the bramble wallet to in-game account. So the game would just make push notifications to the wallet and not request any info. If he wants to see the wallet, he would need to login manually or from in-game link to bramble wallet. After a quest completion the game will send something as simple as 

````
{ user: 'user_id', reward: 'crossing_100_pipes'} 
````

and then the Bramble API will manage the data. If there are too easy and frequent gained rewards then the algorithm would decrease the reward. If the reward would be gained very rare, the algorithm would increase its value. The wallet will be linked to the game via Oauth 2.0 authorization. User would click on the in-game link to Bramble Wallet. 

To Link Bramble Wallet with the particular games it is done using something like this
````
for example: bramblewallet.com/link_account/flappybird?user=user_id&token=some_random_token
````

Bramble API will generate some wallet token and send to game developer's backend to
````
flappybird.com/bramble_link?user=user_id&token=some_random_token&wallet_token=your_wallet_token
````

So the next time when user gets reward, the game will just send the wallet_token and the reward info.

So this would be an easy integration from the developer's side. The game developer doesn't need any information of the user's wallet, just will export data to the server on every achievement user gets and the game will have just a link to Bramble wallet. If user has linked, there will be a login link to the website. If user has not yet linked the account, on the first time the account will be linked, transfered all yet gained old rewards. This flow will work for In-App purchases too where the game's native currency is replaced by Bramble.

If a user wants to buy in-game items using Bramble he is able to do it.