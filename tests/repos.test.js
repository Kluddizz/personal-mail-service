const fetch = require("node-fetch");

test("Fetching repositories", async () => {
  expect.assertions(2);

  const request = await fetch("http://localhost:5000/repos", {
    method: "GET",
  });

  const response = await request.json();

  expect(response.status).toBe(200);
  expect(response.repositories).not.toBeUndefined();
});
