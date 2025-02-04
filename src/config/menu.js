const responseBody = {
  message: '',
  timestamp: 0,
  result: null,
  code: 0,
}

export const builder = (data, message, code = 0, headers = {}) => {
  responseBody.result = data
  if (message !== undefined && message !== null) {
    responseBody.message = message
  }
  if (code !== undefined && code !== 0) {
    responseBody.code = code
    responseBody._status = code
  }
  if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
    responseBody._headers = headers
  }
  responseBody.timestamp = new Date().getTime()
  return responseBody
}

const nav = (options) => {
  // 首页
  const INDEX = [
    {
      parentId: 0,
      id: 11,
      path: '/index',
      name: 'index',
      redirect: '/index/stage',
      component: 'Index/Index',
      meta: { title: '首页', keepAlive: true, icon: 'dashboard', permission: ['Index'] },
    },
    {
      parentId: 11,
      id: 111,
      path: '/index/stage',
      name: 'stage',
      component: 'Index/stage',
      meta: { title: '工作台', keepAlive: true, permission: ['dashboard'] },
    },
  ]
  // 营销
  const MARKETING = [
    {
      parentId: 0,
      id: 12,
      path: '/marketing',
      name: 'marketing',
      redirect: 'marketing/addCustomer',
      component: 'marketing/Index',
      meta: { title: '客户营销', keepAlive: true, icon: 'thunderbolt', permission: ['dashboard'] },
    },
    {
      parentId: 12,
      id: 121,
      path: 'addCustomer',
      name: 'addCustomer',
      component: 'BlankLayout',
      redirect: 'addCustomer/liveQRcode',
      meta: { title: '加客户', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 121,
      id: 1211,
      path: 'liveQRcode',
      name: 'liveQRcode',
      component: 'marketing/liveQRcode/liveQRcode',
      meta: { title: '活码', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 121,
      id: 1212,
      path: 'welcomewords',
      name: 'welcomewords',
      component: 'marketing/welcome/Index',
      meta: { title: '欢迎语', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 121,
      id: 1213,
      path: 'grouptool',
      name: 'grouptool',
      component: 'marketing/groupTool/Index',
      meta: { title: '拉群工具', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 12,
      id: 122,
      path: 'sop',
      name: 'sop',
      component: 'BlankLayout',
      redirect: 'sop/createSop',
      meta: { title: 'sop工具', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 122,
      id: 1221,
      path: 'createSop',
      name: 'createSop',
      component: 'marketing/sop/createSop',
      meta: { title: '创建sop', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 122,
      id: 1222,
      path: 'createSopTask',
      name: 'createSopTask',
      component: 'marketing/sop/createSopTask',
      meta: { title: '创建sop任务', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 122,
      id: 1223,
      path: 'sopList',
      name: 'sopList',
      component: 'marketing/sop/sopList',
      meta: { title: 'sop列表', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 12,
      id: 123,
      path: 'masstool',
      name: 'masstool',
      component: 'BlankLayout',
      redirect: 'masstool/masspersonal',
      meta: { title: '群发工具', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 123,
      id: 1231,
      path: 'masspersonal',
      name: 'masspersonal',
      component: 'unrealized/unrealized',
      meta: { title: '个人群发', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 123,
      id: 1232,
      path: 'massbusiness',
      name: 'massbusiness',
      component: 'marketing/massbusiness/Index',
      meta: { title: '企业群发', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 12,
      id: 124,
      path: 'chattool',
      name: 'chattool',
      component: 'BlankLayout',
      redirect: 'chattool/chatbar',
      meta: { title: '聊天工具栏', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 124,
      id: 1241,
      path: 'chatbar',
      name: 'chatbar',
      component: 'unrealized/unrealized',
      meta: { title: '聊天工具栏', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 124,
      id: 1242,
      path: 'goodwarehouse',
      name: 'goodwarehouse',
      component: 'unrealized/unrealized',
      meta: { title: '商品库', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 124,
      id: 1243,
      path: 'customdetail',
      name: 'customdetail',
      component: 'unrealized/unrealized',
      meta: { title: '客户详情', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 124,
      id: 1244,
      path: 'chatmaterial',
      name: 'chatmaterial',
      component: 'unrealized/unrealized',
      meta: { title: '聊天素材', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 124,
      id: 1245,
      path: 'marketingplugin',
      name: 'marketingplugin',
      component: 'marketing/marketingPlugin/Index',
      meta: { title: '营销插件', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 12,
      id: 125,
      path: 'wechat',
      name: 'wechat',
      component: 'BlankLayout',
      redirect: 'wechat/moments',
      meta: { title: '历史朋友圈', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 125,
      id: 1251,
      path: 'moments',
      name: 'moments',
      component: 'marketing/wechat/Index',
      meta: { title: '朋友圈动态', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 12,
      id: 126,
      path: 'cuntom',
      name: 'cuntom',
      component: 'BlankLayout',
      redirect: 'cuntom/receive',
      meta: { title: '客服中心', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 126,
      id: 1261,
      path: 'receive',
      name: 'receive',
      component: 'unrealized/unrealized',
      meta: { title: '接待配置', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 126,
      id: 1262,
      path: 'cuntomtool',
      name: 'cuntomtool',
      component: 'unrealized/unrealized',
      meta: { title: '客服工具', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 126,
      id: 1263,
      path: 'cuntomcount',
      name: 'cuntomcount',
      component: 'unrealized/unrealized',
      meta: { title: '客服统计', keepAlive: true, permission: ['dashboard'] },
    },
  ]
  // 客户管理
  const MANAGER = [
    {
      parentId: 0,
      id: 13,
      path: '/manager',
      name: 'manager',
      redirect: 'manager/manager',
      component: 'marketing/Index',
      meta: {
        title: '客户管理',
        keepAlive: true,
        icon: 'thunderbolt',
        permission: ['dashboard'],
      },
    },
    {
      parentId: 13,
      id: 131,
      path: 'manager',
      name: 'manager',
      redirect: 'manager/mcuntom',
      component: 'BlankLayout',
      meta: { title: '客户管理', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 131,
      id: 1311,
      path: 'mcuntom',
      name: 'mcuntom',
      component: 'manager/mcuntom/Index',
      meta: { title: '客户', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 131,
      id: 1312,
      path: 'mgroup',
      name: 'mgroup',
      component: 'manager/mgroup/Index',
      meta: { title: '客户群', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 131,
      id: 1313,
      path: 'mtag',
      name: 'mtag',
      component: 'manager/mtag/Index',
      meta: { title: '客户标签', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 131,
      id: 1314,
      path: 'minherit',
      name: 'minherit',
      component: 'unrealized/unrealized',
      meta: { title: '离职继承', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 131,
      id: 1315,
      path: 'mlost',
      name: 'mlost',
      component: 'unrealized/unrealized',
      meta: { title: '流失客户', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 13,
      id: 132,
      path: 'mgroup',
      name: 'mgroup',
      redirect: 'mgroup/mgroupLists',
      component: 'BlankLayout',
      meta: { title: '客户群管理', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 132,
      id: 1321,
      path: 'mgroupLists',
      name: 'mgroupLists',
      component: 'unrealized/unrealized',
      meta: { title: '客户群管理', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 132,
      id: 1322,
      path: 'mgroupTag',
      name: 'mgroupTag',
      component: 'unrealized/unrealized',
      meta: { title: '客户群标签', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 13,
      id: 133,
      path: 'mclue',
      name: 'mclue',
      redirect: 'mclue/mclueClean',
      component: 'BlankLayout',
      meta: { title: '线索管理', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 133,
      id: 1331,
      path: 'mclueClean',
      name: 'mclueClean',
      component: 'unrealized/unrealized',
      meta: { title: '智能清洗', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 133,
      id: 1332,
      path: 'mclues',
      name: 'mclues',
      component: 'manager/mclues/Index',
      meta: { title: '线索', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 133,
      id: 1333,
      path: 'mcluePool',
      name: 'mcluePool',
      component: 'unrealized/unrealized',
      meta: { title: '线索池', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 13,
      id: 134,
      path: 'mmarketing',
      name: 'mmarketing',
      redirect: 'mmarketing/mseas',
      component: 'BlankLayout',
      meta: { title: '营销管理', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 134,
      id: 1341,
      path: 'mseas',
      name: 'mseas',
      component: 'unrealized/unrealized',
      meta: { title: '公海', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 134,
      id: 1342,
      path: 'menterprise',
      name: 'menterprise',
      component: 'unrealized/unrealized',
      meta: { title: '企业', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 134,
      id: 1343,
      path: 'mopportunity',
      name: 'mopportunity',
      component: 'unrealized/unrealized',
      meta: { title: '商机', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 134,
      id: 1344,
      path: 'mvaletOrder',
      name: 'mvaletOrder',
      component: 'unrealized/unrealized',
      meta: { title: '代客订单', keepAlive: true, permission: ['dashboard'] },
    },
  ]

  // 内容中心
  const CONTENTCENTER = [
    {
      parentId: 0,
      id: 14,
      path: '/contentCenter',
      name: 'contentCenter',
      redirect: 'contentCenter/retrieval',
      component: 'contentCenter/Index',
      meta: { title: '内容中心', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 14,
      id: 141,
      path: 'retrieval',
      name: 'retrieval',
      redirect: 'retrieval/poster',
      component: 'BlankLayout',
      meta: { title: '通用素材', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 141,
      id: 1411,
      path: 'poster',
      name: 'poster',
      component: 'contentCenter/poster/Index',
      meta: { title: '海报', keepAlive: true, icon: 'thunderbolt', permission: ['dashboard'] },
    },
    {
      parentId: 141,
      id: 1412,
      path: 'material',
      name: 'material',
      component: 'contentCenter/material/Index',
      meta: { title: '普通素材', keepAlive: true, icon: 'thunderbolt', permission: ['dashboard'] },
    },
    {
      parentId: 141,
      id: 1413,
      path: 'trail',
      name: 'trail',
      component: 'unrealized/unrealized',
      meta: { title: '轨迹素材', keepAlive: true, icon: 'thunderbolt', permission: ['dashboard'] },
    },
    {
      parentId: 14,
      id: 142,
      path: 'combination',
      name: 'combination',
      redirect: 'combination/mcombination',
      component: 'BlankLayout',
      meta: { title: '组合素材', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 142,
      id: 1421,
      path: 'mcombination',
      name: 'mcombination',
      component: 'unrealized/unrealized',
      meta: { title: '组合素材', keepAlive: true, icon: 'thunderbolt', permission: ['dashboard'] },
    },
    {
      parentId: 142,
      id: 1422,
      path: 'mcombinationSetting',
      name: 'mcombinationSetting',
      component: 'unrealized/unrealized',
      meta: { title: '组合素材配置', keepAlive: true, icon: 'thunderbolt', permission: ['dashboard'] },
    },
  ]
  // 商场中心
  const STORECENTER = [
    {
      parentId: 0,
      id: 15,
      path: '/marketplace',
      name: 'marketplace',
      redirect: 'marketplace/storemanager',
      component: 'unrealized/Index',
      meta: { title: '商场中心', keepAlive: true, icon: 'thunderbolt', permission: ['dashboard'] },
    },
    {
      parentId: 15,
      id: 151,
      path: 'storemanager',
      name: 'storemanager',
      component: 'BlankLayout',
      redirect: 'storemanager/storeIndex',
      meta: { title: '店铺管理', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 151,
      id: 1511,
      path: 'storeIndex',
      name: 'storeIndex',
      component: 'unrealized/unrealized',
      meta: { title: '店铺首页', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 151,
      id: 1512,
      path: 'storefix',
      name: 'storefix',
      component: 'unrealized/unrealized',
      meta: { title: '店铺管理', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 15,
      id: 152,
      path: 'goodmanager',
      name: 'goodmanager',
      component: 'BlankLayout',
      redirect: 'goodmanager/goodsLists',
      meta: { title: '商品管理', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 152,
      id: 1521,
      path: 'goodsLists',
      name: 'goodsLists',
      component: 'unrealized/unrealized',
      meta: { title: '商品列表', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 152,
      id: 1522,
      path: 'goodsTypes',
      name: 'goodsTypes',
      component: 'unrealized/unrealized',
      meta: { title: '商品类型', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 152,
      id: 1523,
      path: 'goodsMaterial',
      name: 'goodsMaterial',
      component: 'unrealized/unrealized',
      meta: { title: '商品素材', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 15,
      id: 153,
      path: 'storeOrder',
      name: 'storeOrder',
      component: 'BlankLayout',
      redirect: 'storeOrder/orderlists',
      meta: { title: '群发工具', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 153,
      id: 1531,
      path: 'orderlists',
      name: 'orderlists',
      component: 'unrealized/unrealized',
      meta: { title: '订单管理', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 153,
      id: 1532,
      path: 'afterSale',
      name: 'afterSale',
      component: 'unrealized/unrealized',
      meta: { title: '售后订单', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 15,
      id: 154,
      path: 'storeMarketing',
      name: 'storeMarketing',
      component: 'BlankLayout',
      redirect: 'storeMarketing/secondkill',
      meta: { title: '营销中心', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 154,
      id: 1541,
      path: 'secondkill',
      name: 'secondkill',
      component: 'unrealized/unrealized',
      meta: { title: '秒杀', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 154,
      id: 1542,
      path: 'jigsaw',
      name: 'jigsaw',
      component: 'unrealized/unrealized',
      meta: { title: '拼图', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 154,
      id: 1543,
      path: 'coupons',
      name: 'coupons',
      component: 'unrealized/unrealized',
      meta: { title: '拼图', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 15,
      id: 155,
      path: 'storeSetting',
      name: 'storeSetting',
      component: 'BlankLayout',
      redirect: 'storeSetting/commonSetting',
      meta: { title: '历史朋友圈', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 155,
      id: 1551,
      path: 'commonSetting',
      name: 'commonSetting',
      component: 'unrealized/unrealized',
      meta: { title: '通用设置', keepAlive: true, permission: ['dashboard'] },
    },
    {
      parentId: 155,
      id: 1552,
      path: 'orderSetting',
      name: 'orderSetting',
      component: 'unrealized/unrealized',
      meta: { title: '订单设置', keepAlive: true, permission: ['dashboard'] },
    },
  ]
  const admin_nav = [...INDEX, ...MARKETING, ...MANAGER, ...CONTENTCENTER, ...STORECENTER]

  // const userNav = {
  //   '4291d7da9005377ec9aec4a71ea837f': admin_nav,
  //   '4391d7da9005377ec9aec4a71ea837f': super_nav,
  // }
  return builder(admin_nav)
}

export default nav()
