import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

interface SidenavLinkProps {
  label: string;
}

export const SidenavLink = ({ label }: SidenavLinkProps) => {
  return (
    <ListItem button={true} component="a" dense={true}>
      <ListItemText>{label}</ListItemText>
    </ListItem>
  );
};
