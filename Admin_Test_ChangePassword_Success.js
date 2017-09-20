module.exports = {
  'Admin Change Password Test Successful' : function (browser) {
    browser
      .url('http://localhost:5137/')
	  .useXpath()
      .pause(1000)
	  .click("/html/body/div[1]/div/div[2]/ul/li[4]/a")    //Click on LOGIN button
	  .pause(1000)
	  .setValue("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[1]/input","meanasq@gmail.com") //Set value for email address
	  .setValue("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[2]/input","p@ssword") //Set value for password
	  .click("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[3]/div[2]/button") //Click on Sign in button
	  .pause(2000)
	  
	  //Check Change Password link
	  .click("/html/body/div[3]/div/div/article/div[5]/div/div/ul/li[2]/a")
	  .pause(2000)
	  .setValue('//*[@id="pw"]', "p@ssword")
	  .assert.containsText("/html/body/div[3]/div/div/article/header/p/em", "* indicates Mandatory Fields")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[3]/div[1]/label", "Current Password")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[5]/div[1]/label", "New Password")
	  .setValue('//*[@id="pw1"]', "p@ssword")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[5]/div[2]/label", "Confirm Password")
	  .setValue('//*[@id="pw2"]', "p@ssword")
	  .assert.containsText("/html/body/div[3]/div/div/article/div[2]/button/span", "UPDATE PASSWORD")
	  .assert.containsText("/html/body/div[3]/div/div/article/div[2]/a/span", "CANCEL")
	  .click("/html/body/div[3]/div/div/article/div[2]/button/span")  //Click On Update Password button
	  .end();
 }
}