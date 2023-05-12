import { createMuiTheme, List, ListItem, ListItemIcon, ListItemText, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  components: {
    // Name of the component
    MuiListItemText: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '2.2rem',
        },
      },
    },
  },
});


const ListingItem = ({iconStyle, icon, textStyle, text, style}) => {
  return (
    <ListItem disablepadding="true" style={style}>
      <ListItemIcon style={iconStyle}>
        {icon}
      </ListItemIcon>
      <ThemeProvider theme={theme}>
        <ListItemText style={textStyle} primary={text} />
      </ThemeProvider>
    </ListItem>
  );
}

const Listing = ({children}) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {children}
    </List>
  );
}

export {
  Listing,
  ListingItem
};