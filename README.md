# Tyler Products & Sales — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.tylerproductssales.com/home.php (Tyler Products Sales, Inc., Tyler, TX).
Preview: https://tps.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom one-page build: content in `src/App.jsx`, the drawings list in `src/drawings.js`, styles in `src/styles.css`, concept widget in `src/concept.jsx`.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deployment
Vercel project `tyler-products-sales` (framework Vite, team mrwerner-s-projects); pushes to `main` deploy automatically. Domain `tps.blueprintwebstudio.com` is a CNAME at Porkbun (use the target Vercel shows).
Optional env vars: `VITE_CONCEPT_END_DATE` (defaults to 2026-12-12 23:59 Central), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the quote form (`api/contact.js`; demo mode without them).
Add `tps.blueprintwebstudio.com` to `allowedOrigins` in blueprint-digital `api/demo-interest.js`.

## Design
- Logo: their chrome "TPS" with "Tyler Products Sales, Inc." and "Pre-cast Concrete Products", cut from the old header image (`images/headerandmenu.jpg`) with its black-and-blue background kept, so it sits on the dark header as a badge. Favicon is the TPS letters.
- Palette from the logo: the royal blue of the logo's dome (#1D4FC2) and its chrome highlights, a night navy (#0B111D) from the striped header, and poured-concrete grays with a fine noise texture. The hero headline uses the chrome-to-blue split of the TPS letters.
- Fonts: Big Shoulders Display (headings), Big Shoulders Stencil Display (numbers and stamps, like stenciled precast markings), Public Sans (body).
- Motif: precast concrete. The blue dome from their header rises behind the hero; their aerial plant photo sits in a manhole ring seen from above, with a concrete "Family owned 1982" stamp; timeline photos are round like tank lids; the drawings section is a blueprint grid with sheet numbers.
- Signature feature: an engineered drawings library with all 58 PDFs from their drawings page (septic tanks, aerobic units, manholes, curb inlets and catch basins, grease/sand traps, burial boxes, car stops), searchable and filterable by line, each one tap from download.
- Section order: header with call button → hero (headline + manhole ring) → six product lines bar → product lines → drawings library → our story timeline → septic supply counter → who to call (8 named staff) and memberships → quote form with map → footer.

## What changed from the current site
- The footer says "© 2010", the page loads jQuery 1.3.2 over plain http from Google's CDN, and the menu is built from rollover images with no mobile layout.
- Each drawing is behind two dropdown menus that reload the page (category, then product). The concept lists all 58 sheets at once with search and filters. Typos in the sheet names are fixed ("Aqau Aire", "500 to 1500 GDP", "Owner's Manuel").
- The "Online Store" button leads to a plain list that ends "Please Call 903-593-8633 for Price and Shipping"; there is no store. The concept calls it what it is, a septic supply counter, with a tap-to-call button.
- The home page and About page disagree on the founding year (1981 vs 1982). The concept uses one year and lists it for the owner to confirm.
- The "Associations" strip is one image map with a blank first slot (NPCA) and an empty link; the concept shows each membership as its own linked badge.
- The staff list was a bare list of first names and emails. It is now a "who to call" grid by job, with the general manager first.
- There was no quote request form. The concept adds one (product line, job location, needed-by date).
- Checked at 1280px and 390px with no sideways scrolling.

## Photos
All photos are the company's own, from tylerproductssales.com: the home page slideshow (`images/slideshow/flash0–7.jpg`: team, aerial view, plant floor, crew with truck, trade show booth, delivery, office) and the three product thumbnails (`precast_tanks.jpg`, `aerobic.jpg`, `sanitary_manholes.jpg`). They are very small (320×179 and 178×100), so they are shown at modest sizes; new high-resolution photos of the yard, products and crew are the single biggest upgrade before launch. Some product cards use plant photos rather than a photo of that exact product (utility & storm water: plant floor; grease interceptors: a delivery; misc precast: the crew), because the site has no product photos for those lines. The drawings link to the PDFs on tylerproductssales.com; they need to be copied over before the old site is retired.
Badges: City of Tyler, East Texas BBB, Texas On-Site Wastewater Association and Tyler Area Builders Association are cut from their associations image; the NPCA slot in that image is blank, so NPCA is set as text.

## Owner should confirm
- Founding year: the home page says "Since our beginning in 1981", the About page says "began as a family business in 1982". The concept uses 1982.
- Ownership: the About page says John and Kim Redfern own the company; the contact page lists "John" with no title. The concept labels John as Owner.
- That the staff list and roles are current (Paul GM, Jordan, Devin, Barry, Sean, Patti, Judy, John).
- Memberships: NPCA (the logo is blank on the old site), BBB, TOWA, Tyler Area Builders Association, and the City of Tyler logo (is it a membership or the Chamber?).
- "One of the largest manufacturers of concrete aerobic systems in the state" and "main supplier of concrete tanks to a vast majority of contractors throughout East Texas" are their own claims, kept as written.
- Product specs: septic tanks 250–2,000 gal, aerobic 500–1,500 GPD, manholes 48/60/72", grease interceptors 750–1,500 gal, catch basins from 18"×18", curb inlets 5'–20'; and which supply brands are still stocked (Hiblow, Medo, Secoh, Gast, Sta-Rite, Goulds, Little Giant, Tuf-Tite).
- Whether they deliver on their own trucks (the photos show TPS trucks; the caption says "Delivered on our own trucks").
- Office hours (none on the current site, so none are shown).
- No reviews are shown (none on the current site); the page links to a Google Maps search.
