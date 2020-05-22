export default {
  'get|/menu/authMenuList': {
    code: 200,
    message: 'success',
    data: {
      'data|0-1': [{
        menuId: '@guid',
        "menuName":"主页",
        'path': '/home',
        open: false,
        'icon':'house-fill',
        'child': []
      },{
        menuId: '@guid',
        menuName: "系统管理",
        path:  '#',
        open: false,
        icon: 'calendar-fill',
        'child|4': [{
          id: '@guid',
          "menuName|+1": [
            "用户管理",
            "菜单管理",
            "角色管理",
            "部门管理",
          ],
          'path|+1': ['/user', '/menu', '/role', '/department'],
          open: false,
          'icon|+1': ['person-bounding-box', 'view-stacked', 'layout-text-window', "display-fill"],
          'child': []
        }]
      }]
    }
  },
  'get|/sys/user/list': {
    code: 200,
    message: 'success',
    data: {
      "fields|8": [
        {
          "key|+1": ["index", "username", "nickname", "portrait", "enable", "createDate", "updateDate", "oper"],
          "label|+1": ["序号", "用户名", "昵称", "头像", "状态", "创建时间", "更新时间", "操作"],
          "sortable|+1": [false, false, false, false, false, true, true, false]
        }

      ],
      "items": {
        startRow: 1,
        pageSize: 10,
        endRow: 10,
        total: 100,
        pages: 100,
        "data|10": [{
          key: "",
          username: "@name",
          nickname: "@cname()",
          portrait: '',
          enable: true,
          createDate: '@datetime("yyyy年MM月dd日 HH:mm:ss")',
          updateDate: '@datetime("yyyy年MM月dd日 HH:mm:ss")',
          "oper|3": [{
            "icon|+1": ["pencil-square", "unlock-fill", "trash-fill"],
          }]
        }]
      }
    }
  }
} 