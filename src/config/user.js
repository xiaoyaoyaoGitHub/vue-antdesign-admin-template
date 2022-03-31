import { builder } from '@/utils/util'

const info = (options) => {
  // const body = getBody(options)
  // const token = body.token
  const admin_user = {
    id: '4291d7da9005377ec9aec4a71ea837f',
    name: 'admin',
    username: 'admin',
    password: '',
    avatar: 'https://tva2.sinaimg.cn/crop.0.0.1006.1006.180/a6a53118jw8fc26p9zxeuj20ry0ryq4l.jpg',
    status: 1,
    telephone: '',
    lastLoginIp: '27.154.74.117',
    lastLoginTime: 1534837621348,
    creatorId: 'admin',
    createTime: 1497160610259,
    merchantCode: 'TLif2btpzg079h15bk',
    deleted: 0,
    roleId: 'admin',
    role: {
      id: 'admin',
      name: '管理员',
      describe: '拥有所有权限',
      status: 1,
      creatorId: 'system',
      createTime: 1497160610259,
      deleted: 0,
      permissions: [
        {
          roleId: 'admin',
          permissionId: 'dashboard',
          permissionName: '仪表盘',
          actions:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          actionEntitySet: [
            {
              action: 'add',
              describe: '新增',
              defaultCheck: false,
            },
            {
              action: 'query',
              describe: '查询',
              defaultCheck: false,
            },
            {
              action: 'get',
              describe: '详情',
              defaultCheck: false,
            },
            {
              action: 'update',
              describe: '修改',
              defaultCheck: false,
            },
            {
              action: 'delete',
              describe: '删除',
              defaultCheck: false,
            },
          ],
          actionList: null,
          dataAccess: null,
        },
        {
          roleId: 'admin',
          permissionId: 'exception',
          permissionName: '异常页面权限',
          actions:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          actionEntitySet: [
            {
              action: 'add',
              describe: '新增',
              defaultCheck: false,
            },
            {
              action: 'query',
              describe: '查询',
              defaultCheck: false,
            },
            {
              action: 'get',
              describe: '详情',
              defaultCheck: false,
            },
            {
              action: 'update',
              describe: '修改',
              defaultCheck: false,
            },
            {
              action: 'delete',
              describe: '删除',
              defaultCheck: false,
            },
          ],
          actionList: null,
          dataAccess: null,
        },
        {
          roleId: 'admin',
          permissionId: 'result',
          permissionName: '结果权限',
          actions:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          actionEntitySet: [
            {
              action: 'add',
              describe: '新增',
              defaultCheck: false,
            },
            {
              action: 'query',
              describe: '查询',
              defaultCheck: false,
            },
            {
              action: 'get',
              describe: '详情',
              defaultCheck: false,
            },
            {
              action: 'update',
              describe: '修改',
              defaultCheck: false,
            },
            {
              action: 'delete',
              describe: '删除',
              defaultCheck: false,
            },
          ],
          actionList: null,
          dataAccess: null,
        },
      ],
    },
  }
  const super_user = {
    id: '4391d7da9005377ec9aec4a71ea837f',
    name: 'super',
    username: 'super',
    password: '',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
    status: 1,
    telephone: '',
    lastLoginIp: '27.154.74.117',
    lastLoginTime: 1534837621348,
    creatorId: 'admin',
    createTime: 1497160610259,
    merchantCode: 'TLif2btpzg079h15bk',
    deleted: 0,
    roleId: 'admin',
    role: {
      id: 'admin',
      name: '管理员',
      describe: '拥有所有权限',
      status: 1,
      creatorId: 'system',
      createTime: 1497160610259,
      deleted: 0,
      permissions: [
        {
          roleId: 'admin',
          permissionId: 'dashboard',
          permissionName: '仪表盘',
          actions:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          actionEntitySet: [
            {
              action: 'add',
              describe: '新增',
              defaultCheck: false,
            },
            {
              action: 'query',
              describe: '查询',
              defaultCheck: false,
            },
            {
              action: 'get',
              describe: '详情',
              defaultCheck: false,
            },
            {
              action: 'update',
              describe: '修改',
              defaultCheck: false,
            },
            {
              action: 'delete',
              describe: '删除',
              defaultCheck: false,
            },
          ],
          actionList: null,
          dataAccess: null,
        },
        {
          roleId: 'admin',
          permissionId: 'exception',
          permissionName: '异常页面权限',
          actions:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          actionEntitySet: [
            {
              action: 'add',
              describe: '新增',
              defaultCheck: false,
            },
            {
              action: 'query',
              describe: '查询',
              defaultCheck: false,
            },
            {
              action: 'get',
              describe: '详情',
              defaultCheck: false,
            },
            {
              action: 'update',
              describe: '修改',
              defaultCheck: false,
            },
            {
              action: 'delete',
              describe: '删除',
              defaultCheck: false,
            },
          ],
          actionList: null,
          dataAccess: null,
        },
        {
          roleId: 'admin',
          permissionId: 'result',
          permissionName: '结果权限',
          actions:
            '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
          actionEntitySet: [
            {
              action: 'add',
              describe: '新增',
              defaultCheck: false,
            },
            {
              action: 'query',
              describe: '查询',
              defaultCheck: false,
            },
            {
              action: 'get',
              describe: '详情',
              defaultCheck: false,
            },
            {
              action: 'update',
              describe: '修改',
              defaultCheck: false,
            },
            {
              action: 'delete',
              describe: '删除',
              defaultCheck: false,
            },
          ],
          actionList: null,
          dataAccess: null,
        },
      ],
    },
  }
  //   const userInfo = {
  //     '4291d7da9005377ec9aec4a71ea837f': admin_user,
  //     '4391d7da9005377ec9aec4a71ea837f': super_user,
  //   }
  return builder(admin_user)
}

export default info()
