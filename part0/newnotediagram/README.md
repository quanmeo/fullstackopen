```https://studies.cs.helsinki.fi/exampleapp/notes
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note with user input text
    activate server
    server->>browser: HTTP status code 302
    deactive server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server->>browser: css file
    deactive server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server->>browser: JS file
    deactivate server

    Note right of browser: The browser starts executing the JS code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server->>browser: JSON file [{"content": "from kerala, india with ❤️", "date" : "2024-02-21T18:30:22.893Z"}, ...]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```