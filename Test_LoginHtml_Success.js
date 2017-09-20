module.exports = {
  'Login Test Successful' : function (browser) {
    browser
      .url('http://localhost:5137/')
	  .useXpath()
      .pause(1000)
	  .click("/html/body/div[1]/div/div[2]/ul/li[4]/a")    //Click on LOGIN button
	  .pause(1000)
	  .setValue("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[1]/input","akanksha.garud36@gmail.com") //Set value for email address
	  .pause(1000)
	  .setValue("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[2]/input","111111") //Set value for password
	  .pause(1000)
	  .click("/html/body/div[3]/div/div/article/div[1]/div/div/ng-form/div[3]/div[2]/button") //Click on Sign in button
	  .pause(1000)
      .end();
  }
}