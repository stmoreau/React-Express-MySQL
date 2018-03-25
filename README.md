# React-Express-MySQL

This is a fully working React Web App with the following characteristics:

* Based on [create-react-app](https://github.com/facebookincubator/create-react-app)
* Node/Express backend
* MySQL connection
* [Redux](https://redux.js.org) pattern for handling application-state
* [ReactRouter](https://github.com/ReactTraining/react-router) for handling routes
* [Reactstrap](https://reactstrap.github.io) for UI
* [Redux-Saga](https://github.com/redux-saga/redux-saga) for asynchronous tasks

## Getting this App up and running

1. Clone this repository:

2. Set up testing database

In the terminal log in as root and used the sample.sql file included in this repo

```
mysql -u root
mysql> source sample.sql;
```

At this point you can test the actual connection to the database.

```
mysql> use books;
mysql> show tables;
```

You should get:

```
+-----------------+
| Tables_in_books |
+-----------------+
| authors         |
+-----------------+
1 row in set (0.00 sec)
```

3. Install server and client packages

```
cd YOUR_PATH/MyWebApp
npm install
cd client
npm install
```

4. Start both server and client

```
cd YOUR_PATH/MyWebApp
npm start
```

The last lines of the output should be

```
Starting the development server...

Compiled successfully!

The app is running at:

  http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

You can now point your browser to http://localhost:3000/!

### Set up the SERVER

* MyWebApp/server.js

The file is an example of what it may look like for a server that:
_ Serves at port 3001
_ Uses static index.html when in production mode
_ Connects to a MySQL pool (pools allow handles reconnecting)
_ Has a server-api that the client side can talk to

* MyWebApp/package.json

Contents where borrowed and slightly modified from [this file](https://github.com/fullstackreact/food-lookup-demo/blob/master/package.json).

* MyWebApp/start-client.js

Contents where borrowed from [this file](https://github.com/fullstackreact/food-lookup-demo/blob/master/start-client.js)

### Test the SERVER

* Minimal testing

Within the top directory

```
npm install -s
npm run server
```

At this point you should see:

```
NODE_ENV:  undefined
Find the server at: http://localhost:3001/
```

* Testing the database

In the terminal log in as root and used the sample.sql file included in this repo

```
mysql -u root
mysql> source sample.sql
```

At this point you can test the actual connection to the database.

Start your server again:

```
npm run server
```

Then, submit a query to your db - from another terminal window:

```
curl localhost:3001/api/books?firstName=William | jq '.'
```

You should see

```
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    71  100    71    0     0   2257      0 --:--:-- --:--:-- --:--:--  2290
[
  {
    "last_name": "Shakespeare",
    "first_name": "William",
    "middle_name": null
  }
]
```

### Set up the CLIENT

That's what we use create-react-app for:

```
create-react-app client
```

#### Test the CLIENT (bare-bones):

```
cd client
npm start
```

### Connect CLIENT and SERVER

The server is ready to receive queries but at this moment, there are no requests sent from the client.
To do so, we create a client interface

    * client/Client.js

The main function in this file doing the query is

```
    function search(query) {
      return fetch(`http://localhost:3001/api/books?firstName=${query}`, {
        accept: 'application/json',
      }).then(checkStatus)
        .then(parseJSON);
      }
```
