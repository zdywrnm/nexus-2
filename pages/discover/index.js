const projectFilterConfig = [
  {
    key: 'projectTypes',
    title: '项目类型',
    multiple: true,
    options: [
      '商业类：市场调研',
      '商业类：营销策划',
      '商业类：品牌推广',
      '商业类：电商运营',
      '技术类：Web 开发',
      '技术类：数据分析',
      '技术类：AI 模型微调',
      '设计类：平面设计',
      '设计类：UI 设计',
      '设计类：视频剪辑',
      '设计类：动画制作',
      '内容类：文案策划',
      '内容类：翻译',
      '内容类：新媒体编辑',
      '教育类：在线助教',
      '教育类：科研助理',
      '教育类：课程辅导',
      '工程类：产品绘图',
      '工程类：工艺改进',
      '公益类：环保',
      '公益类：社区调研',
      '公益类：乡村振兴项目',
      '服务类：客服',
      '服务类：问卷',
      '服务类：信息录入'
    ].map(label => ({ label, value: label })),
    selected: []
  },
  {
    key: 'workMode',
    title: '工作方式',
    multiple: true,
    options: [
      { label: '线上', value: '线上' },
      { label: '线下', value: '线下' },
      { label: '混合', value: '混合' }
    ],
    selected: []
  },
  {
    key: 'certification',
    title: '认证企业',
    multiple: false,
    options: [
      { label: '不限', value: '不限' },
      { label: '仅看认证企业', value: '仅看认证企业' }
    ],
    selected: '不限'
  },
  {
    key: 'startTime',
    title: '开始时间',
    multiple: true,
    options: ['立即', '本周内', '本月内'].map(label => ({ label, value: label })),
    selected: []
  },
  {
    key: 'duration',
    title: '项目时长',
    multiple: true,
    options: ['≤1周', '1–4周', '＞1月'].map(label => ({ label, value: label })),
    selected: []
  },
  {
    key: 'dailyHours',
    title: '每天工作时长',
    multiple: true,
    options: ['≤2h', '2–4h', '4–6h', '≥6h', '自定义'].map(label => ({ label, value: label })),
    selected: []
  },
  {
    key: 'weeklyDays',
    title: '每周参与天数',
    multiple: true,
    options: ['1天', '1-3天', '3-5天', '5-7天'].map(label => ({ label, value: label })),
    selected: []
  },
  {
    key: 'paymentType',
    title: '赏金/结算方式',
    multiple: true,
    options: ['日薪', '阶段性薪水', '完成后一次性支付'].map(label => ({ label, value: label })),
    selected: []
  },
  {
    key: 'budget',
    title: '预算区间',
    description: '根据所选结算方式显示对应区间',
    multiple: true,
    options: [
      { label: '日薪：不限', value: '日薪：不限' },
      { label: '日薪：¥0–100', value: '日薪：¥0–100' },
      { label: '日薪：¥100–150', value: '日薪：¥100–150' },
      { label: '日薪：¥150–200', value: '日薪：¥150–200' },
      { label: '日薪：¥200–300', value: '日薪：¥200–300' },
      { label: '日薪：¥300+', value: '日薪：¥300+' },
      { label: '阶段/一次：不限', value: '阶段/一次：不限' },
      { label: '阶段/一次：¥0–200', value: '阶段/一次：¥0–200' },
      { label: '阶段/一次：¥200–500', value: '阶段/一次：¥200–500' },
      { label: '阶段/一次：¥500–1000', value: '阶段/一次：¥500–1000' },
      { label: '阶段/一次：¥1000–3000', value: '阶段/一次：¥1000–3000' },
      { label: '阶段/一次：¥3000+', value: '阶段/一次：¥3000+' }
    ],
    selected: []
  },
  {
    key: 'education',
    title: '学历要求',
    multiple: false,
    options: ['不限', '大专', '本科', '硕士', '博士'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'grade',
    title: '接受年级',
    multiple: false,
    options: ['不限', '大一', '大二', '大三', '大四'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'training',
    title: '培训支持',
    multiple: false,
    options: ['不限', '有培训', '无培训'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'benefits',
    title: '福利待遇',
    multiple: true,
    options: ['餐补', '交通补贴', '住宿'].map(label => ({ label, value: label })),
    selected: []
  }
];

const jobFilterConfig = [
  {
    key: 'education',
    title: '学历要求',
    multiple: false,
    options: ['不限', '大专', '本科', '硕士', '博士', '中专/中技', '高中', '初中及以下'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'benefits',
    title: '福利待遇',
    multiple: true,
    options: ['周末双休', '五险一金', '8小时工作制', '五险', '弹性工作制', '房补', '底薪加提成', '带薪年假', '餐补', '年终奖', '不限'].map(label => ({ label, value: label })),
    selected: []
  },
  {
    key: 'salary',
    title: '薪资待遇（月薪）',
    multiple: false,
    options: ['不限', '3K以下', '3-5K', '5-7K', '7-9K', '9-12K', '自定义薪资'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'experience',
    title: '经验要求',
    multiple: false,
    options: ['不限', '在校生', '应届生'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'bossActive',
    title: 'BOSS活跃状态',
    multiple: false,
    options: ['不限', '3日内活跃', '今日活跃', '本周活跃', '本月活跃', '刚刚活跃'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'companyType',
    title: '公司性质',
    multiple: false,
    options: ['不限', '民营企业', '外资企业', '股份制企业', '国有企业', '合伙企业', '社会团体', '事业单位'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'certification',
    title: '企业认证',
    multiple: false,
    options: ['不限', '认证企业'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'industry',
    title: '全部行业',
    description: '覆盖互联网/AI、制造、服务等 16+ 大类',
    multiple: true,
    options: [
      '互联网/电子商务', '人工智能', '在线教育', '大数据', '广告营销', '生活服务', '游戏', '社交网络与媒体', '云计算', '计算机软件',
      '半导体/芯片', '智能硬件', '通信/网络设备', '运营商/增值服务', '餐饮', '酒店/民宿', '家政服务', '旅游/景区',
      '批发/零售', '进出口贸易', '服装/纺织', '日化', '珠宝/首饰', '装修装饰', '房屋建筑工程', '建筑设计',
      '培训/辅导机构', '职业培训', '文化艺术/娱乐', '体育', '广告/公关/会展', '新闻/出版', '制造业：通用设备', '制造业：新材料',
      '咨询', '财务/审计/税务', '法律', '检测/认证/知识产权', '翻译', '医疗服务', '医疗器械', '生物/制药',
      '新能源汽车', '汽车后市场', '交通/运输', '物流/仓储', '光伏', '储能', '环保', '电力/热力/燃气/水利',
      '互联网金融', '银行', '投资/融资', '证券/期货', '基金', '保险', '农/林/牧/渔', '非盈利机构', '政府/公共事业'
    ].map(label => ({ label, value: label })),
    selected: []
  }
];

const talentFilterConfig = [
  {
    key: 'education',
    title: '教育水平',
    multiple: false,
    options: ['不限', '大专', '本科', '硕士', '博士', '中专/中技', '高中', '初中及以下'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'salaryMonthly',
    title: '期望薪资（月薪）',
    multiple: false,
    options: ['不限', '3K以下', '3-5K', '5-7K', '7-9K', '9-12K', '自定义薪资范围'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'salaryDaily',
    title: '期望薪资（日薪）',
    multiple: false,
    options: ['不限', '0-100', '100-150', '150-200', '200-300', '自定义薪资范围'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'identity',
    title: '身份类型',
    multiple: false,
    options: ['不限', '在校生', '应届生'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'talentCertification',
    title: '人才认证',
    multiple: false,
    options: ['不限', '已认证人才'].map(label => ({ label, value: label })),
    selected: '不限'
  },
  {
    key: 'direction',
    title: '求职方向',
    description: '覆盖互联网、制造、金融、教育等行业',
    multiple: true,
    options: [
      '互联网', '电子商务', '人工智能', '云计算', '在线教育', '计算机软件', '大数据', '广告营销', '物联网', '新零售', '信息安全',
      '半导体/芯片', '电子/硬件开发', '通信/网络设备', '智能硬件/消费电子', '运营商/增值服务', '餐饮', '美容', '酒店/民宿',
      '运动/健身', '家政服务', '旅游/景区', '婚庆/摄影', '宠物服务', '批发/零售', '进出口贸易', '服装/纺织', '食品/饮料/烟酒',
      '家具/家居', '珠宝/首饰', '装修装饰', '房屋建筑工程', '建筑设计', '工程施工', '培训/辅导机构', '职业培训', '文化艺术/娱乐',
      '体育', '广告/公关/会展', '广播/影视', '新闻/出版', '制造业：通用设备', '制造业：专用设备', '制造业：新材料', '机械设备/机电',
      '咨询', '财务/审计/税务', '人力资源服务', '法律', '检测/认证/知识产权', '翻译', '医疗服务', '医美服务', '医疗器械', '生物/制药',
      '新能源汽车', '汽车智能网联', '交通/运输', '物流/仓储', '光伏', '储能', '环保', '化工', '电力/热力/燃气/水利',
      '互联网金融', '银行', '投资/融资', '证券/期货', '基金', '保险', '农/林/牧/渔', '非盈利机构', '政府/公共事业'
    ].map(label => ({ label, value: label })),
    selected: []
  }
];

function cloneFilters(config) {
  return config.map(section => ({
    ...section,
    selected: Array.isArray(section.selected) ? [...section.selected] : section.selected
  }));
}

Page({
  data: {
    topTabs: [
      { label: '项目', value: 'project' },
      { label: '岗位', value: 'job' },
      { label: '人才', value: 'talent' }
    ],
    currentTab: 'project',
    showFilter: false,
    searchKeyword: '',
    projectList: [
      {
        id: 'p1',
        title: '新能源市场调研项目',
        type: '商业类',
        mode: '线上',
        city: '深圳',
        payment: '日薪 ¥200-300',
        education: '本科及以上',
        grade: '大三优先',
        benefits: ['餐补', '住宿'],
        duration: '本月内开始 · 4-6h/天 · 3-5天/周',
        certified: true
      },
      {
        id: 'p2',
        title: 'AI 模型微调助理',
        type: '技术类',
        mode: '混合',
        city: '杭州',
        payment: '阶段性薪水 ¥3000+',
        education: '硕士及以上',
        grade: '不限',
        benefits: ['交通补贴'],
        duration: '本周内开始 · ≥6h/天 · 5-7天/周',
        certified: false
      }
    ],
    jobList: [
      {
        id: 'j1',
        title: '校园新媒体运营实习生',
        company: '灵感互动',
        salary: '5-7K/月',
        education: '本科及以上',
        industry: '广告/公关/会展',
        location: '上海 · 线下',
        benefits: ['周末双休', '五险一金'],
        certified: true
      },
      {
        id: 'j2',
        title: 'AI 教育产品助教',
        company: '未来课堂',
        salary: '7-9K/月',
        education: '硕士优先',
        industry: '在线教育',
        location: '线上/混合',
        benefits: ['弹性工作制', '餐补'],
        certified: false
      }
    ],
    talentList: [
      {
        id: 't1',
        avatar: 'https://dummyimage.com/100x100/1a73e8/ffffff.png&text=A',
        name: '张同学',
        identity: '在校生',
        intent: '互联网｜新媒体编辑',
        salary: '3-5K/月',
        location: '杭州',
        school: '浙江万里学院｜本科',
        skills: ['内容策划', '数据分析', '活动执行'],
        verified: true
      },
      {
        id: 't2',
        avatar: 'https://dummyimage.com/100x100/34a853/ffffff.png&text=B',
        name: '李同学',
        identity: '应届生',
        intent: '制造业｜自动化工程师',
        salary: '150-200元/天',
        location: '线上',
        school: '哈尔滨工业大学｜硕士',
        skills: ['PLC 编程', '3D 建模'],
        verified: false
      }
    ],
    filterConfig: {
      project: cloneFilters(projectFilterConfig),
      job: cloneFilters(jobFilterConfig),
      talent: cloneFilters(talentFilterConfig)
    },
    filterTitle: {
      project: '项目筛选',
      job: '岗位筛选',
      talent: '人才筛选'
    },
    filterSummary: {
      project: '全部类型 · 更多条件',
      job: '全部岗位 · 更多条件',
      talent: '全部人才 · 更多条件'
    }
  },

  onSwitchTab(event) {
    const { value } = event.currentTarget.dataset;
    if (value === this.data.currentTab) return;
    this.setData({ currentTab: value });
  },

  onSearch(event) {
    this.setData({ searchKeyword: event.detail.value });
  },

  onToggleFilter() {
    this.setData({ showFilter: !this.data.showFilter });
  },

  onSelectFilter(event) {
    const { group, value, multiple } = event.currentTarget.dataset;
    const isMultiple = multiple === true || multiple === 'true';
    const tab = this.data.currentTab;
    const newConfig = { ...this.data.filterConfig };
    const sections = cloneFilters(newConfig[tab]);
    const targetIndex = sections.findIndex(section => section.key === group);
    if (targetIndex === -1) return;
    const section = sections[targetIndex];

    if (isMultiple) {
      const selected = new Set(section.selected || []);
      if (selected.has(value)) {
        selected.delete(value);
      } else {
        selected.add(value);
      }
      section.selected = Array.from(selected);
    } else {
      section.selected = value;
    }

    newConfig[tab] = sections;
    this.setData({ filterConfig: newConfig });
  },

  onResetFilter() {
    const tab = this.data.currentTab;
    const defaultConfig = {
      project: cloneFilters(projectFilterConfig),
      job: cloneFilters(jobFilterConfig),
      talent: cloneFilters(talentFilterConfig)
    };
    const newConfig = { ...this.data.filterConfig, [tab]: defaultConfig[tab] };
    this.setData({ filterConfig: newConfig }, () => {
      this.updateFilterSummary(tab);
    });
  },

  onConfirmFilter() {
    const tab = this.data.currentTab;
    this.updateFilterSummary(tab);
    this.setData({ showFilter: false });
  },

  updateFilterSummary(tab) {
    const sections = this.data.filterConfig[tab];
    const highlights = sections
      .filter(section => (Array.isArray(section.selected) ? section.selected.length : section.selected && section.selected !== '不限'))
      .slice(0, 2)
      .map(section => {
        if (Array.isArray(section.selected)) {
          return section.selected.join('、');
        }
        return section.selected;
      });
    const summary = highlights.length ? `${highlights.join(' · ')} · 更多条件` : (tab === 'project' ? '全部类型 · 更多条件' : tab === 'job' ? '全部岗位 · 更多条件' : '全部人才 · 更多条件');
    const newSummary = { ...this.data.filterSummary, [tab]: summary };
    this.setData({ filterSummary: newSummary });
  },

  goProjectDetail(event) {
    wx.showToast({ title: '进入项目详情', icon: 'none' });
  },

  goJobDetail() {
    wx.showToast({ title: '进入岗位详情', icon: 'none' });
  },

  goTalentDetail() {
    wx.showToast({ title: '进入人才详情', icon: 'none' });
  },

  stopMove() {
    return false;
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
