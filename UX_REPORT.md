# Body Motion Pilates - UX, Usability and Design Review

**Review date:** 21 August 2026  
**Project phase:** Development  
**Scope:** PT and EN pages, CSS, JavaScript, metadata, and image assets  
**Primary user goal:** Understand the studio, identify relevant support, and book a first class.

## Executive summary

The site has a clear service proposition, short navigation, prominent WhatsApp calls to action, semantic HTML, responsive layouts, and a bilingual foundation. The work remaining is refinement rather than a framework rebuild: content readiness, contact-data consistency, booking clarity, accessibility behavior, and a more deliberate graphical system.

The six team cards are intentional development mocks waiting for real names and photographs. This is acceptable during development, but completing or temporarily hiding that section is a launch gate because clinical trust depends on accurate people and credentials.

## Canonical business information

Use this block for every repeated contact surface, page metadata, and structured data:

- **Hours:** Monday-Friday 8h-21h; Saturday 8h-13h; Sunday closed; appointments subject to availability.
- **Address:** Tv. Bernardino Craveiro, 150, 4480-721 Vila do Conde, Porto, Portugal.
- **WhatsApp:** +351928255320.
- **Phone:** +351928255320.
- **Email:** bodymotion.pilates152@gmail.com.
- **Instagram:** https://www.instagram.com/bodymotion.pt?igsh=MTJlOHlwZXRscDN1dg==

English may translate the labels, but must preserve the same facts. Use `tel:+351928255320` and `https://wa.me/351928255320` for actionable links.

## Strengths

- Home content communicates Clinical Pilates, wellbeing, and recovery quickly.
- Booking is visible in the header and repeated through the page journey.
- WhatsApp, phone, email, Instagram, address, hours, and map offer practical contact options.
- Services include needs-based pathways instead of only listing modalities.
- PT and EN pages, language links, canonical URLs, and hreflang tags provide a solid bilingual base.
- Semantic landmarks, headings, and a small JavaScript footprint support maintainability.

## Findings and recommendations

### P0 - Launch readiness

#### Complete the mocked team section before launch

Replace each mock with owner-supplied real data: name, role, qualifications, concise biography, matching portrait, person-specific alt text, and the English equivalent. Do not use equipment or entrance photos as person portraits. If the content is not ready at launch, hide the section rather than publishing misleading filler.

**Acceptance:** No placeholder strings remain in the public build, every portrait matches the described person, and PT/EN contain equivalent essential team information.

#### Synchronize canonical contact data

Update all repeated occurrences across the eight HTML pages, including visible content, footers, meta descriptions, Open Graph data, LocalBusiness schema, and contact links. The appointment-availability qualification must remain visible wherever hours are presented.

**Acceptance:** PT and EN use the same address, hours, availability rule, phone, email, WhatsApp destination, and Instagram destination.

### P1 - Booking journey and information architecture

1. Use a stable navigation taxonomy: **Inicio / Home**, **Sobre / About**, **Servicos / Services**, **Contacto / Contact**, and **Marcar Aula / Book a Class**.
2. Make the journey explicit on every page: understand the studio, identify a need or service, then contact Body Motion.
3. Keep WhatsApp as the primary booking action and phone as the fallback. Explain what information visitors should include in their first message.
4. Make every needs-based service pathway answer who it is for, what it addresses, and what to do next. Add contextual contact actions.
5. Add `scroll-margin-top` to anchored service sections so sticky navigation does not cover headings.
6. Audit every internal link, language switch, telephone link, WhatsApp URL, map URL, Instagram URL, stylesheet, script, image, favicon, canonical URL, and hreflang URL.

### P1 - Accessibility and responsive usability

1. In `js/main.js`, move focus to the first menu item when the mobile menu opens, close on Escape, return focus to the toggle, and expose an `aria-controls` relationship. Keep navigation usable without JavaScript.
2. Provide one high-contrast `:focus-visible` treatment for links and controls on light and dark surfaces. Preserve comfortable touch targets.
3. Test 320px, 375px, and 414px widths. Keep logo, value proposition, and booking CTA visible without excessive header chrome.
4. Test translated labels for wrapping, mobile language-switcher overflow, anchor positioning, 200% zoom, reflow, and horizontal scrolling.
5. Use meaningful alt text for informative images and empty alt text for decorative images. Team alt text must identify real people only after the mocks are replaced.
6. Validate heading order, landmarks, link names, contrast, image loading, reduced motion, keyboard navigation, and focus return with automated and manual checks.

### P2 - Graphical design system

#### Typography and tokens

`styles.css` references `Gyst` for headings, but that font is not loaded. Choose one deliberately sourced display font and one readable body font, then centralize the type scale, line heights, colors, spacing, button states, borders, radii, content widths, and section rhythm. Check contrast for text, buttons, links, and focus indicators.

#### Hero and image art direction

The hero relies heavily on text over a darkened image. When appropriate assets are available, use bright, real studio, equipment, practitioner, or supported-movement photography. Keep the overlay controlled and verify contrast against the actual image. The first viewport should communicate both the service and the physical care experience while keeping the booking action usable on mobile.

Define aspect ratios, focal-point rules, and stable containers for hero, gallery, service, and team media. Optimize dimensions and use real portraits for team cards.

#### Components and motion

Unify card padding, alignment, heading scale, image treatment, hover/focus states, button hierarchy, and footer structure. Keep sections open rather than nesting decorative cards. Use icons only when they clarify an action, with accessible names for icon-only controls. Add motion only when it supports orientation and respect `prefers-reduced-motion`.

### P2 - Performance and search quality

- Optimize image dimensions and formats; prioritize the hero and lazy-load below-fold media.
- Keep structured data synchronized with visible content. Add verified `Person` entries only when real team data exists.
- Validate titles, descriptions, canonical URLs, hreflang links, Open Graph values, address, hours, and social previews in both languages.
- Treat CSS minification as a deployment optimization, not a substitute for maintainable source CSS.

## Implementation sequence

### Phase 1 - Development content and canonical data

1. Create a PT/EN content matrix for titles, navigation, services, CTAs, contact details, hours, and footers.
2. Propagate the canonical business block across all pages, metadata, links, and schema.
3. Collect the six real portraits, names, roles, qualifications, biographies, and translations.
4. Decide whether the team section will be complete or hidden at launch.

### Phase 2 - Usability and accessibility

5. Implement mobile-menu focus, Escape, focus return, and ARIA improvements.
6. Improve focus indicators and anchor scrolling.
7. Rebalance mobile header and hero layouts.
8. Verify image semantics, headings, landmarks, links, zoom, reflow, contrast, and reduced motion.

### Phase 3 - Graphical refinement

9. Resolve the font source and consolidate visual tokens.
10. Art-direct hero and supporting imagery.
11. Standardize cards, buttons, image ratios, section rhythm, and responsive states.
12. Add only purposeful, reduced-motion-aware animation.

### Phase 4 - Release verification

13. Test all eight pages in PT and EN at 320px, 375px, 414px, 768px, 1024px, and desktop widths.
14. Check booking, phone, WhatsApp, email, Instagram, map, navigation, language switching, anchors, and all image loads.
15. Run automated accessibility checks and manual keyboard-only checks.
16. Verify no console errors, 404 resources, layout shift, unreadable focus states, or contradictory contact information remain.
17. Complete or hide the team section before production publication.

## Acceptance criteria

- All visible operational data matches the supplied canonical information.
- PT and EN contain equivalent essential content and functional journeys.
- No placeholder team content is published at launch; real portraits match real people.
- A visitor can book through WhatsApp or phone from every primary page.
- The mobile menu is keyboard-operable, closes with Escape, and returns focus correctly.
- Focus indicators, contrast, touch targets, zoom, reflow, and reduced motion meet the intended accessibility standard.
- The first viewport communicates Body Motion's service and setting while keeping the primary CTA usable.
- Typography, color, spacing, imagery, cards, and buttons follow one coherent visual system.
- All local resources and contact destinations load without errors.

## Scope and risks

This is a development-phase review. It does not require a framework migration or build system. Real team names and portraits remain owner-provided content dependencies. The canonical business data is no longer an open question; the implementation task is consistent propagation and validation. Font licensing/source and final hero photography should be approved before graphical refinement is finalized.