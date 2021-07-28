export class Client {
  constructor(apiUrl, apiKey) {
    this.token = apiKey
    this.endpoint = apiUrl
  }
  async graphql(params) {
    const res = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify(params)
    });
    return res
  }
}

export default new Client(process.env.TAKESHAPE_API_URL, process.env.TAKESHAPE_API_KEY)