import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    marginLeft: 10,
    width: '38%',
    display:'flex',
    color:'black'
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: 5,
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'blue'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    fontSize:'unset',
    borderRadius:0,
    width:'100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: 20,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
      
    },
  }));

const SearchBar=()=>{

    return (
       <Search>
            <StyledInputBase
              placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
            >
            </StyledInputBase>
            
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

        </Search>
    )
}

export default  SearchBar;