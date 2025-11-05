# 🔗 Node.js URL Shortener API

A minimalist REST API for shortening long URLs and managing redirection, built with **Node.js** and the **Express** framework.

## Getting Started

To run this project locally, you need Node.js installed.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/nicola-empower/node-url-shortener-api.git](https://github.com/nicola-empower/node-url-shortener-api.git)
    cd node-url-shortener-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    npm start
    ```
    The API will be running on `http://localhost:3000`.

##  API Endpoints

The application has two main endpoints:

### 1. Shorten a URL (`POST /shorten`)

* **Description:** Generates a unique short code for a given long URL and stores it in memory.
* **Method:** `POST`
* **URL:** `http://localhost:3000/shorten`
* **Request Body:** Requires a JSON body containing the URL.

| Key | Type | Description |
| :--- | :--- | :--- |
| `url` | `string` | The full URL you want to shorten (must start with `http` or `https`). |

**Example Request:**
```json
{
    "url": "[https://www.example.com/this-is-a-very-long-url-that-we-want-to-shrink](https://www.example.com/this-is-a-very-long-url-that-we-want-to-shrink)"
}
