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
import { useDispatch } from "react-redux";
import FolderIcon from "@mui/icons-material/Folder";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SettingsIcon from "@mui/icons-material/Settings";
import { useApi } from "../../hooks/useApi";
import ListItemLoader from "../Loader/ListItemLoader";
import { logout } from "../../store/services/auth.service";

export default function Group({
  selectedGroup,
  setSelectedGroup,
  setOpenEditGroupSection,
  updatedGroups,
}) {
  const { get } = useApi();
  const dispatch = useDispatch();

  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGroups();
  }, [updatedGroups]);

  const fetchGroups = () => {
    get("group/user").then((response) => {
      if (response.statusCode === 500) {
        dispatch(logout());
      }
      setGroups(response);
      setIsLoading(false);
    });
  };

  const handleSelectedGroup = (group) => {
    if (group.id === selectedGroup?.id) {
      setSelectedGroup(null);
    } else {
      setSelectedGroup(group);
    }
  };

  return (
    <List subheader={<ListSubheader>Groups</ListSubheader>}>
      <ListItemButton
        onClick={() =>
          setOpenEditGroupSection(() => ({
            group: null,
            isOpen: true,
          }))
        }
      >
        <ListItemIcon>
          <CreateNewFolderIcon />
        </ListItemIcon>
        <ListItemText primary="New Group" />
      </ListItemButton>
      <Divider />
      {!isLoading ? (
        groups.map((group) => (
          <ListItem
            key={group.id}
            secondaryAction={
              <>
                {group.name !== "inbox" ? (
                  <IconButton
                    aria-label="settings"
                    onClick={() =>
                      setOpenEditGroupSection({
                        group: group,
                        isOpen: true,
                      })
                    }
                  >
                    <SettingsIcon />
                  </IconButton>
                ) : null}
                <IconButton
                  style={{
                    transform:
                      selectedGroup?.id === group.id
                        ? `rotate(-180deg)`
                        : "rotate(0deg)",
                    transition: "all .5s ease-in-out",
                  }}
                  aria-label="open"
                  onClick={() => handleSelectedGroup(group)}
                >
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
        ))
      ) : (
        <ListItemLoader />
      )}
    </List>
  );
}
