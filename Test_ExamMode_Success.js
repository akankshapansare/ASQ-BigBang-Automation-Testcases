module.exports = {
  'Exam Mode Test Successful' : function (browser) {
    browser
      .url('http://localhost:5137/')
	  .useXpath()
      .pause(1000)
	  .click("/html/body/div[1]/div/div[2]/ul/li[4]/a")    //Click on LOGIN button
	  .pause(1000)
	  .setValue("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[1]/input","akanksha.garud36@gmail.com") //Set value for email address
	  .setValue("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[2]/input","111111") //Set value for password
	  .click("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[3]/div[2]/button") //Click on Sign in button
	  .pause(2000)
	  
	  //Check Exam Mode link
	  .click("/html/body/div[3]/div/div/article/div[1]/div/div/p[2]/a/span")  //Click on START EXAM Button
 	  .pause(2000)
	  .assert.containsText("/html/body/div[3]/div/div/article/header/h1", "Exam Mode")
	  .assert.containsText("/html/body/div[3]/div/div/article/div[3]/button", "START")
	  .assert.containsText("/html/body/div[3]/div/div/article/div[3]/a", "CANCEL")
	  .click("/html/body/div[3]/div/div/article/div[3]/button")  //Click on START Button 
	  .pause(2000)
	  .click('//*[@id="choiceA"]')  //Click On Choice A
	  .pause(2000)	  
	  .click("/html/body/div[3]/div/div/article/div[3]/button[1]") //Click on QUIT Button
	  .pause(1000)
	  .click("/html/body/div[5]/md-dialog/md-dialog-actions/button[2]")  //Click Yes on POP-UP screen
	  .pause(2000)
	  .waitForElementVisible("/html/body/div[3]/div/div/article/div[1]/button[3]", 1000)
	  .click("/html/body/div[3]/div/div/article/div[3]/a")  //Click on RETURN Button
	  .pause(1000)
	  .click("/html/body/div[3]/div/div/article/div[4]/a/span")  //Click on RETURN Button 
	  .end();
 }
}