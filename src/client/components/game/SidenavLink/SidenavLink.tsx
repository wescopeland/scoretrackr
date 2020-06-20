import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

interface SidenavLinkProps {
  label: string;
  to: string;
}

export const SidenavLink = ({ label, to }: SidenavLinkProps) => {
  return (
    <ListItem button={true} component={Link} to={to} dense={true}>
      <ListItemText>{label}</ListItemText>
    </ListItem>
  );
};
