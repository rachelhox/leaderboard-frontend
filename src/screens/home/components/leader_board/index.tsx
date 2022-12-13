/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material';
import { getComparator, stableSort } from '@utils';
import { LeaderBoardHead, LeaderBoardBar } from '..';
import { useLeaderBoardHook } from '../../hooks';

const LeaderboardTable = () => {
  const theme = useTheme();
  const {
    selected,
    handleDeletePlayers,
    isConnected,
    order,
    orderBy,
    handleSelectAllClick,
    handleRequestSort,
    players,
    page,
    rowsPerPage,
    isSelected,
    handleClick,
    emptyRows,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useLeaderBoardHook();

  return (
    <Box
      sx={{
        width: '100%',
        padding: 0,
        [theme.breakpoints.up('laptop')]: {
          paddingTop: theme.spacing(5),
          maxWidth: '1200px',
        },
      }}
    >
      <Paper sx={{ width: '100%', mb: 2 }}>
        <LeaderBoardBar
          numSelected={selected.length}
          handleDeletePlayers={handleDeletePlayers}
          isConnected={isConnected}
        />
        <TableContainer>
          <Table
            sx={{
              minWidth: 250,
              [theme.breakpoints.up('laptop')]: { minWidth: 750 },
            }}
            aria-labelledby="tableTitle"
          >
            <LeaderBoardHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={players.length}
            />
            <TableBody>
              {stableSort(players, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((player, index) => {
                  const isItemSelected = isSelected(player.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, player.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={player.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="warning"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {player.name}
                      </TableCell>
                      <TableCell align="right">{player.scores}</TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          img: {
                            borderRadius: '50%',
                            height: '10vh',
                          },
                        }}
                      >
                        <img src={player.image} alt="player's avatar" />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={players.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default LeaderboardTable;
