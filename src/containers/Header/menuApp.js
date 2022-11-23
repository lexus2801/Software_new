export const adminMenu = [
    { //hệ thống
        name: 'menu.system.header', menus: [
            {
                name: 'menu.system.system-administrator.header',
                subMenus: [
                   
                    { name: 'menu.system.system-administrator.customer-manage', link: '/system/customer-manage' },
                    { name: 'menu.system.system-administrator.news-manage', link: '/system/news-manage' },
                    { name: 'menu.system.system-administrator.product-manage', link: '/system/product-manage' },
                    { name: 'menu.system.system-administrator.orders-manage', link: '/system/orders-manage' },
                ]
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
];