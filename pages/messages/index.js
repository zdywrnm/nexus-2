Page({
  data: {
    systemNotices: [
      {
        id: 'n1',
        title: '你的项目有新的应聘者',
        preview: '新能源市场调研项目新增 2 位候选人，快来查看',
        time: '今天 10:21'
      },
      {
        id: 'n2',
        title: '完成线下面试验证',
        preview: '请在 3 日内上传线下验证资料，保障账号可信度',
        time: '昨天'
      }
    ],
    chats: [
      {
        id: 'c1',
        avatar: 'https://dummyimage.com/80x80/1a73e8/ffffff.png&text=P',
        title: '新能源市场调研项目',
        tag: '项目｜商业类',
        latest: '张同学：方便下午沟通吗？',
        time: '1 分钟前'
      },
      {
        id: 'c2',
        avatar: 'https://dummyimage.com/80x80/f97316/ffffff.png&text=J',
        title: '校园新媒体运营岗位',
        tag: '岗位｜广告/公关/会展',
        latest: '灵感互动 HR：收到你的简历啦～',
        time: '昨天'
      }
    ]
  },

  openNotice(event) {
    wx.showToast({ title: '查看通知详情', icon: 'none' });
  },

  openChat(event) {
    wx.showToast({ title: '进入聊天', icon: 'none' });
  }
});
