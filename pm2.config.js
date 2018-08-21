module.exports = {
    apps : [
      {
        "name": "nuxt-koa",
        "script" : "server/index.js",
        "exec_interpreter": "babel-node",
        "exec_mode": "fork_mode",
        "env": {
          "NODE_ENV": "development",
        },
        "env_production": {
          "NODE_ENV": "production"
        },
      }
    ]
  }