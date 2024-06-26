export const maintenanceHTML = `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reihane B. • Maintenance</title>
    <style>
    @keyframes flickerAnimation {
        0% {
          opacity: 1;
        }
        10% {
          opacity: 0.3;
        }
        20% {
          opacity: 1;
        }
        30% {
          opacity: 0.5;
        }
        40% {
          opacity: 0.5;
        }
        50% {
          opacity: 1;
        }
        60% {
          opacity: 0.9;
        }
        70% {
          opacity: 0.2;
        }
        80% {
          opacity: 1;
        }
        90% {
          opacity: 0.7;
        }
        100% {
          opacity: 1;
        }
      }
      body {
        display: flex; 
        justify-content: center; 
        align-items: center; 
        height: 100vh;
        margin: 0;
       }

       h1 {
        font-family: monospace;
        font-weight: 500;
        font-size: 18px;
        text-shadow: 0px 0px 8px rgba(182, 150, 112, 0.5);
        text-align: center;
        animation: flickerAnimation 5s infinite;
       }
    </style>
  </head>
  <body>
    <h1>Maintenance en cours</h1>
  </body>
  </html>
`;
