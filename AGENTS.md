<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the retailer-partner calculator client-side and purely indicative, because rent and sales margin require physical verification and commercial approval rather than persisting unapproved figures.
- Location master data lives in src/data/locations.json as [state, district, town, govClass, areaTier]; regenerate from the uploaded xlsx masters — keeps calculator client-side.
- Use the Royal Corporate Cinema colors across all pages in both dark and light modes, with the original Archivo headings and Barlow body font — restores the user's preferred typography while keeping the premium palette consistent.
- Persist the visitor's light/dark preference on the client; preserve dark ink photographic sections in both modes for legibility.
- Keep the primary header navigation to Home, Our Services, Global Presence, About Us, and Contact Us; surface specialist pages through contextual links and the footer so the header stays focused.
- Routes in src/routes only hold head() + page layout; page sections live in src/features/<page>/sections.tsx and their text/data in src/features/<page>/content.tsx — keeps route files small and content editable in one place.
- Company-wide info (name, email, openEmail) lives in src/content/company.ts; form field lists in src/content/forms.ts — single source for contact details and forms.
- All simple enquiry forms use src/components/forms/email-form.tsx (fields passed as config); specialised forms (funding, income calculator) also live in src/components/forms — avoids duplicated form logic.
