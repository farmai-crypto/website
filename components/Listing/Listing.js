import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const ListingItem = ({icon, text}) => {
  return (
    <ListItem disablepadding="true">
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
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