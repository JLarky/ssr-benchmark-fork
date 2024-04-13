export async function buildHandler() {
  /** @type {import("./entry-server").handler}*/
  return async function handler(_, res) {
    const r = await fetch("http://localhost:3000/ssr-benchmark");
    res.writeHead(200, { "Content-Type": "text/html" });
    const reader = r.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return res.end();
      } else {
        res.write(value);
      }
    }
  };
}
