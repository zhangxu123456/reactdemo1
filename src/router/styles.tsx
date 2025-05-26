import { createStyles } from 'antd-style';

// 使用antd-style创建样式
export const useStyles = createStyles(({ token }) => ({
  layout: {
    minHeight: '100vh',
  },
  logo: {
    height: 32,
    margin: 16,
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: token.borderRadiusLG,
    transition: 'all 0.2s',
  },
  header: {
    padding: 0,
    background: token.colorBgContainer,
    display: 'flex',
    alignItems: 'center',
  },
  toggleButton: {
    fontSize: '16px',
    width: 64,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    margin: '24px 16px',
    padding: 24,
    minHeight: 280,
    background: token.colorBgContainer,
    borderRadius: token.borderRadiusLG,
  },
})); 