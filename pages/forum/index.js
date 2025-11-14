Page({
  data: {
    searchKeyword: '',
    filters: [
      { label: '招募贴', value: 'recruit' },
      { label: '交流贴', value: 'discussion' },
      { label: '成果贴', value: 'achievement' }
    ],
    activeFilters: [],
    postList: [
      {
        id: 'f1',
        type: '招募贴',
        title: 'AI 课程共创团队招募 UI 设计',
        author: '校园职协',
        publishTime: '2 小时前',
        relation: '项目｜AI 教育助教',
        content: '我们正在搭建面向高校的 AI 课程共创平台，欢迎擅长 UI/UX 的同学加入，提供导师辅导与奖金。'
      },
      {
        id: 'f2',
        type: '交流贴',
        title: '分享一次乡村振兴调研心得',
        author: '阿柒',
        publishTime: '昨天',
        relation: '',
        content: '最近完成了乡村振兴项目调研，整理了一些方法论：如何设计问卷、联系受访者、形成报告……'
      },
      {
        id: 'f3',
        type: '成果贴',
        title: '新能源项目成果展示',
        author: '元气研究室',
        publishTime: '3 天前',
        relation: '项目｜新能源市场调研',
        content: '团队历时 4 周完成调研并交付报告，附上成果摘要和数据可视化小样，欢迎交流。'
      }
    ]
  },

  onSearch(event) {
    this.setData({ searchKeyword: event.detail.value });
  },

  onToggleFilter(event) {
    const value = event.currentTarget.dataset.value;
    const set = new Set(this.data.activeFilters);
    if (set.has(value)) {
      set.delete(value);
    } else {
      set.add(value);
    }
    this.setData({ activeFilters: Array.from(set) });
  },

  viewPost(event) {
    wx.showToast({ title: '进入帖子详情', icon: 'none' });
  },

  onNavigate(event) {
    const { type } = event.detail;
    const map = {
      project: '前往发项目',
      job: '前往发岗位',
      post: '发布帖子'
    };
    wx.showToast({ title: map[type], icon: 'none' });
  }
});
