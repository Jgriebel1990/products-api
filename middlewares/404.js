module.exports = function notFoundHandler(req, res, next) {
  res
    .status(404)
    .send("Lions, tigers, and bears! oh my! Nothing to see hererererer");
};
