const webdriver = require('selenium-webdriver'),
    Key = webdriver.Key,
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing')

test.describe('Google Search', () => {
    let driver

    test.before(() => {
        driver = new webdriver.Builder()
            .forBrowser('chrome').build()
    })


    test.it('should append querry to title', async () => {
        let result, res, rand // эти переменные везде используются

        driver.get('http://localhost/litecart/')

        function wait (delay) {
            return new Promise(resolve => {
                setTimeout(resolve, delay)
            })
        }

        async function firstElementAdd(){

            await driver.findElement(By.css("div#box-most-popular.box a.link")).click()

            // если товар - желтый то выбор дополнительного параметра перед добавлением в корзину
            let elName= await driver.findElement(By.css("h1.title"))
            let ln= await elName.getAttribute("innerText")
            if (ln=="Yellow Duck"){
                driver.findElement(By.name("options[Size]")).sendKeys("Small")
            }

            let oldElement = await driver.findElement(By.css('span.quantity'))
            let oldText = await oldElement.getText()

            let newText


            await driver.findElement(By.css('td.quantity [value="Add To Cart"]')).click()

            while (typeof newText === 'undefined' || newText === oldText) {
                let newElement = await driver.findElement(By.css('span.quantity'))
                newText = await newElement.getText()
            }


            driver.navigate().back()

        }

        //добавление в корзину трех первых элементов
        await firstElementAdd()
        await firstElementAdd()
        await firstElementAdd()

        // go to trashbox

        await driver.findElement(By.css('div#cart a.link')).click()

        // удаление трех товаров из корзины


        let times = 0

        async function delThreeItem () {

            try {
                await driver.findElement(By.name('remove_cart_item')).click()
                driver.navigate().refresh()
            } catch (e) {}

            if (++times <= 3) {
                await delThreeItem()
            }
        }


        await delThreeItem()

    });

     test.after(function() {
     driver.quit()
     } );
     
});

