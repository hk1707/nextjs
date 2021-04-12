module.exports = {
    async rewrites() {
      return [
        {
          source: '/post',
          destination: '/about',
        },
        {
          source: '/about-us',
          destination: '/about',
        },
        // Path Matching - will match `/post/a` but not `/post/a/b`
        {
          source: '/post/:slug',
          destination: '/news/:slug',
        },
        // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
        {
          source: '/blog/:slug*',
          destination: '/news/:slug*',
        },
        // Rewriting to an external URL
        {
          source: '/docs/:slug',
          destination: 'http://example.com/docs/:slug',
        },
      ]
    },
  }
  module.exports = {
    env: {
      customKey: 'my-value',
    },
  }

  module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
    },
  }

  module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
  }