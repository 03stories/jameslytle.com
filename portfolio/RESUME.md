# Resume source and export

The editable resume is `src/pages/ResumePage.jsx`, rendered at `/resume` and prerendered to `dist/resume/index.html`. Its document styles are in `src/pages/ResumePage.css`. This is the source for future resume changes; the downloadable file is `public/resume.pdf`.

The draft combines design engineering and product design leadership. Existing resume history supplies Juice Analytics (2009–present), freelance experience, OpenIDEO, and education; current portfolio case studies supply Forward accomplishments and the Finestra date range.

## Review before publishing a PDF

- Confirm the Finestra dates: the old PDF says 2012–2015, while the current case study says 2011–2017. This draft uses the case study.
- Confirm the current title and whether to show dates for each earlier Juice Analytics role. The draft avoids assigning a start date to the current title.
- Confirm the degree wording retained from the existing PDF.

## Export

1. Open `/resume` and select US Letter or A4.
2. Choose Print / Save PDF.
3. Select the matching paper size, 100% scale, and turn off browser headers and footers. The stylesheet supplies 12mm page margins and removes site navigation and the toolbar.
4. Review all pages in print preview, especially after changing fonts or content.
5. Save the final PDF and replace `public/resume.pdf` when ready. Rebuild the site to publish the replacement.

The print document uses 10pt Arial body text for consistent pagination, plus the site's selected heading font. The resume spacing variables are defined at the top of its stylesheet. Browser design-system changes to the heading font can change page fit, so inspect print preview before each export.
