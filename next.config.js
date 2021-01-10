module.exports = {
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "Cache-Control",
            value: "max-age=300, s-maxage=1000",
          },
        ],
      },
    ];
  },
};
