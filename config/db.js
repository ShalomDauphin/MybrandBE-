// const { default: mongoose } = require('mongoose');

// mongoose.set('strictQuery', true);

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//     console.log(
//       `Mongo DB Connected ${conn.connection.host}`.green.underline.bold
//     );
//   } catch (err) {
//     console.error(err.message);

//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const { default: mongoose } = require('mongoose');
const colors = require('colors');
mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo DB Connected ${conn.connection.host}`.bold.blue);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
