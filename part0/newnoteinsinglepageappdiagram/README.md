```https://studies.cs.helsinki.fi/exampleapp/spa new note
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The browser executes the callback function that renders the notes including the new note

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with user input
    activate server
    server->>browser: success message
    deactivate server
```