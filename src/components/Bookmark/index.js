import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListSubheader,
  Divider,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import AddLinkIcon from "@mui/icons-material/AddLink";
import SettingsIcon from "@mui/icons-material/Settings";
import { useApi } from "../../hooks/useApi";

import ListItemLoader from "../Loader/ListItemLoader";

export default function Bookmark({
  selectedGroup,
  setOpenEditBookmarkSection,
  updatedBookmarks,
}) {
  const { get } = useApi();

  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBookmarks();
  }, [updatedBookmarks]);

  const fetchBookmarks = () => {
    if (selectedGroup) {
      get(`bookmark/group/${selectedGroup.id}`).then((response) => {
        setBookmarks(response);
        setIsLoading(false);
      });
    }
  };

  return (
    <List subheader={<ListSubheader>{selectedGroup.name}</ListSubheader>}>
      <ListItemButton
        onClick={() =>
          setOpenEditBookmarkSection({
            bookmark: null,
            isOpen: true,
          })
        }
      >
        <ListItemIcon>
          <AddLinkIcon />
        </ListItemIcon>
        <ListItemText primary="New Bookmark" />
      </ListItemButton>
      <Divider />
      {!isLoading ? (
        bookmarks.map((bookmark) => (
          <ListItem
            key={bookmark.id}
            secondaryAction={
              <IconButton
                aria-label="settings"
                onClick={() =>
                  setOpenEditBookmarkSection({
                    bookmark: bookmark,
                    isOpen: true,
                  })
                }
              >
                <SettingsIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <LinkIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemButton component="a" href={bookmark.url} target="_blank">
              <ListItemText
                primary={
                  bookmark.description
                    ? bookmark.description
                    : "Doesn't have a description."
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {bookmark.url.length > 30
                        ? bookmark.url.slice(0, 30) + "..."
                        : bookmark.url}
                    </Typography>
                    <br />
                    {new Date(bookmark.createdAt).toLocaleString()}
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
        ))
      ) : (
        <ListItemLoader />
      )}
    </List>
  );
}
