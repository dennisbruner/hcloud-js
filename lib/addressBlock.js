const Address = require('./address')

class AddressBlock {
  constructor (ip, pointer, blocked, setPointerFunc) {
    this.ip = ip
    this.pointer = pointer
    this.blocked = blocked
    this.setPointerFunc = setPointerFunc

    this.addresses = this.pointer.map(ptr => {
      return new Address(ptr['ip'], ptr['dns_ptr'], this.blocked, this.setPointerFunc)
    })
  }

  getAddress (ip) {
    for (let i = 0; i < this.addresses.length; i++) {
      let address = this.addresses[i]
      if (address.ip === ip) {
        return address
      }
    }

    return null
  }

  getPointer (ip) {
    for (let i = 0; i < this.addresses.length; i++) {
      let address = this.addresses[i]
      if (address.ip === ip) {
        return address.pointer
      }
    }

    return null
  }

  setPointer (ip, pointer) {
    let address = this.getAddress(ip)
    if (address) {
      return address.setPointer(pointer)
    }

    return this.setPointerFunc(ip, pointer)
      .then(response => {
        address = new Address(ip, pointer, this.blocked, this.setPointerFunc)
        this.addresses.push(address)
        return response
      })
  }
}

module.exports = AddressBlock
