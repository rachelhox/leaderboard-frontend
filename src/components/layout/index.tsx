/* eslint-disable react/no-unknown-property */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import Head from 'next/head';
import validator from 'validator';
import { useRouter } from 'next/router';
import { Box, useTheme } from '@mui/material';

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  type?: string;
  image?: string;
};

const Layout = ({
  children,
  title = 'Leaderboard',
  description = 'A web app displaying real-time leaderboard',
  type = 'website',
  image,
}: Props) => {
  const theme = useTheme();
  const router = useRouter();
  const currentPath = router.asPath === '/' ? '/' : `${router.asPath}`;
  const url = process.env.NEXT_PUBLIC_URL;
  let ogImage = image ?? `${url}/static/icons/favicon-96x96.png`;
  if (!validator.isURL(ogImage)) {
    ogImage = `${url}${ogImage}`;
  }
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
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content={ogImage}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${url}/icons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${url}/icons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${url}/icons/site.webmanifest`} />
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
