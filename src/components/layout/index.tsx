/* eslint-disable react/no-unknown-property */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Box, useTheme } from '@mui/material';

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  type?: string;
};

const Layout = ({
  children,
  title = 'Leaderboard',
  description = 'A web app displaying real-time leaderboard',
  type = 'website',
}: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const currentPath = router.asPath === '/' ? '/' : `${router.asPath}`;
  const url = process.env.NEXT_PUBLIC_URL;
  return (
    <Box position="relative">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:type"
          content={type}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content={title}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:site_name"
          content="Leaderboard"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content={`${url}${currentPath}`}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content={description}
        />
      </Head>
      <Box
        sx={{
          background: 'transparent',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 0',
            backgroundSize: 'cover',
            [theme.breakpoints.up('laptop')]: {
              backgroundSize: '100%',
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
