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
        let result, res, rand //

        driver.get('http://localhost/litecart/admin')
        driver.findElement(By.name('username')).sendKeys('admin')
        driver.findElement(By.name('password')).sendKeys('admin')
        driver.findElement(By.name('login')).click()
        driver.get('http://localhost/litecart/admin/?app=countries&doc=countries')
        driver.findElement(By.css("td#content a.button")).click()


        async function  openCloseNewWindow(element) {

            originalWindow = await driver.getWindowHandle()

            await element.click()


           existingWindows2 = await driver.getAllWindowHandles()

           let nWinAddr // адрес нового окна
           for (let i = 0; i < existingWindows2.length; i++) {
               if (existingWindows2[i] != originalWindow) {
                   nWinAddr = existingWindows2[i]
               }
           }

           await driver.switchTo().window(nWinAddr)

           await driver.wait(until.elementLocated(By.css("body")),10000)

           driver.close()

           await driver.switchTo().window(originalWindow)

        }



       let elements = await driver.findElements(By.css("i.fa.fa-external-link"))

        for(let j=0;  j < (elements.length); j++){

            await openCloseNewWindow(elements[j])
        }

    });

     test.after(function() {
     driver.quit()
     } );

});
