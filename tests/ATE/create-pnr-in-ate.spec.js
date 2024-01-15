import { test, expect } from '@playwright/test';

test.only('Open ATE and create pnr', async ({ page }) => {
    const commandInput = page.locator("input[id*='Typeacommand']");
    await page.goto('https://ate.forge.amadeus.net/');
    await page.locator('input#atid').fill('09CC2458');
    await page.locator("div[role='button']").click();
    await page.getByText('UAT', { exact: true }).click()
    await page.locator("button[type='submit']").click();
    await commandInput.isVisible();
    await commandInput.type("JI0001AA/SU.HEL1A27QA", { delay: 100 });
    await commandInput.dblclick();
    await commandInput.press('Enter');
    await commandInput.clear();
    await commandInput.type("NM1SHRUTE/DWIGHT", { delay: 100 });
    await commandInput.press('Enter');
    await commandInput.clear();
    await commandInput.type("AN15NOVCDGFRA/AAF", { delay: 100 });
    await commandInput.press('Enter');
    await commandInput.clear();
    await commandInput.type("SS1Z2", { delay: 100 });
    await commandInput.press('Enter');
    await commandInput.clear();
    await commandInput.type("FXB", { delay: 100 });
    await commandInput.press('Enter');
    await commandInput.clear();
    await commandInput.type("RFF;APM;APE;FP CASH;TKOK;FM0", { delay: 100 });
    await commandInput.press('Enter');
    await commandInput.clear();
    await commandInput.type("TTP/RT", { delay: 100 });
    await commandInput.press('Enter');
    await commandInput.clear();
    await commandInput.type("TTP/RT", { delay: 100 });
    await commandInput.press('Enter');
    await commandInput.clear();
    await commandInput.type("RT", { delay: 100 });
    await commandInput.press('Enter');
    await commandInput.clear();
    let output = await page.locator("div#output").textContent();
    let pnr = (output.split("1.")[0]).trim().split(/\s|&nbsp;/g).pop();
    console.log(`The created PNR is ${pnr}`);
    await commandInput.type("IG", { delay: 100 });
    await commandInput.press('Enter');
    await commandInput.clear();
    await commandInput.type("JO", { delay: 100 });
    await commandInput.press('Enter');
    await page.locator("button[aria-label='Disconnect']").click();
})