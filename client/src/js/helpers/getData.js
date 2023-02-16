export const getData = async (url, token) => {
  const resp = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'X-TOKEN': token },
  })

  const data = await resp.json()
  return data.data
}
