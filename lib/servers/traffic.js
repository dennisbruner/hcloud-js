class Traffic {
  constructor (traffic) {
    this.outgoing = traffic.outgoing_traffic
    this.ingoing = traffic.ingoing_traffic
    this.included = traffic.included_traffic
  }

  getPercentage () {
    return parseFloat(this.outgoing + this.ingoing) / parseFloat(this.included)
  }
}

module.exports = Traffic
