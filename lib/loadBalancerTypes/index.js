const snakeCase = require('snake-case')
const LoadBalancerType = require('./loadBalancerType')
const LoadBalancerTypeList = require('./loadBalancerTypeList')

class LoadBalancerTypesEndpoint {
    constructor (client) {
        this.client = client
    }

    async list (params) {
        const snakeCaseParams = {}
        if (params) {
            Object.keys(params).forEach(key => {
                snakeCaseParams[snakeCase(key)] = params[key]
            })
        }

        const response = await this.client.axios({
            url: '/load_balancer_types',
            method: 'GET',
            params: snakeCaseParams
        })

        // Make new ServerType objects
        const loadBalancerTypes = []
        response.data.load_balancer_types.forEach(loadBalancerType => loadBalancerTypes.push(new LoadBalancerType(loadBalancerType)))

        // Return a list
        const meta = response.data.meta
        return new LoadBalancerTypeList(this, params, meta, loadBalancerTypes)
    }

    async get (id) {
        const response = await this.client.axios({
            url: '/load_balancer_types/' + id,
            method: 'GET'
        })

        // Return new ServerType instance
        return new LoadBalancerType(response.data.load_balancer_type)
    }
}

module.exports = LoadBalancerTypesEndpoint