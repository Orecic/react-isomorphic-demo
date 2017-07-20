import * as fetch from 'isomorphic-unfetch'

async function get(url) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

async function post(url, body) {
  const res = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include'
  })
  const data = await res.json()
  return  data
}

export {
  get,
  post
}
