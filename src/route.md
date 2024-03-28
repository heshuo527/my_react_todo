id: dashboard
      path: '/dashboard'
      name: '工作台'
      icon: 'icon-home'
    - id: order
      path: '/order'
      name: '订单管理'
      icon: 'icon-orders'
      children:
      - id: order:bus
        path: '/order/bus'
        name: '巴士订单'
      - id: order:cc
        path: '/order/cc'
        name: '包车订单'
      - id: order:sc
        path: '/order/sc'
        name: '专线订单'
      - id: order:rs
        path: '/order/rs'
        name: '拼车订单'
      - id: order:ticket
        path: '/order/ticket'
        name: '车票管理'
      - id: order:day-cc
        path: '/order/day-cc'
        name: '按日包车'
    - id: task
      path: '/task'
      name: '任务管理'
      icon: 'icon-renwu1'
      children:
      - id: task:cc
        path: '/task/cc'
        name: '包车任务'
      - id: task:sc
        path: '/task/sc'
        name: '专线任务'
      - id: task:rs
        path: '/task/rs'
        name: '拼车任务'
    - id: price
      path: '/price'
      name: '线路价格'
      icon: 'icon-prices'
      children:
      - id: price:cc
        path: '/price/cc'
        name: '包车价格'
      - id: price:sc
        path: '/price/sc'
        name: '专线价格'
      - id: price:surcharge
        path: '/price/surcharge'
        name: '附加费管理'
      - id: price:port
        path: '/price/port'
        name: '口岸设置'
      - id: price:region
        path: '/price/region'
        name: '区域设置'
      - id: price:cc-station
        path: '/price/cc-station'
        name: '包车站点'
      - id: price:bus-station
        path: '/price/bus-station'
        name: '巴士站点'
      - id: price:sc-station
        path: '/price/sc-station'
        name: '专线站点'
    - id: customer
      path: '/customer'
      name: '客户管理'
      icon: 'icon-customers'
    - id: partner
      path: '/partner'
      name: '合伙人管理'
      icon: 'icon-partner'
    - id: company
      path: '/company'
      name: '承运商管理'
      icon: 'icon-company'
      children:
      - id: company:info
        path: '/company/info'
        name: '承运商信息'
      - id: company:vehicle
        path: '/company/vehicle'
        name: '车辆管理'
      - id: company:driver
        path: '/company/driver'
        name: '司机管理'
      - id: company:dispatcher
        path: '/company/dispatcher'
        name: '调度员管理'
    - id: channel
      path: '/channel'
      name: '渠道管理'
      icon: 'icon-channel'
    - id: account
      path: '/account'
      name: '账务管理'
      icon: 'icon-account'
      children:
      - id: account:company
        path: '/account/company'
        name: '公司分账'
      - id: account:partner
        path: '/account/partner'
        name: '合伙人分账'
      - id: account:abnormal
        path: '/account/abnormal'
        name: '分账异常'
      - id: account:refund
        path: '/account/refund'
        name: '退款管理'
    - id: market
      path: '/market'
      name: '营销管理'
      icon: 'icon-yingxiao'
      children:
      - id: market:activity
        path: '/market/activity'
        name: '活动管理'
      - id: market:coupon
        path: '/market/coupon'
        name: '卡券管理'
    - id: feedback
      path: '/feedback'
      name: '用户反馈'
      icon: 'icon-feedback'
    - id: report
      path: '/report'
      name: '报表统计'
      icon: 'icon-report'
      children:
      - id: report:order
        path: '/report/order'
        name: '订单车票报表统计'
    - id: sys
      path: '/sys'
      name: '系统设置'
      icon: 'icon-shezhi'
      children:
      - id: sys:dicts
        path: '/sys/dicts'
        name: '数据字典'
      - id: sys:role
        path: '/sys/role'
        name: '角色权限'
      - id: sys:user
        path: '/sys/user'
        name: '用户管理'
      - id: sys:log
        path: '/sys/log'
        name: '日志管理'
      - id: sys:xcx
        path: '/sys/xcx'
        name: '小程序管理'
      - id: sys:rule
        path: '/sys/rule'
        name: '规则管理'
      - id: sys:notify
        path: '/sys/notify'
        name: '通知管理'