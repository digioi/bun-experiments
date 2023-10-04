import Html from "@kitajs/html";
import { counter } from "../state";

export const RootHTML = () => <html lang="en">
  <head>
    <title>Hello World</title>
    <script src="https://unpkg.com/htmx.org@1.9.6"></script>
    <script src="/javascript/index.js" type="module"></script>
    <style>{`
      body {
        margin: 0;
      }
    `}</style>
  </head>
  <body>
    {/* @ts-ignore */}
    <app-viewport name="jim" hx-get="/update-custom-component" hx-swap="outerHTML" />
    <div>
      <button hx-post="/clicked" hx-swap="outerHTML" hx-target="closest div">
        Click Me {counter}
      </button>
    </div>
  </body>
</html>;
