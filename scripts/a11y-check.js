/**
 * Simple Playwright + axe-playwright accessibility check against:
 *  http://127.0.0.1:8080/components-showcase.html
 *
 * Exit code:
 *  0 -> no violations
 *  1 -> violations found or failure
 *
 * Note: CI workflow starts a static server at port 8080 before running this script.
 */

const { chromium } = require('playwright');
const { injectAxe, checkA11y } = require('axe-playwright');

(async () => {
  const url = process.env.A11Y_URL || 'http://127.0.0.1:8080/components-showcase.html';
  console.log(`Running a11y checks against ${url}`);

  const browser = await chromium.launch();
  const page = await browser.newPage();
  let exitCode = 0;

  try {
    const resp = await page.goto(url, { waitUntil: 'networkidle' });
    if (!resp || resp.status() >= 400) {
      console.error(`Failed to load ${url} - status ${resp ? resp.status() : 'no response'}`);
      exitCode = 1;
    } else {
      await injectAxe(page);

      const results = await checkA11y(page, null, { detailedReport: true });
      const violations = (results && results.violations) || [];

      if (violations.length === 0) {
        console.log('No accessibility violations found (axe).');
      } else {
        console.error(`Accessibility violations found: ${violations.length}`);
        for (const v of violations) {
          console.error(`- [${v.impact}] ${v.id}: ${v.description}`);
          if (v.nodes && v.nodes.length) {
            console.error(`  Affected nodes: ${v.nodes.length}`);
            v.nodes.slice(0, 5).forEach((n, i) => {
              console.error(`    ${i + 1}. ${n.target.join(', ')}`);
            });
            if (v.nodes.length > 5) {
              console.error(`    ... and ${v.nodes.length - 5} more nodes`);
            }
          }
        }
        exitCode = 1;
      }
    }
  } catch (err) {
    console.error('Error during accessibility check:', err);
    exitCode = 1;
  } finally {
    await browser.close();
  }

  process.exit(exitCode);
})();
