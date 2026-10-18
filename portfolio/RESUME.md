# Resume source and export

The editable resume is `src/pages/ResumePage.jsx`, rendered at `/resume` and prerendered to `dist/resume/index.html`. Its document styles are in `src/pages/ResumePage.css`. This is the source for future resume changes; the downloadable file is `public/resume.pdf`.

The draft combines design engineering and product design leadership. Existing resume history supplies Juice Analytics (2011–present), freelance experience, OpenIDEO, and education; current portfolio case studies supply Forward accomplishments and the Finestra date range.

## Review before publishing a PDF

- James confirmed Finestra as 2012–2015 and Juice Analytics as 2011–present. The resume and portfolio now use these dates.
- Confirm the current title and whether to show dates for each earlier Juice Analytics role. The draft avoids assigning a start date to the current title.
- Confirm the degree wording retained from the existing PDF.

## Export

1. Open `/resume` and select US Letter or A4.
2. Choose Print / Save PDF.
3. Select the matching paper size, 100% scale, and turn off browser headers and footers. The stylesheet supplies 12mm page margins and removes site navigation and the toolbar.
4. Review all pages in print preview, especially after changing fonts or content.
5. Save the final PDF and replace `public/resume.pdf` when ready. Rebuild the site to publish the replacement.

The print document uses 10pt Arial body text for consistent pagination, plus the site's selected heading font. The resume spacing variables are defined at the top of its stylesheet. Browser design-system changes to the heading font can change page fit, so inspect print preview before each export.

## Static password gate

`/resume` starts locked and prerenders only the password form. A successful unlock is remembered in browser local storage across reloads and return visits. Only the matching password hash is stored, not the typed password. The Lock button clears saved access; changing the build password invalidates previous saved access. If browser storage is unavailable, unlock works for the current visit only. The existing public PDF download stays public.

The local password is in `.resume-password.local`, which is Git ignored. Change that file and restart Vite or rebuild to change the password. Vite embeds only its SHA-256 hash, not the password itself. This is casual privacy, not secure authentication: the resume remains in the client bundle and a simple password hash can be guessed offline.

For a deployed build, provide `RESUME_PASSWORD` as a CI environment secret. If neither that variable nor the local file is present, the gate stays locked; there is no default password or bypass. The local password is intentionally not pushed to GitHub.

## Browser and phone QA

The design-system preview is stored separately per browser and origin. For a consistent comparison, use Reset to site defaults in `/design-system` or import the same configuration in each browser, and compare at 100% browser zoom. The resume uses 10pt body text (13.33 CSS px) and a 30pt name (40 CSS px) on desktop; the name reduces to 26pt on narrow screens. Mobile text autosizing is normalized to 100% while user zoom remains available.

The dev server binds to all network interfaces. Open `http://<Mac-local-IP>:5173/` on a phone connected to the same Wi-Fi. The resume gate uses browser-compatible SHA-256 so it also works over local-network HTTP, where Web Crypto's secure-context API is unavailable. Unlock storage is separate for localhost and the local IP address.
