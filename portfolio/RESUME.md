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

`/resume` starts locked and prerenders only the password form. Unlock lasts until reload or the Lock button is used. The existing public PDF download stays public.

The local password is in `.resume-password.local`, which is Git ignored. Change that file and restart Vite or rebuild to change the password. Vite embeds only its SHA-256 hash, not the password itself. This is casual privacy, not secure authentication: the resume remains in the client bundle and a simple password hash can be guessed offline.

For a deployed build, provide `RESUME_PASSWORD` as a CI environment secret. If neither that variable nor the local file is present, the gate stays locked; there is no default password or bypass. The local password is intentionally not pushed to GitHub.
