import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  {
    label: '栏目1',
    key: '/page1',
    icon: <PieChartOutlined />
  },
  {
    label: '栏目2',
    key: '/page2',
    icon: <DesktopOutlined />
  },
  {
    label: '栏目3',
    key: '/page3',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目 301',
        key: '/page3/page301'
      },
      {
        label: '栏目 302',
        key: '/page3/page302'
      },
      {
        label: '栏目 303',
        key: '/page3/page303'
      },
    ]
  },
  {
    label: '栏目4',
    key: '/page4',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目 401',
        key: '/page4/page401'
      },
      {
        label: '栏目 402',
        key: '/page4/page402'
      },
      {
        label: '栏目 403',
        key: '/page4/page403'
      },
    ]
  },
  {
    label: '栏目5',
    key: '/page5',
    icon: <FileOutlined />
  },
  {
    label: '栏目6',
    key: '/page6',
    icon: <FileOutlined />
  },
  {
    label: '栏目7',
    key: '/page7',
    icon: <FileOutlined />
  },
  {
    label: '栏目8',
    key: '/page8',
    icon: <FileOutlined />
  }
]

const filterOponKey = (items: MenuItem[], pathname: string): any => {
  return items.find((item:any) => {
    if (item?.children) {
      return filterOponKey(item.children, pathname)
    } else {
      return item.key === pathname
    }
  })
}


export default function MenuList() {
  const [openKeys, setOpenKeys] = useState(['']);
  const navigateTo = useNavigate()
  const currentRoute = useLocation() // 当前路由
  useEffect(() => {
    const OponItemKey = filterOponKey(items, currentRoute.pathname)
    setOpenKeys([`${OponItemKey.key}`])
  }, [])


  //console.log(OponItemKey.key)



  const menuClick = (e: { key: string }) => {
    navigateTo(e.key)
  }
  const handleOpenChange = (key: string[]) => {
    setOpenKeys([`${key.slice(-1)}`])
  }
  return (
    <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    />
  )
}