module.exports = {
  'Admin myaccount Test Successful' : function (browser) {
    browser
      .url('http://localhost:5137/')
	  .useXpath()
      .pause(1000)
	  .click("/html/body/div[1]/div/div[2]/ul/li[4]/a")    //Click on LOGIN button
	  .pause(1000)
	  .setValue("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[1]/input","meanasq@gmail.com") //Set value for email address
	  .setValue("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[2]/input","p@ssword") //Set value for password
	  .click("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[3]/div[2]/button") //Click on Sign in button
	  .pause(1000)
	  
	  //Check Edit Profile link
	  .click("/html/body/div[3]/div/div/article/div[5]/div/div/ul/li[1]/a")
	  .waitForElementVisible('/html/body/div[3]/div/div/article/header/h1', 3000)
	  .assert.containsText("/html/body/div[3]/div/div/article/header/h1", "Edit Profile")
	  .assert.containsText("/html/body/div[3]/div/div/article/header/p/em", "* indicates Mandatory Fields")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[1]/div[1]/label", "First Name")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[1]/div[2]/label", "Last Name")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[1]/div[3]/label", "Date of Birth")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[3]/div[1]/label", "Address Line 1")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[5]/div[1]/label", "City")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[5]/div[2]/label", "State")
	  .assert.containsText("/html/body/div[3]/div/div/article/ng-form/div[5]/div[3]/label", "Zip Code")
	  .assert.containsText("/html/body/div[3]/div/div/article/div[1]/div[1]/label", "Email")
	  .assert.containsText("/html/body/div[3]/div/div/article/div[4]/button", "UPDATE PROFILE")
	  .assert.containsText("/html/body/div[3]/div/div/article/div[4]/a", "CANCEL")
      .end();
  }
}