var userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: { type: String, trim: true }
  },
  age: { type: Number, min: 0 }
});

var PUser = mongoose.model('PowerUsers', userSchema);
...
// Creating one user.
var sampleData = new PUser ({
  name: { first: 'John', last: '  Doe   ' },
  age: 25
});

// Saving it to the database.
sampleData.save(function (err) {if (err) console.log ('Error on save!')});