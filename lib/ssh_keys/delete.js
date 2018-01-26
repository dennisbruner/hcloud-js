module.exports = function (id) {
  return this.axios({
    url: '/ssh_keys/' + id,
    method: 'DELETE'
  }).then(() => null)
}
