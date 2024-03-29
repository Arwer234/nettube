import { styled, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import { uiActions } from '../store/ui';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';

//TODO: jest warning odnośnie isMobile - jeśli będziemy coś z tym kombinować to pasuje go wykorzystać, jeśli nie to do wywalenia
const Search = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  display: 'flex',
  alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '2.5rem',
  margin: '1rem',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: theme.zIndex.tooltip,
  [theme.breakpoints.down('desktop')]: {
    color: theme.palette.common.white,
  },
  [theme.breakpoints.up('desktop')]: {
    color: theme.palette.common.black,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  textAlign: 'center',
  borderRadius: theme.radius.sm,
  padding: '10px',
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    marginLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('desktop')]: {
      width: '20ch',
    },
  },
}));

function SearchBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(state => state.ui.searchValue);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(uiActions.onChangeSearchValue(event.target.value));
  };

  return (
    <Search sx={{ marginLeft: 1 }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder="Search videos..."
        inputProps={{ 'aria-label': 'search' }}
        value={searchValue}
        onChange={handleSearchChange}
      />
    </Search>
  );
}
export default SearchBar;
