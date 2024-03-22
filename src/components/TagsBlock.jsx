import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import TagIcon from '@mui/icons-material/Tag';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { SideBlock } from './SideBlock';

const TagsBlock = ({ items, isLoading }) => {
  const displayItems = isLoading ? Array.from({ length: 5 }) : items.slice(0, 5);

  return (
    <SideBlock title="Tags">
      <List>
        {displayItems.map((name, i) => {
          const listItemContent = isLoading ? (
            <Skeleton width={100} />
          ) : (
            <ListItemText primary={name} />
          );

          return (
            <Link to={`/tags/${name}`} key={name} style={{ textDecoration: 'none', color: 'black' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TagIcon />
                  </ListItemIcon>
                  {listItemContent}
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </SideBlock>
  );
};

export default TagsBlock;
