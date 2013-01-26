$(document).ready(function() {
  Pouch('idb://pouchdb_local', function(err, pouchdb) {
    pouchdb.changes({include_docs: true, continuous: true, onChange: function(change) {
      if (change.doc.type == 'item') {
        $('#items').append('<li>' + change.doc.name + '</li>');
      }
    }});
    $('#add_form').submit(function() {
      var doc = {type: 'item', name: $('#input_name').val()};
      pouchdb.post(doc);
      $('#input_name').val('');
      return false;
    });
    pouchdb.replicate.to('http://localhost:5984/pouchdb_test', {continuous: true});
    pouchdb.replicate.from('http://localhost:5984/pouchdb_test', {continuous: true});
  });
  $('#input_name').focus();
});
