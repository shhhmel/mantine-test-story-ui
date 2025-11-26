import {
  ButtonProps,
  createTheme,
  CSSProperties,
  MantineColorsTuple,
  MantineTheme,
} from '@mantine/core';

const colors: Record<string, MantineColorsTuple> = {
  primary: [
    '#e9f0fe',
    '#cedafe',
    '#9db6fc',
    '#6b91fa',
    '#4172f8',
    '#2563eb',
    '#1952d7',
    '#1145b9',
    '#0d3a9f',
    '#072f88',
  ],
  secondary: [
    '#f8fafc',
    '#e2e8f0',
    '#cbd5e1',
    '#94a3b8',
    '#64748b',
    '#475569',
    '#334155',
    '#1e293b',
    '#0f172a',
    '#020617',
  ],
  accent: [
    '#f0fdfa',
    '#ccfbf1',
    '#99f6e4',
    '#5eead4',
    '#2dd4bf',
    '#14b8a6',
    '#0d9488',
    '#0f766e',
    '#115e59',
    '#134e4a',
  ],
  success: [
    '#f0fdf4',
    '#dcfce7',
    '#bbf7d0',
    '#86efac',
    '#4ade80',
    '#22c55e',
    '#16a34a',
    '#15803d',
    '#166534',
    '#14532d',
  ],
  warning: [
    '#fefce8',
    '#fef9c3',
    '#fef08a',
    '#fde047',
    '#facc15',
    '#eab308',
    '#ca8a04',
    '#a16207',
    '#854d0e',
    '#713f12',
  ],
  error: [
    '#fef2f2',
    '#fee2e2',
    '#fecaca',
    '#fca5a5',
    '#f87171',
    '#ef4444',
    '#dc2626',
    '#b91c1c',
    '#991b1b',
    '#7f1d1d',
  ],
  info: [
    '#eff6ff',
    '#dbeafe',
    '#bfdbfe',
    '#93c5fd',
    '#60a5fa',
    '#3b82f6',
    '#2563eb',
    '#1d4ed8',
    '#1e40af',
    '#1e3a8a',
  ],
};

export const theme = createTheme({
  colors,
  primaryColor: 'primary',
  fontFamily: 'Inter, sans-serif',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  other: {
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '2.25rem' },
      h2: { fontSize: '1.875rem' },
      h3: { fontSize: '1.5rem' },
      h4: { fontSize: '1.25rem' },
      h5: { fontSize: '1.125rem' },
      h6: { fontSize: '1rem' },
    },
  },
  spacing: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    '4xl': '4rem',
  },
  radius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '1rem',
  },
  defaultRadius: 'md',
  components: {
    Button: {
      styles: {
        root: {
          fontWeight: 500,
          transition: 'all 0.2s ease',
        },
      },
      vars: (_: MantineTheme, props: ButtonProps): { root: CSSProperties | undefined } => {
        if (props.size === 'md') {
          return {
            root: {
              '--button-padding-x': '16px',
              '--button-height': 'auto',
              '--button-padding-y': '8px',
            },
          };
        }
        return { root: {} };
      },
    },
    TextInput: {
      styles: (theme: MantineTheme) => ({
        input: {
          border: `1px solid ${theme.colors.secondary[1]}`,
          '&:focus, &:focusWithin': {
            outline: 'none',
            borderColor: theme.colors.primary[5],
            boxShadow: `0 0 0 2px ${theme.colors.primary[5]}33`,
          },
        },
      }),
    },
    Card: {
      styles: (theme: MantineTheme) => ({
        root: {
          backgroundColor: theme.white,
          border: `1px solid ${theme.colors.secondary[1]}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        },
      }),
    },
  },
});
