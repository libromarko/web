import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SettingsIcon from "@mui/icons-material/Settings";
import { useApi } from "../../hooks/useApi";
import ListItemLoader from '../Loader/ListItemLoader';

export default function Group() {
  const { get } = useApi();
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = () => {
    get("group/user").then((response) => {
      setGroups(response);
      setIsLoading(false);
    });
  };

  return (
    <List subheader={<ListSubheader>Groups</ListSubheader>}>
      {!isLoading ?
        groups.map((group) => (
          <ListItem
            key={group.id}
            secondaryAction={
              <>
                <IconButton aria-label="settings">
                  <SettingsIcon />
                </IconButton>
                <IconButton aria-label="open">
                  <ArrowForwardIosIcon />
                </IconButton>
              </>
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
        )) : <ListItemLoader />}
      <Divider />
      <ListItemButton onClick={(event) => console.log("add new")}>
        <ListItemIcon>
          <CreateNewFolderIcon />
        </ListItemIcon>
        <ListItemText primary="Add New Group" />
      </ListItemButton>
    </List>
  );
}
