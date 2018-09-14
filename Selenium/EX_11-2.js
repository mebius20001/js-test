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
        let result, res, rand

        driver.get('http://localhost/litecart/')

        driver.get('http://localhost/litecart/en/create_account')

        driver.findElement(By.name("firstname")).sendKeys("Cat")
        driver.findElement(By.name("lastname")).sendKeys("Pussy")

        driver.findElement(By.name("address1")).sendKeys("Virtual str.")
        driver.findElement(By.name("postcode")).sendKeys("49012")

        driver.findElement(By.name("city")).sendKeys("Augusta")

        driver.findElement(By.css("span.select2-selection__arrow")).click()

        driver.findElement(By.css("input.select2-search__field")).sendKeys("United States"+Key.ENTER)

        rand = Math.random().toString(36).slice(-5)

        driver.findElement(By.name("email")).sendKeys(rand+"@mail.ru")
        driver.findElement(By.name("phone")).sendKeys("123456")


        driver.findElement(By.name("password")).sendKeys("qwerty")
        driver.findElement(By.name("confirmed_password")).sendKeys("qwerty")


        driver.findElement(By.name("accept_cookies")).click()
        driver.findElement(By.name("create_account")).click()

      driver.findElement(By.css('a[href*="logout"]')).click()

       driver.findElement(By.name("email")).sendKeys(rand+"@mail.ru")
        driver.findElement(By.name("password")).sendKeys("qwerty")

       driver.findElement(By.name("login")).click()
        driver.findElement(By.css('a[href*="logout"]')).click()


    });

     test.after(function() {
     driver.quit()
     } );

});
