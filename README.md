# David Orozco — personal website

Static site (HTML + CSS + a little JS) deployed with GitHub Pages at
https://davoroz.github.io/david-orozco-site/

- `index.html` About  ·  `research.html` Research  ·  `projects.html` Projects  ·  `cv.html` CV
- `styles.css` all styling; colours and fonts live in `:root` at the top, with a dark-mode block right below it
- `assets/cv/David_Orozco_CV.pdf` the downloadable CV (replace to update)
- `assets/img/og-image.png` the social preview image (1200 × 630) used by LinkedIn and other sites
- `assets/img/projects/` figures used on the Projects page
- `.github/workflows/pages.yml` automatic deployment on push to `main`

To add a publication, copy the commented template in `research.html`.
To add a data project, copy the `<section class="section case">` block in `projects.html`
and add its figure to `assets/img/projects/`.
The header and footer are repeated in every page: when you add a page, update the menu in all of them.
