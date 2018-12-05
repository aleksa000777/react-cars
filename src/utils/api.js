export default class API {
  constructor({ url, fetch = null }) {
    if (!url) throw new Error("Missing option, url");

    this.url = url;
    this.fetch = fetch || window.fetch.bind(window);

    if (!this.fetch) throw new Error("Unable to find fetch");

    this.fetchRecord = this.fetchRecord.bind(this);
  }

  fetchRecord() {
    return new Promise((resolve, reject) => {
      this.fetch(`${this.url}?page=1`, {})
        .then(res => res.json())
        .then(res => resolve({ data: res.data }))
        .catch(error => reject(new Error(error)));
    });
  }
}
