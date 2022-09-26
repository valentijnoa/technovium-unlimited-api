require("../models/db");
const Account = require("../models/Account");

/**
 * /api/account/{id}
 * GET account based on id
 */

exports.getAccount = async (req, res) => {
  let paramID = req.params.id;
  try {
    const account = await Account.findOne({ _id: paramID });
    res.json(account);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
