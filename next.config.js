module.exports = {
  target: "serverless",
  // please add new redirects to netlify.toml as well in order to support it in production
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
