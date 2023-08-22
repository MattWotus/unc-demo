document.querySelector("main > div.section.hero-container.columns-container > div.default-content-wrapper > ul > li:nth-child(1)").addEventListener("click", function() {
    window.open(
    "https://www.facebook.com/unc-chapelhill/",
    "_blank"
  );
})

document.querySelector("main > div.section.hero-container.columns-container > div.default-content-wrapper > ul > li:nth-child(2)").addEventListener("click", function() {
    window.open(
    "https://twitter.com/unc",
    "_blank"
  );
})

document.querySelector("main > div.section.hero-container.columns-container > div.default-content-wrapper > ul > li:nth-child(3)").addEventListener("click", function() {
    window.open(
    "https://www.youtube.com/user/UNCChapelHill",
    "_blank"
  );
})

document.querySelector("main > div.section.hero-container.columns-container > div.default-content-wrapper > ul > li:nth-child(4)").addEventListener("click", function() {
    window.open(
    "https://www.instagram.com/uncchapelhill/",
    "_blank"
  );
})

document.querySelector("main > div.section.hero-container.columns-container > div.default-content-wrapper > ul > li:nth-child(5)").addEventListener("click", function() {
    window.open(
    "https://pinterest.com/uncchapelhill/",
    "_blank"
  );
})

window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;
  if(scrollPosition >= 177 && window.innerWidth == 1440) {
    document.querySelector("main > div.section.hero-container.columns-container > div.columns-wrapper > div > div:nth-child(1) > div > ul:nth-child(3)").style.display = "flex";
    this.document.querySelector("main > div.section.hero-container.columns-container > div.columns-wrapper > div > div:nth-child(1) > div > p:nth-child(4)").style.display = "block";
  } else {
    document.querySelector("main > div.section.hero-container.columns-container > div.columns-wrapper > div > div:nth-child(1) > div > ul:nth-child(3)").style.display = "none";
    this.document.querySelector("main > div.section.hero-container.columns-container > div.columns-wrapper > div > div:nth-child(1) > div > p:nth-child(4)").style.display = "none";
  }
})
