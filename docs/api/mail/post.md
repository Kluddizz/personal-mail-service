# Send a mail
Sends a mail to the host mail address and saves it to the database.

**Request:** 
`POST` `/mail`

**Content-Type:**
`application/json`

**Request body:**

| Name | Required | Type |
| :--- | :------- | :--- |
| `email` | `true` | `string` |
| `message` | `true` | `string` |

<details>
  <summary>Example request body</summary>

  ```json
  {
    "email": "my.mail@domain.com",
    "message": "..."
  }
  ```
</details>

## Responses

**Status code:** `200 OK`

<details>
  <summary>Example response</summary>

  ```json
  {
    "status": 200,
    "message": "The mail has been sent successfully"
  }
  ```
</details>

---

**Status code:** `400 Bad Request`

<details>
  <summary>Example response</summary>

  ```json
  {
    "status": 400,
    "message": "An error occured"
  }
  ```
</details>
