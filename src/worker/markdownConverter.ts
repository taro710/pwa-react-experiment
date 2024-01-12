import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

// const worker: Worker = self as any;

self.addEventListener("message", async (event) => {
  const text = event.data;
  const markdownHtml = await marked.parse(text);

  const html = sanitizeHtml(markdownHtml, {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "h1", "h2"],
  });

  self.postMessage({ html });
});

export default {};
