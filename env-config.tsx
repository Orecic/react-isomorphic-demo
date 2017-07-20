const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'DOMAIN': prod ? 'https://api.example.com' : 'https://localhost:8080'
}
