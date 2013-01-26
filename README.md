# (extremely simple) Sample application with [PouchDB](http://pouchdb.com/)

* Start CouchDB
* Create the database and upload the files to it (we need to serve the app from CouchDB because of cross origin policies; there are other ways to work around this but I think this is the easiest). I created a script to do this (sorry, it's in Ruby ;)), run it with `bundle install && bundle exec ruby setup.rb`
* Load the [app](http://localhost:5984/pouchdb_test/app/index.html) in a couple of different browsers (e.g. Firefox & Chrome)
* Play adding items, they get instantly replicated, first to the CouchDB server, then to the other browser
* Stop CouchDB server to simulate some offline time, and keep on adding items (they don't replicate of course)
* Start the CouchDB server again, now data gets replicated :) You might need to reload the pages :(
