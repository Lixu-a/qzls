import { CustomizedUserFinder } from "../../services/customized/finder/customized-user-finder";

const app = getApp()
const customizedUserFinder = new CustomizedUserFinder()

Page({
  data: {
    files: []
  },
  onLoad: function (options) {

    wx.showLoading({
      title: '加载中',
    })

    customizedUserFinder.getAgentUserObjectsByUserUid(app.services.constantService.CACHE_READ_WRITE)
      .subscribe((res) => {
        if (res.data != null && res.data.list != null) {
          this.setData({ 'userObjects': res.data.list })
          console.log(res.data.list)
        }
      }, null, () => {
        wx.hideLoading()
      })
  },
  // onComponentEvent: function (e) {
  //   let userUid = e.detail
  //   for (let i = 0; i < this.data.userObjects.length; i++) {
  //     let item = this.data.userObjects[i]
  //     if (item.userUid == userUid) {
  //       this.data.userObjects.splice(i, 1)
  //     }
  //     this.setData({ 'userObjects': this.data.userObjects })
  //   }
  // }
  // 表单提交
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let msg = e.detail.value;
    console.log(msg.name + '...' + msg.num);
    if (!msg.name) {
      wx.showToast({
        title: '姓名不能为空',
        icon: 'none'
      });
      return;
    }
    if (!msg.num) {
      wx.showToast({
        title: '身份证号码不能为空',
        icon: 'none'
      });
      return;
    }
    wx.showToast({
      title: '提交成功'
    });
  },
  // 重置
  formReset: function () {
    console.log('form发生了reset事件');
  },
  // 图片上传
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  }

})