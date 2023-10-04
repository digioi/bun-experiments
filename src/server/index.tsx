import { Elysia } from "elysia";
import Html from "@kitajs/html";
import { RootHTML } from "./pages/_app";
import { counter } from "./state";

new Elysia()
  .get("/", () => new Response(<RootHTML />, {
    headers: {
      "Content-Type": "text/html",
      "Content-Encoding": "utf-8"
    }
  }))
  .get("/javascript/*", async (params) => {
    const file = await Bun.file("./public/javascript/" + params.params["*"]);

    const gzip = Bun.gzipSync(new Uint8Array(await file.arrayBuffer()));
    return new Response(gzip, {
      headers: {
        "Content-Type": "application/javascript",
        "Content-Encoding": "gzip"
      }
    })
  })
  .post("/clicked", () => new Response(<div>
    <h1>Clicked! {counter}</h1>
    <button hx-post="/clicked" hx-swap="outerHTML" hx-target="closest div">
      Click Me {counter++}
    </button>
  </div>))
  .get("/update-custom-component", () => new Response(<app-viewport name="HTMX!" />))
  .listen(3000)

