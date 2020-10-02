const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const repos = [
    {
      name: "dash-design",
      url: "https://github.com/Kluddizz/dash-design",
      tags: [],
    },
    {
      name: "movement-detection",
      url: "https://github.com/Kluddizz/movement-detection",
      tags: [],
    },
    {
      name: "elmgorithm",
      url: "https://github.com/Kluddizz/elmgorithm",
      tags: [],
    },
    {
      name: "threejs-objects",
      url: "https://github.com/Kluddizz/threejs-objects",
      tags: [],
    },
    {
      name: "personal-website",
      url: "https://github.com/Kluddizz/personal-website",
      tags: [],
    },
  ];

  res.status(200).json({
    status: 200,
    repositories: repos,
  });
});

module.exports = router;
