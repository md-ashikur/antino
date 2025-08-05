// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    // Color palette
    colorPrimary: '#6366f1',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    colorInfo: '#3b82f6',
    
    // Background colors
    colorBgBase: '#ffffff',
    colorBgContainer: '#f8fafc',
    colorBgElevated: '#ffffff',
    
    // Text colors
    colorTextBase: '#0f172a',
    colorTextSecondary: '#64748b',
    colorTextTertiary: '#94a3b8',
    
    // Border
    colorBorder: '#e2e8f0',
    colorBorderSecondary: '#f1f5f9',
    
    // Layout
    borderRadius: 12,
    wireframe: false,
    
    // Typography
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 14,
    fontSizeHeading1: 48,
    fontSizeHeading2: 32,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    
    // Spacing
    marginLG: 24,
    marginMD: 16,
    marginSM: 12,
    marginXS: 8,
    
    // Shadows
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    boxShadowSecondary: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  },
  components: {
    Button: {
      borderRadius: 8,
      fontWeight: 500,
      paddingContentHorizontal: 24,
      paddingContentVertical: 12,
      colorPrimary: '#6366f1',
      colorPrimaryHover: '#5b5bd6',
      colorPrimaryActive: '#5149c7',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    Card: {
      borderRadius: 16,
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      colorBgContainer: '#ffffff',
      paddingLG: 24,
    },
    Input: {
      borderRadius: 8,
      fontSize: 14,
      colorBorder: '#e2e8f0',
    },
    Typography: {
      colorTextHeading: '#0f172a',
      colorText: '#334155',
      colorTextSecondary: '#64748b',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
    Menu: {
      borderRadius: 8,
      itemBorderRadius: 6,
      itemSelectedColor: '#6366f1',
      itemSelectedBg: '#f0f0ff',
    },
    Avatar: {
      borderRadius: 12,
    },
    Tag: {
      borderRadius: 20,
    },
    Progress: {
      colorSuccess: '#10b981',
    },
    Statistic: {
      colorTextHeading: '#0f172a',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },
  },
};

export default theme;