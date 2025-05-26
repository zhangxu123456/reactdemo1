import styled from 'styled-components';
import { Layout } from 'antd';

const { Header: AntHeader, Content: AntContent, Sider: AntSider } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledSider = styled(AntSider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  transition: all 0.2s;
`;

export const StyledHeader = styled(AntHeader)<{ $background: string }>`
  padding: 0;
  background: ${props => props.$background};
  display: flex;
  align-items: center;
`;

export const ToggleButton = styled.div`
  font-size: 16px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledContent = styled(AntContent)<{ $background: string; $borderRadius: number }>`
  margin: 24px 16px;
  padding: 24px;
  min-height: 280px;
  background: ${props => props.$background};
  border-radius: ${props => props.$borderRadius}px;
`; 