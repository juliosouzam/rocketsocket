import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/rocketsocket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
