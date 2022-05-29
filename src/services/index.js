export default class ShopService {
  _apiBase = 'http://localhost:7070';

  async getProducts() {
    const res = await fetch(`http://localhost:7070/api/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    if(!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }
    return await res.json();
  }


}
