var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Google Search', function() {
    var driver;

    test.before(function *() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });


    test.it('should append querry to title', async () => {

        driver.get('http://localhost/litecart/')

        const products = await driver.findElements(By.css('ul.listing-wrapper.products li.product'))

        for (let product of products) {
            const stickerEl = await product.findElements(By.css('div.sticker'))

            if (!stickerEl.length)
                throw Error('Товар не содержит стикера')

            if (stickerEl.length > 1)
                throw Error('Товар содержит больше одного стикера: ' + stickerEl.length)

           // console.log('Товар прошел тест')
        }



    });

    test.after(function() {
        driver.quit()
    } );

});