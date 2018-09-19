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


    class FrontPage {
        static goFrontPage () {
            driver.get('http://localhost/litecart/')
        }
        static selectFirstItem () {
            driver.findElement(By.css('div#box-most-popular.box a.link')).click()
        }
    }

    class ItemPage {
        static async firstElementAdd(){

        FrontPage.selectFirstItem()

        let elName= await driver.findElement(By.css('h1.title'))
        let ln= await elName.getAttribute('textContent')
        if (ln=='Yellow Duck'){
            driver.findElement(By.name("options[Size]")).sendKeys('Small')
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

    }

    class Cart {
        static async delOneItem () {
           // let times = 0
        try {

            let numItem = await driver.findElement(By.name("quantity"))
            await numItem.clear()
            await numItem.sendKeys('1'+Key.ENTER)

            await driver.findElement(By.name('remove_cart_item')).click()
            driver.navigate().refresh()
        } catch (e) {}

    }
        static async goCart () {
            await driver.findElement(By.css('div#cart a.link')).click()

        }
    }

    test.it('should append querry to title', async () => {

        await  FrontPage.goFrontPage()

        await ItemPage.firstElementAdd()//добавление в корзину трех первых элементов
        await ItemPage.firstElementAdd()
        await ItemPage.firstElementAdd()

        await Cart.goCart()

        await Cart.delOneItem()
        await Cart.delOneItem()
        await Cart.delOneItem()

    });

    test.after(function() {
        driver.quit()
    } );

});
