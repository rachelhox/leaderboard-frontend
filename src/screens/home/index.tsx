import { Box } from '@mui/material';
import { Layout, AddPlayer } from '@components';
import { LeaderboardTable } from './components';

const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LeaderboardTable />
        <AddPlayer />
      </Box>
    </Layout>
  );
};

export default Home;
