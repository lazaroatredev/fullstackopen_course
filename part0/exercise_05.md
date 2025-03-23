```mermaid
sequenceDiagram
    participant browser
    participant server

    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document

    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser:  CSS file
    deactivate server

    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: Js file
    deactivate server

    Note right of browser: EL navegador empieza a ejecutar el código Js que trae el JSON del servidor

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [ ... , {
        "content": "Well Hello",
        "date": "2025-03-23T14:00:53.891Z"
    },
    {
        "content": "",
        "date": "2025-03-23T14:01:34.268Z"
    }, ... ]
    deactivate server

    Note right of browser: El navegador ejecuta la callback function que renderiza las notas , incluyendo la nueva.
```