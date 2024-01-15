import { test, expect } from '@playwright/test';

test('browser context playwright test', async ({ page }) => {
    const prodName = 'zara coat 3';
    await page.goto('https://rahulshettyacademy.com/client');
    const userName = page.locator("input[id='userEmail']");
    const password = page.locator("input[id='userPassword']")
    const submit = page.locator("input[id='login']")
    const products = page.locator(".card-body")
    const cartButton = page.locator("button[routerlink='/dashboard/cart']");
    const email = "minaz@gmail.com";


    console.log(await page.title());
    await userName.type(email);
    await password.type("Minaz@123");
    await submit.click();
    await page.waitForLoadState('networkidle');
    const prodCount = await products.count();
    console.log(prodCount);
    for (let i = 0; i < prodCount; i++) {
        if (await products.nth(i).locator("b").textContent() === prodName) {
            await products.nth(i).locator("button").nth(1).click();
            break;
        }
    }
    await cartButton.click();
    //to wait for something exclusively 
    //await page.locator("div li").first().waitFor();
    await page.locator("h3:has-text('zara coat 3')",).isVisible();
    await page.locator("text=Checkout").click();
    await page.locator("[placeholder='Select Country']").type("India", { delay: 100 });
    const dropdown = page.locator("section.ta-results");
    await dropdown.waitFor();
    await dropdown.locator("text= India").last().click();
    //await dropdown.getByText(' India',{exact:true}).click();
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    console.log(page.locator(".hero-primary").textContent());
    const orderId = page.locator("label.ng-star-inserted").textContent();
    console.log(orderId);








})

