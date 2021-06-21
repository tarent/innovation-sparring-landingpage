module.exports = {
  target: "serverless",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sparring',
        permanent: false
      }
    ]
  }
}
