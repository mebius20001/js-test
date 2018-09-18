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

// ДОБАВИЛ ЭТО
const chrome = require('selenium-webdriver/chrome')
const options = new chrome.Options()
const loggingPrefs = new webdriver.logging.Preferences()
loggingPrefs.setLevel(webdriver.logging.Type.BROWSER, webdriver.logging.Level.ALL)
options.setLoggingPrefs(loggingPrefs)

test.describe('Google Search', () => {
    let driver

    test.before(() => {
        driver = new webdriver.Builder().withCapabilities(options.toCapabilities()).build()
    })

    test.it('test logs', async () => {
        // let result, res, rand

        driver.get('http://localhost/litecart/admin')
        driver.findElement(By.name('username')).sendKeys('admin')
        driver.findElement(By.name('password')).sendKeys('admin')
        driver.findElement(By.name('login')).click()
        driver.get('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1)')

        let len = await driver.findElement(By.css('tr.footer'))
        len = await len.getText()
        len = await len.split('Products:')
        len = await Number(len[1])

        // await console.log(len)

        let arr = await driver.findElements(By.css('i.fa.fa-pencil'))
        let arrLenght = await arr.length

        // await console.log(arrLenght)

        for (let i = arrLenght - len; i < arrLenght; i++) {
            let newArr = await driver.findElements(By.css('i.fa.fa-pencil'))

            await newArr[i].click()

            // console.log("i="+i)

            await driver.navigate().back()
        }

        const logs = await driver.manage().logs().get('browser')
        // вывод логов
        for (let log of logs)
            console.log('[%s] %s', log.level.name, log.message)


    })

     test.after(function() {
     driver.quit()
     } );

})