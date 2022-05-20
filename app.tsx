/** @jsx h */
import { h } from "https://esm.sh/preact@10.5.15";
import {marked} from "https://esm.sh/marked"
import { renderToString } from "https://esm.sh/preact-render-to-string@5.1.19?deps=preact@10.5.15";
import Home from "./index.tsx"
const s = `
h1 {
  border: 2px solid red;
  }  
`
import * as Drash from "https://deno.land/x/drash/mod.ts";

const markdownFile = `
  # Services

  ## Building services

  You can *build* a service like this
`

// TODO :: Import styles/globals.css and public/prism.*
const App = ({props}) => {
  const { module, version } = props
  const title = "Drash Land"
  const moduleAndVersion = `${module}${ version ? " " + version : ""}`
  const url = `https://drash.land/${module}`
  const isIndex = module !== undefined
  return (
    <html>
      <head>
        <title>{title}</title>
        <meta property="og:site_name" content="Drash Land" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={"Drash Land - " + moduleAndVersion}
        />
        <meta
          property="og:description"
          content="Drash Land is a collection of modules for the Deno ecosystem"
        />
        <meta property="og:image" content={"/logo-" + module + ".svg"} />
        <meta name="twitter:card" content="summary_medium_image" />
        <meta name="twitter:domain" content="drash.land" />
        <meta property="twitter:domain" content="drash.land" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:title"
          content={"Drash Land - " + moduleAndVersion}
        />
        <meta name="twitter:image" content={"/logo-" + module + ".svg"} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="600" />
        <meta name="twitter:url" content={url} />
        <meta property="twitter:url" content={url} />
      </head>
      <body>
        <Home />
      </body>
    </html>
  )
}
{/* <style>
          {s}
        </style>
        <p>hello</p>
        <p>{props.module}</p>
        <div dangerouslySetInnerHTML={{__html: marked(markdownFile)}}></div>
        {marked(markdownFile)} */}

class Res extends Drash.Resource {
  paths = ["/.*"]
  public GET(request: Drash.Request, response: Drash.Response) {
    const uri = (new URL(request.url)).pathname
    const uriSplit = uri.split('/').filter(Boolean)
    const module = uriSplit[0]
    const version = uriSplit[1]
    const props = {
      module,version
    }
    console.log(props)
    response.body = renderToString(<App props={props} />)
    response.headers.set('content-type', 'text/html')
    return;
  }
}

const server = new Drash.Server({
  port: 1447,
  hostname: "",
  protocol: "http",
  resources: [Res]
})

server.run()