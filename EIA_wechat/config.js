/*
* url配置文件
*/

var host ="111.230.154.209"
//var host = "127.0.0.1:8000"
var config = {
  host,

  // 登陆地址
  loginUrl: `http://${host}/login/`,
  
  companyUrl: `http://${host}/api/company/`,

  projectUrl: `http://${host}/api/project/`,

  projectFileUrl: `http://${host}/api/projectFile/`,

};

module.exports = config