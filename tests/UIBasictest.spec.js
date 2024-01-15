const {test, expect}=require('@playwright/test');

// test.only('browser context playwright test',async({browser})=>
// {
// const context = await browser.newContext();
// const page = await context.newPage();
// await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
// const userName = page.locator("input[id='username']");
// const password = page.locator("input[id='password']")
// const submit = page.locator("input[id='signInBtn']")
// const items = page.locator("div.card-body a")
// console.log(await page.title());
// await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
// await userName.type('minaz khan');
// await password.type("abc1234");
// await submit.click();
// //we don't put any wait exclusively, we just mention in timeout for test in playwright.config.js
// console.log(await page.locator("div[style*='block']").textContent());
// await expect(page.locator("div[style*='block']")).toContainText("Incorrect username/password.");
// await userName.fill("rahulshettyacademy");
// await password.fill("learning");
// submit.click()
// await Promise.all(
//     [
//          page.waitForNavigation(),
//          submit.click()

//     ]
// )
// // //race condition
// // await Promise.all(
// //     [
// //         page.waitForNavigation(),
// //          submit.click()

// //     ]
// // )

// //only first or last can be used 
// // console.log(await items.first().textContent())
// // console.log(await items.nth(0).textContent());
// // console.log(await items.last().textContent())
// // // console.log(await items.nth(0).textContent());
// //to get all the text of the items 
// console.log(await items.allTextContents())
// // })

// test.only('UI controls',async({page})=>
// {

// await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
// console.log(await page.title());
// const userName = page.locator("input[id='username']");
// const password = page.locator("input[id='password']")
// const submit = page.locator("input[id='signInBtn']");
// const dropDown = page.locator("select.form-control");
// const radioButton = page.locator(".radiotextsty");
// const docLink = page.locator("[href*='rahulshettyacademy']")
// await userName.type('rahulshettyacademy');
// await password.type("learning");
// await dropDown.selectOption("consult");
// await radioButton.nth(1).click();
// await page.locator("#okayBtn").click();
// await expect(radioButton.nth(1)).toBeChecked();
// console.log(await radioButton.nth(1).isChecked());
// //checkbox
// await page.locator("#terms").click();
// await expect(page.locator("#terms")).toBeChecked();
// await page.locator("#terms").uncheck();
// expect(await page.locator("#terms").isChecked()).toBeFalsy();
// expect(await page.locator("#terms").isChecked()).toBe(false);
// await expect(docLink).toHaveAttribute("class","blinkingText");
// await expect(docLink).toHaveAttribute("class","blinkingText")


// //await page.pause();

// await submit.click();
// await Promise.all(
//     [
//         page.waitForNavigation(),
//         submit.click()

//     ]
// )
// })

test('child windows handling ',async({browser})=>
{
    const context=await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator("input[id='username']");
    const password = page.locator("input[id='password']")
    const submit = page.locator("input[id='signInBtn']");
    const docLink = page.locator("[href*='rahulshettyacademy']")
const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    docLink.click()
])
    const text = await newPage.locator(".top-left li").textContent();
    const user=text.split("@")[1].split(" ")[0];
    console.log(user);
    await userName.type(user);
    await password.type("learning");
    await submit.click();
    
    
// })


// test('screenshot anf',async({page})=>
// {

// // await page.goto('https://1a.pdt.sellingplatformconnect.amadeus.com/login/?SITE=LOGINURL&LANGUAGE=GB&e=j&loUrl=login');
// // await page.waitForLoadState('networkidle');
// // expect(await page.screenshot()).toMatchSnapshot('screenshot.png');
// //await page.screenshot({path: 'screenshot.png'});
}
);