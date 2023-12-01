module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  {
    name: "strapi::body",
    config: {
      jsonLimit: "5mb", /*  modify JSON body limit */
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
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
            "*.cloudfront.net",
            "*.amazonaws.com",
            "res.cloudinary.com",

          ],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://campa-cola.vercel.app', 'https://hdz0xl9q-1337.inc1.devtunnels.ms/', 'https://hdz0xl9q-1337.inc1.devtunnels.ms/api/layout?populate=deep','http://18.225.31.186'],
      // methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      // headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
];
