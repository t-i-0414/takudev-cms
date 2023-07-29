export default [
  "strapi::errors",
  process.env.NODE_ENV === "production"
    ? {
        name: "strapi::security",
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              "connect-src": ["'self'", "https:"],
              "img-src": [
                "'self'",
                "data:",
                "blob:",
                "market-assets.strapi.io",
                "images.takudev.net",
              ],
              "media-src": [
                "'self'",
                "data:",
                "blob:",
                "market-assets.strapi.io",
                "images.takudev.net",
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      }
    : "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
