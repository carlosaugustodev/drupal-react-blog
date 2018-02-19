export default `
query menuQuery {
  menuByName(name : "landing-pages") {
    links {
      label,
      url {
        alias,
        path
      }
    }
  }
}
`
