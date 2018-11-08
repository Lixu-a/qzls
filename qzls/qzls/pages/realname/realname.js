import { CustomizedUserFinder } from "../../services/customized/finder/customized-user-finder";

const app = getApp()
const customizedUserFinder = new CustomizedUserFinder()

Page({
  data: {

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
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let msg = e.detail.value;
    console.log(msg.name+'...'+msg.num);
    if(!msg.name) {
      wx.showToast({
        title: '姓名不能为空',
        icon:'none'
      });
      return;
    }
    if(!msg.num) {
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
  formReset: function () {
    console.log('form发生了reset事件');
  }
})