import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Grid,
  Container,
  Box,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListSubheader,
  ListItemButton,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FolderIcon from "@mui/icons-material/Folder";
import LinkIcon from "@mui/icons-material/Link";
import { useApi } from "../../hooks/useApi";
import ListItemLoader from "../../components/Loader/ListItemLoader";

export default function SharedGroup() {
  let params = useParams();
  let navigate = useNavigate();
  const { get } = useApi();

  const [group, setGroup] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    get("group/public", params.id).then((response) => {
      if (response.id) {
        setGroup(response);
        setIsLoading(false);
      } else {
        navigate("/not-found", { replace: true });
      }
    });
  }, []);

  return (
    <Container maxWidth="xl" style={{ minHeight: "100vh" }}>
      <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {!isLoading ? (
              <List subheader={<ListSubheader>Group</ListSubheader>}>
                <ListItem
                  key={group.id}
                  secondaryAction={
                    <IconButton
                      style={{
                        transform: !isOpen ? `rotate(-180deg)` : "rotate(0deg)",
                        transition: "all .5s ease-in-out",
                      }}
                      aria-label="open"
                      onClick={() => setIsOpen((prevState) => !prevState)}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={group.name}
                    secondary={new Date(group.updatedAt).toLocaleString()}
                  />
                </ListItem>
              </List>
            ) : (
              <ListItemLoader />
            )}
          </Grid>
          <Grid item xs={6}>
            {!isLoading ? (
              isOpen ? (
                <List subheader={<ListSubheader>{group.name}</ListSubheader>}>
                  {group.bookmarks.map((bookmark) => (
                    <ListItem key={bookmark.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <LinkIcon />
                        </Avatar>
                      </ListItemAvatar>

                      <ListItemButton
                        component="a"
                        href={bookmark.url}
                        target="_blank"
                      >
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
                  ))}
                </List>
              ) : null
            ) : (
              <ListItemLoader />
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
