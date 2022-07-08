const yaml = require('js-yaml');

// https://docs.hetzner.cloud/#server-metadata
class ServerMetadata {
  constructor(client) {
    this.client = client
    this._baseUrl = "http://169.254.169.254/hetzner/v1/metadata"
  }

  async _get(part) {
    let result = await this.client.axios.get(`${this._baseUrl}/${part}`)
    if ("data" in result)
      return result["data"]

    return null
  }

  async getHostname() {
    return await this._get("hostname");
  }

  async getInstanceId() {
    return await this._get("instance-id");
  }

  async getPrivateNetworks() {
     let private_networks_yaml = await this._get("private-networks");
     return yaml.load(private_networks_yaml)
  }

  async getPublicIpv4() {
    return await this._get("public-ipv4");
  }
}

module.exports = ServerMetadata