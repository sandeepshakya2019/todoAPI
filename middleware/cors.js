function enableCor(req, res, next) {
  res.setHeader("Access-Control-Allow-Orgin", "ypur-page.com or *");
  res.setHeader("Access-Control-Allow-Method", "GET,POST,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
}

module.exports = enableCor;
