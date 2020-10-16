const {Response} = require('@remix-run/loader')

module.exports = async () => {
  let res, data, error
  try {
    res = await fetch(
      'https://raw.githubusercontent.com/kentcdodds/kifs/main/kifs.json',
    )
    data = await res.json()
  } catch (e) {
    error = e
  }
  return new Response(JSON.stringify({data, error}), {
    headers: {
      'content-type': 'application/json',
      'cache-control': res?.headers.get('cache-control'),
    },
  })
}
