import fetch from 'node-fetch'
import writeJson from 'write-json'

import API from './src/utils/api'


const api = new API({
  url: "https://private-4e19e-interviewapi3.apiary-mock.com/vehicles",
  fetch
})

const path = 'src/data/'
api
  .fetchRecord()
  .then(data => {
    const files = []
    for (let key in data) {
      files.push(writeJson(path + key +'.json', data[key]))
    }

    return Promise.all(files)
  }).catch(console.error)
