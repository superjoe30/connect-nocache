module.exports = function() {
  return noCache;
};
function noCache(req, res, next) {
  res.setHeader('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', 0);
  next();
}
