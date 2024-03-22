import React, { useEffect, useState } from 'react';
import { SideBlock } from './SideBlock';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Skeleton from '@mui/material/Skeleton';
import Axios from '../Axios';

const CommentsBlock = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await Axios.get(`/posts/${postId}/comments`); // Fetch comments for the specified post
        setComments(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setIsLoading(false);
        // Handle errors as needed
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <SideBlock title="Comments">
      <List>
        {(isLoading ? Array.from({ length: 5 }) : comments).map((comment, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {isLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar
                    alt={comment?.user?.fullName || 'No Name'}
                    src={comment?.user?.avatarUrl || ''}
                  />
                )}
              </ListItemAvatar>
              {isLoading ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={230} />
                </div>
              ) : (
                <ListItemText
                  primary={comment?.user?.fullName || 'No Name'}
                  secondary={comment?.text || 'No comment'}
                />
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </SideBlock>
  );
};

export default CommentsBlock;
