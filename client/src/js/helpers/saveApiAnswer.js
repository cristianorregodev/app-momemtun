export const saveApiAnswer = async (url, token, body) => {
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-TOKEN': token },
    body: JSON.stringify(body),
  })

  const data = await resp.json()
  return console.log(data)
}
