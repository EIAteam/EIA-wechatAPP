const projectUrl = require('../../config').projectUrl
const projectFileUrl = require('../../config').projectFileUrl
var util = require('../../utils/util.js')
var formatLocation = util.formatLocation
var app = getApp();

Page({
  data: {
    projectId:'',
    projectName:'',
    township:null,
    townshipOptions: ['勒流', '大良', '容桂', '均安', '杏坛', '伦教', '乐从', '北滘', '龙江'],
    index: 0,
  },
  updateInfo: function () {
    var self = this
    wx.request({
      url: projectUrl+self.data.projectId+'/',
      method: 'PUT',
      data: {
        longitude: app.globalData.longitude,
        latitude: app.globalData.latitude,
        id: self.data.projectId,
        township: self.data.township,
        company: self.data.companyId
      },
      header: {
        'Authorization': 'Token ' + app.globalData.token
      },
      success: function (result) {
        console.log('success', result)
        wx.navigateTo({
          url: '/pages/companyList/companyList'
        })
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        wx.showToast({
          title: '创建失败',
          icon: 'loading',
          duration: 2000
        })
      }
    })
  },
  onLoad(query){
    console.log(query)
    if(app.globalData.longitude && app.globalData.latitude){
      this.setData({
        location: formatLocation(app.globalData.longitude, app.globalData.latitude),
      })
    }
    this.setData({
      projectId: query.projectId,
      projectName: query.projectName,
      companyName: query.companyName,
      companyId: query.companyId
    })
    var self = this
    wx.request({
      url: projectUrl+self.data.projectId+'/',
      method: 'GET',
      header: {
        'Authorization': 'Token ' + app.globalData.token
      },
      success: function (result) {
        console.log('success', result)
        self.setData({
          township: result.data.township
        })
        if (self.data.township != null && self.data.townshipOptions.indexOf(self.data.township)>0){
          self.setData({
            index: self.data.townshipOptions.indexOf(self.data.township)
          })

        }
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
      }
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      township: this.data.townshipOptions[e.detail.value],
      index: e.detail.value
    })
  },

  workshopEastImgUpload: function () {
    var self = this

    wx.chooseImage({
      count: 1, 
        sizeType: ['original', 'compressed'], 
        sourceType: ['album', 'camera'], 
      success: function (res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths)
        var imageSrc = res.tempFilePaths[0]
        console.log(imageSrc)
        wx.uploadFile({
          url: projectFileUrl,
          filePath: imageSrc,
          name: 'file',
          header: {
            'Authorization': 'Token ' + app.globalData.token,
            'content-type': 'multipart/form-data'
          },
          formData:{
            fileType: 'workshopEastImg',
            projectId: self.data.projectId
          },
          success: function (res) {
            console.log('uploadImage success, res is:', res)

            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })

            self.setData({
              imageSrc
            })
          },
          fail: function ({ errMsg }) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })

      },
      fail: function ({ errMsg }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  },
  workshopSouthImgUpload: function () {
    var self = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths)
        var imageSrc = res.tempFilePaths[0]
        console.log(imageSrc)
        wx.uploadFile({
          url: projectFileUrl,
          filePath: imageSrc,
          name: 'file',
          header: {
            'Authorization': 'Token ' + app.globalData.token,
            'content-type': 'multipart/form-data'
          },
          formData: {
            fileType: 'workshopSouthImg',
            projectId: self.data.projectId
          },
          success: function (res) {
            console.log('uploadImage success, res is:', res)

            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })

            self.setData({
              imageSrc
            })
          },
          fail: function ({ errMsg }) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })

      },
      fail: function ({ errMsg }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  },
  workshopWestImgUpload: function () {
    var self = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths)
        var imageSrc = res.tempFilePaths[0]
        console.log(imageSrc)
        wx.uploadFile({
          url: projectFileUrl,
          filePath: imageSrc,
          name: 'file',
          header: {
            'Authorization': 'Token ' + app.globalData.token,
            'content-type': 'multipart/form-data'
          },
          formData: {
            fileType: 'workshopWestImg',
            projectId: self.data.projectId
          },
          success: function (res) {
            console.log('uploadImage success, res is:', res)

            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })

            self.setData({
              imageSrc
            })
          },
          fail: function ({ errMsg }) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })

      },
      fail: function ({ errMsg }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  },
  workshopNorthImgUpload: function () {
    var self = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths)
        var imageSrc = res.tempFilePaths[0]
        console.log(imageSrc)
        wx.uploadFile({
          url: projectFileUrl,
          filePath: imageSrc,
          name: 'file',
          header: {
            'Authorization': 'Token ' + app.globalData.token,
            'content-type': 'multipart/form-data'
          },
          formData: {
            fileType: 'workshopNorthImg',
            projectId: self.data.projectId
          },
          success: function (res) {
            console.log('uploadImage success, res is:', res)

            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })

            self.setData({
              imageSrc
            })
          },
          fail: function ({ errMsg }) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })

      },
      fail: function ({ errMsg }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  }

})