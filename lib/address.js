class Address {
  constructor (ip, pointer, blocked, setPointerFunc) {
    this.ip = ip
    this.pointer = pointer
    this.blocked = blocked
    this.setPointerFunc = setPointerFunc
  }

  getPointer () {
    return this.pointer
  }

  setPointer (pointer) {
    return this.setPointerFunc(this.ip, pointer)
      .then(response => {
        this.pointer = pointer
        return response
      })
  }
}

module.exports = Address
