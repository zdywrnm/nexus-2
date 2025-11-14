Page({
  data: {
    tabs: [
      { label: '我发布的项目', value: 'published' },
      { label: '我参与的项目', value: 'joined' }
    ],
    currentTab: 'published',
    statusMap: {
      recruiting: '招募中',
      ongoing: '进行中',
      closed: '已结束'
    },
    publishedProjects: [
      {
        id: 'p1',
        title: '新能源市场调研项目',
        tags: ['商业类', '线上协作'],
        status: 'recruiting',
        applicants: [
          { id: 't1', name: '张同学', school: '浙江万里学院｜本科' },
          { id: 't2', name: '王同学', school: '北京理工大学｜大四' }
        ]
      },
      {
        id: 'p2',
        title: 'AI 教学助手共创',
        tags: ['教育类', '混合办公'],
        status: 'ongoing',
        applicants: [
          { id: 't3', name: '李同学', school: '复旦大学｜研一' }
        ]
      }
    ],
    joinedProjects: [
      {
        id: 'j1',
        title: '数字校园 UI 设计',
        tags: ['设计类', '线下'],
        role: '视觉设计师',
        status: 'ongoing'
      },
      {
        id: 'j2',
        title: '公益社区调研',
        tags: ['公益类', '线下'],
        role: '调研员',
        status: 'closed'
      }
    ]
  },

  onSwitchTab(event) {
    const { value } = event.currentTarget.dataset;
    if (value === this.data.currentTab) return;
    this.setData({ currentTab: value });
  },

  onContact(event) {
    const { name } = event.currentTarget.dataset;
    wx.showToast({ title: `联系${name}`, icon: 'none' });
  },

  onSelectApplicant(event) {
    const { project, id } = event.currentTarget.dataset;
    wx.showToast({ title: '已选入项目', icon: 'success' });
  },

  viewTalent(event) {
    wx.showToast({ title: '查看人才详情', icon: 'none' });
  },

  onNavigate(event) {
    const { type } = event.detail;
    const map = {
      project: '前往发项目',
      job: '前往发岗位',
      post: '前往发帖子'
    };
    wx.showToast({ title: map[type], icon: 'none' });
  }
});
