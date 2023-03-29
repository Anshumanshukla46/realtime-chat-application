# Real time chat application
This is app made with `socket.io` which is used popularly to make web applications.

Actully as browser(client) and server are connected in uni-directional n/w.
But it run only when browser(client) do some request then only server response to it.

But if we want that whenever server update then it should also respond `automatically` and browser(client) should get that response without any refreshing.

So this is not possible in http request which generally is get/post only.

But this could be done using long polling but due to Advanced Functionality of  WebSockets which provide full-duplex communication channels that to achieve 
real-time data transfer and low latency `AND` Long polling is sometimes considered only a `half-real-time solution` and 
also `not ideal for high-traffic scenarios` or use cases that require real-time updates.

So here, we have two thing 
1. ws (web socket protocol) 
2. wss(web socket secure protocol)

while `wss` connects on https only and `ws` connects on http.

So, we will be using `SOCKET.IO` which is two-way connection protocol. 
Using this we can do something on the occurance of some event like as new user comes show their name and many things.


# Implementation
we will be using two different servers
1. one for client
2. other for server

Also this application store old chats (used local storage to do that)

Doing the frontend `REACT.JS` in client
while server `backend` installed `socket.io express`

## Run the project by following instruction

1) clone this repo
2) open server folder and use `nodemon app.js` to connnect to the server
3) then open client folder and `npm start` for running frontend and use same localhost in new browser window

# ENJOY THE APPLICATION ☺


https://user-images.githubusercontent.com/88917068/228628370-c21138f6-28b1-498b-858f-e119b9b3df6b.mp4

Learning how to depoly 😞
