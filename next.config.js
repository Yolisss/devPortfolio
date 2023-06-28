module.exports = {
  images: {
    // https://nextjs.org/docs/messages/next-image-unconfigured-host
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.it",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
