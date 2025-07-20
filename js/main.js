// Thanks to https://formito.com/tools/favicon
const faviconHref = emoji =>
  `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2280%22>${emoji}</text></svg>`

  const changeFavicon = emoji => {
  // Ensure we have access to the document, i.e. we are in the browser.
  if (typeof window === 'undefined') return

  const link =
    window.document.querySelector("link[rel*='icon']") ||
    window.document.createElement("link")
  link.type = "image/svg+xml"
  link.rel = "shortcut icon"
  link.href = faviconHref(emoji)

  window.document.getElementsByTagName("head")[0].appendChild(link)
}

