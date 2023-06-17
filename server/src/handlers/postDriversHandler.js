// const { Driver } = require("../db");
// const {} = require("../controllers/postDriversController");
// const postDriversController = require("../controllers/postDriversController");

// //!4
// const postDriversHandler = async (req, res) => {
//   const { id, forename, surname, description, image, nationality, dob } =
//     req.body;
//   try {
//     const response = await postDriversController(
//       id,
//       forename,
//       surname,
//       description,
//       image,
//       nationality,
//       dob
//     );

//     res.status(201).json(response);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = postDriversHandler;
