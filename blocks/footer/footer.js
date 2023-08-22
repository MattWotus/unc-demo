import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();

    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    decorateIcons(footer);
    block.append(footer);
  }

  document.querySelector("footer > div > div > div > div > div:nth-child(2) > div:nth-child(1) > ul > li:nth-child(1)").addEventListener("click", function() {
    window.open(
    "https://www.facebook.com/uncchapelhill/",
    "_blank"
    );
  })

  document.querySelector("footer > div > div > div > div > div:nth-child(2) > div:nth-child(1) > ul > li:nth-child(2)").addEventListener("click", function() {
      window.open(
      "https://twitter.com/unc",
      "_blank"
    );
  })

  document.querySelector("footer > div > div > div > div > div:nth-child(2) > div:nth-child(1) > ul > li:nth-child(3)").addEventListener("click", function() {
      window.open(
      "https://www.youtube.com/user/UNCChapelHill",
      "_blank"
    );
  })

  document.querySelector("footer > div > div > div > div > div:nth-child(2) > div:nth-child(1) > ul > li:nth-child(4)").addEventListener("click", function() {
      window.open(
      "https://www.instagram.com/uncchapelhill/",
      "_blank"
    );
  })

  document.querySelector("footer > div > div > div > div > div:nth-child(2) > div:nth-child(1) > ul > li:nth-child(5)").addEventListener("click", function() {
      window.open(
      "https://pinterest.com/uncchapelhill/",
      "_blank"
    );
  })
}
