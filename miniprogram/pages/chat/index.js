// pages/chat/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList:[]
  },
  clickButton(){
    console.log(123);
    const msgList = [{
      msg:`this is add msg ${this.data.msgList.length}`
    },...this.data.msgList]
    // const msgList = this.data.msgList.concat({msg:`this is add msg ${this.data.msgList.length}`})
    this.setData({
      msgList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const list = Array.from({length:10}).map((_,index)=>{
      return {
        msg:`this is msg ${index}`
      }
    })
    this.setData({
      msgList:list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})