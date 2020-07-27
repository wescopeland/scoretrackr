import { ListItem, ListItemText } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

interface SidenavLinkProps {
  label: string;
  to: string;
}

export const SidenavLink = ({ label, to }: SidenavLinkProps) => {
  // TODO: Fix activeClassName
  return (
    <Link passHref={true} href={to}>
      <ListItem button={true} dense={true}>
        <ListItemText>{label}</ListItemText>
      </ListItem>
    </Link>
  );
};
