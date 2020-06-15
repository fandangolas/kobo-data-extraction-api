const app = ({ db, server }) => {
  return {
    start: () => 
      Promise
        .resolve()
        .then(db.configure)
        .then(server.start)
  }
}

module.exports = app;