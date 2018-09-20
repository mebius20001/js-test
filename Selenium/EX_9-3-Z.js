
const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until
const test = require('selenium-webdriver/testing')

test.describe('Google Search', function () {
    var driver

    test.before(function * () {
        driver = new webdriver.Builder().forBrowser('chrome').build()
    })


    async function testOrder (newarray, nOfColumn) {
        let sorted = true

        for (let i = 1; i < newarray.length; i++) {
            if (newarray[i - 1][nOfColumn] > newarray[i][nOfColumn]) {
                sorted = false

                break
            }
        }

        for (let i = 0; i < newarray.length; i++) {
            if (newarray[i][5] > 0) {
               // console.log(newarray[i][5])

                driver.findElement(By.linkText(newarray[i][4])).click()// go to link (if > 0)

                const result = await driver.findElements(By.css('table#table-zones.dataTable tbody tr'))// поиск во вложенной таблице
                const res = await result.map(x => x.getAttribute(['innerText']))
                const x = await Promise.all(res)
                let countries = await x.map(value => value.split('\t')) // original code

                for (let i = 1; i < (countries.length - 1); i++) {
                    if (newarray[i - 1][nOfColumn] > newarray[i][nOfColumn]) {
                        sorted = false
                        break
                    }
                }

                driver.navigate().back()
            }
        }

    }

    async function task2 (newarray, nOfColumn) {

        driver.get('http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones')

        const result3 = await driver.findElements(By.css('table.dataTable tr.row'))
        const res3 = await result3.map(x => x.getAttribute(['innerText']))
        const x3 = await Promise.all(res3)
        const countries3 = await x3.map(value => value.split('\t'))

        for (let i=0; i < countries3.length; i++){

         await driver.findElement(By.linkText(countries3[i][2])).click()//перебор стран

            //console.log("i="+countries3[i][2])

         const result1 = await driver.findElements(By.css("option[selected='selected']"))
         const res1 = await result1.map(x => x.getAttribute(['innerText']))
         const x1 = await Promise.all(res1)
         let countries = await x1.map(value => value.split('\t'))

         for (let i = 0; i < countries.length; i++) {
             countries.splice([i], 1)
         }

         for (let i = 1; i < (countries.length - 1); i++) {
             if (newarray[i - 1][nOfColumn] > newarray[i][nOfColumn]) {
                 sorted = false
                 break
             }
         }
         driver.navigate().back()
        }

    } //end of task2

    async function start (){
     start.colNum =4
     driver.get('http://localhost/litecart/admin/')
     driver.findElement(By.name('username')).sendKeys('admin')
     driver.findElement(By.name('password')).sendKeys('admin')
     driver.findElement(By.name('login')).click()

     driver.get('http://localhost/litecart/admin/?app=countries&doc=countries')

     const result = await driver.findElements(By.css('table.dataTable tr.row'))
     const res = await result.map(x => x.getAttribute(['innerText']))
     const x = await Promise.all(res)
     let countries = await x.map(value => value.split('\t'))

     return countries
   }

    test.it('should append querry to title', async function () {

       let countries=await start()

       await testOrder(countries, start.colNum)

       await task2(countries,start.colNum)


    })

    test.after(function () {
        driver.quit()
    })
})
