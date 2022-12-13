import {
  Box,
  Button,
  Fab,
  TextField,
  Tooltip,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AddIcon from '@mui/icons-material/Add';
import { useAddPlayerHook } from './hooks';
import useStyles from './useStyles';

const AddPlayer = () => {
  const theme = useTheme();
  const {
    newPlayer,
    handleInputChange,
    handlePlayerAvatar,
    addMorePlayer,
    handleSubmit,
    canSubmit,
  } = useAddPlayerHook();
  const styles = useStyles();

  return (
    <Box
      sx={{
        width: '100%',
        padding: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.up('laptop')]: {
          maxWidth: '1200px',
          padding: theme.spacing(5, 0, 5, 0),
        },
      }}
    >
      <form noValidate onSubmit={handleSubmit} style={{ height: '100%' }}>
        {newPlayer.map((inputs, i) => (
          <Box key={i} css={styles.row}>
            <Box css={styles.image}>
              <Tooltip title="Click To Generate Your Avatar" placement="top">
                <IconButton
                  aria-label="generate avatar"
                  onClick={() => handlePlayerAvatar(i)}
                >
                  {inputs.image === '' ? (
                    <AccountCircleSharpIcon />
                  ) : (
                    <img src={inputs.image} alt="avatar" />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
            <Box css={styles.nameBox}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="left"
                fontWeight={600}
                fontSize={theme.spacing(2.5)}
                mb={theme.spacing(2)}
              >
                Name
              </Typography>
              <TextField
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                name="name"
                placeholder="Name"
                onChange={(e) => handleInputChange(e, i)}
                value={inputs.name}
                css={styles.inputField}
              />
            </Box>
            <Box css={styles.nameBox}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="left"
                fontWeight={600}
                fontSize={theme.spacing(2.5)}
                mb={theme.spacing(2)}
              >
                Scores
              </Typography>
              <TextField
                type="number"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                name="scores"
                placeholder="Scores"
                onChange={(e) => handleInputChange(e, i)}
                value={inputs.scores}
                css={styles.inputField}
              />
            </Box>
            <Tooltip title="Add More Player" placement="top">
              <Fab
                aria-label="Add More Player"
                onClick={(e) => addMorePlayer(e)}
                css={styles.button}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Box>
        ))}
        <Button type="submit" disabled={!canSubmit} css={styles.submitButton}>
          Add Player(s)
        </Button>
      </form>
    </Box>
  );
};

export default AddPlayer;
