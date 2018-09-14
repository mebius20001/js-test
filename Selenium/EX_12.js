// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

const webdriver = require('selenium-webdriver'),
    Key = webdriver.Key,
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing')

test.describe('Google Search', () => {
    let driver

    test.before(() => {
        driver = new webdriver.Builder().forBrowser('chrome').build()
    })


    test.it('should append querry to title', async () => {
        let result, res, rand // эти переменные везде используются

        driver.get('http://localhost/litecart/admin')
        driver.findElement(By.name('username')).sendKeys('admin')
        driver.findElement(By.name('password')).sendKeys('admin')
        driver.findElement(By.name('login')).click()

        driver.findElement(By.linkText("Catalog")).click()
        driver.findElement(By.css('a[href*="edit_product"]')).click()


        driver.findElement(By.css('[name=status][value="1"]')).click()

        rand = Math.random().toString(36).slice(-5)
        driver.findElement(By.name("name[en]")).sendKeys(rand)

        rand2 = Math.random().toString(36).slice(-5)
        driver.findElement(By.name("code")).sendKeys(rand2)

        let path = require('path');
        path= path.relative('D:\\070.jpg', './070.jpg');
        

        driver.findElement(By.name("new_images[]")).sendKeys(path)

        driver.findElement(By.css('a[href*="#tab-information"]')).click()

       driver.findElement(By.name("manufacturer_id")).sendKeys("A")
       driver.findElement(By.name("keywords")).sendKeys("Cat")

       driver.findElement(By.name("short_description[en]")).sendKeys("BIG Cat")

       driver.findElement(By.css("div.trumbowyg-editor")).sendKeys("aslkhsauhfiuhk;zcxjkcjkhalchklchkjlhkjiuyriuqeygipuvnkjhfiyalHZ")

        driver.findElement(By.name("head_title[en]")).sendKeys("HeaDabracadabra")

        driver.findElement(By.name("meta_description[en]")).sendKeys("MetAabracadabra")

        driver.findElement(By.css('a[href*="#tab-prices"]')).click()
        driver.findElement(By.name("purchase_price")).clear()
        driver.findElement(By.name("purchase_price")).sendKeys("1")

        driver.findElement(By.name("purchase_price_currency_code")).sendKeys("U")

        driver.findElement(By.name("gross_prices[USD]")).clear()
        driver.findElement(By.name("gross_prices[USD]")).sendKeys("2")

        driver.findElement(By.name("gross_prices[EUR]")).clear()
        driver.findElement(By.name("gross_prices[EUR]")).sendKeys("3")

        driver.findElement(By.name("save")).click()

        driver.findElement(By.name("query")).sendKeys(rand+Key.ENTER)



      let countt = await driver.findElement(By.css('tr.footer'))
            countt= await countt.getAttribute(["innerText"])
            if(countt != "Products: 1"){console.log("Can't find new element!"+countt)}


    });

     test.after(function() {
     driver.quit()
     } );

});
