import { get, post } from './http'

export async function getList () {
  return await get('https://api.tvmaze.com/shows/1234')
}

export async function postData () {
  return post('https://api.tvmaze.com/shows/1234', {"key": "66c36ac69805b4556460e9bdc5ae8f4d"});
}
