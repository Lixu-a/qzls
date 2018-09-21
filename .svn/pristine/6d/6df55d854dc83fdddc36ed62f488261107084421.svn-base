import { PublicCmsFinder } from '../../services/public/finder/public-cms-finder'
var bmap = require('./bmap-wx.min.js');

const app = getApp()

const publicCmsFinder = new PublicCmsFinder()

Component({

    behaviors: [],

    properties: {
        value: Object
    },
    data: {
        height: 464,
        initHeight: false,
        showVideo: false,
        weatherData: '泉州市 今日阴转多云'
    },

    attached: function(){},
    ready: function(){
        publicCmsFinder.getCmsTitles(app.services.constantService.CACHE_READ_WRITE)
            .subscribe((res)=>{
                this.setData({list: res.data.list})
            });
            console.log("BMap调用成功");
            var that = this;
            // 新建百度地图对象 
            var BMap = new bmap.BMapWX({
              ak: '4DKdZcq5G7Go4RYLXmZpTPgSCtbAQInE'
            });
            var fail = function (data) {
              console.log(data)
            };
            var success = function (data) {
              var weatherData = data.currentWeather[0];
              // console.log("11111111");
              // console.log(weatherData);
              // var time = new Date().toISOString();
              weatherData = weatherData.currentCity + " " + weatherData.date;
              // var weather = { cmsuid:  null,  createtimestamp: time,  title:  title};
              // var list = that.data.list.push(weather);
              // console.log(list);
              // console.log(that.data.list.push(weather));
              that.setData({
                weatherData: weatherData
              });
            }
            // 发起weather请求 
            BMap.weather({
              fail: fail,
              success: success
            });
    },
    moved: function(){},
    detached: function(){},

    methods: {
        onSwiperItemTap: function(e){
            if(e.currentTarget.dataset.index != null){
                let cms = this.data.list[e.currentTarget.dataset.index ]
                wx.navigateTo({
                    url: app.services.utilService.joinUrl('/pages/cms/cms',{'cmsUid': cms.cmsuid})
                })
            }
        },
        onMore: function(e){
            wx.navigateTo({
                url: app.services.utilService.joinUrl('/pages/cms-group/cms-group')
            })
        }
    }

})