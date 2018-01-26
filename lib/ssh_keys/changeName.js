module.exports = function (id, name) {
  return this.axios({
    url: '/ssh_keys/' + id,
    method: 'PUT',
    data: {
      name
    }
  }).then(response => {
    return response.data
  })
}
