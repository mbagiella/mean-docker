var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*if (mongoose.connection.readyState === 0) {
  mongoose.connect(require('./connection-string'));
}*/


var newSchema = new Schema({
  'name': String,
  'photo': String,
  'summary': String,
  'experiences': { 'label': String,
                    'data' : [{'fonction':String,
                                'duration':String,
                                'summary':String,
                                'img':String}]},
  'informatique': { 'label': String,
                    'data' : [String]},
  'langues': { 'label': String,
                    'data' : [{'name':String,
                                'niveau':String,
                                'img':String}]},
  'references': { 'label': String,
                    'data' : [{'name':String,
                                'fonction':String,
                                'company':String,
                                'contact':String}]},
  'formations': { 'label': String,
                    'data' : [{'degree':String,
                                'major':String,
                                'lieu':String}]},
  'hobbies': { 'label': String,
                'data' : [String]},

  'documents': { 'label': String,
                    'data' : [{'na dme':String,
                                'dl':String,
                                'prev':String}]}

});

newSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});



module.exports = mongoose.model('mattia', newSchema,'mattia');
