require 'couchrest'
require 'mime/types'

db = CouchRest.database!('http://localhost:5984/pouchdb_test')

app = begin
  db.get('app')
rescue RestClient::ResourceNotFound
  db.save_doc('_id' => 'app')
  retry
end

Dir['**/*.{js,html}'].each do |file|
  content_type = MIME::Types.type_for(file).first
  puts "Uploading #{file} as #{content_type}"
  app.put_attachment file, File.read(file), :content_type => content_type
end

