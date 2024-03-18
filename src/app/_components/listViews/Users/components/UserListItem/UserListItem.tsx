'use client';
import styled from '@emotion/styled';
import { Span } from '@jumbo/shared';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Avatar,
  Badge,
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { UsersListType } from '../../data';

const Item = styled(Span)(({ theme }) => ({
  padding: theme.spacing(0, 1),
}));

const UserListItem = ({ user }: { user: UsersListType }) => {
  const [bookmark, setBookmark] = React.useState<boolean>(user?.isFavorite);

  const handleClick = React.useCallback(() => {
    setBookmark(!bookmark);
  }, [bookmark]);
  return (
    <Card sx={{ mb: 1 }}>
      <Stack
        direction={'row'}
        alignItems={'center'}
        sx={{ p: (theme) => theme.spacing(2, 1) }}
      >
        <Item
          sx={{
            flex: { xs: 1, md: '0 1 45%', lg: '0 1 35%' },
          }}
        >
          <Stack direction={'row'} alignItems={'center'}>
            <Item sx={{ ml: -1 }}>
              <IconButton
                onClick={handleClick}
                sx={{ verticalAlign: 'middle' }}
              >
                {bookmark ? (
                  <StarIcon fontSize={'small'} color={'warning'} />
                ) : (
                  <StarBorderIcon fontSize={'small'} />
                )}
              </IconButton>
              {/* <JumboBookmark
                value={user.isFavorite}
                sx={{ verticalAlign: 'middle' }}
              /> */}
            </Item>
            <Item>
              <Badge
                overlap='circular'
                variant='dot'
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                sx={{
                  '.MuiBadge-badge': {
                    border: '2px solid #FFF',
                    height: '14px',
                    width: '14px',
                    borderRadius: '50%',
                    bgcolor: user.isOnline ? 'success.main' : '#757575',
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                  }}
                  alt={`${user.firstName} 
                                    ${user.lastName}`}
                  src={user.profilePic}
                />
              </Badge>
            </Item>
            <Item>
              <Typography
                variant={'h6'}
                mb={0.5}
              >{`${user.firstName} ${user.lastName}`}</Typography>
              <Typography variant={'body1'} color='text.secondary'>
                {user.handle}
              </Typography>
            </Item>
          </Stack>
        </Item>
        <Item
          sx={{
            alignSelf: 'flex-start',
            flexBasis: { md: '28%', lg: '18%' },
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Typography variant={'h6'} mt={1} lineHeight={1.25}>
            {user.title}
          </Typography>
        </Item>
        <Item
          sx={{
            flexBasis: '30%',
            display: { xs: 'none', lg: 'block' },
          }}
        >
          <Stack
            spacing={2}
            direction={'row'}
            alignItems={'center'}
            sx={{ textAlign: 'center' }}
          >
            <Item>
              <Typography variant={'h6'} mb={0.5}>
                {user.summary.views}
              </Typography>
              <Typography variant={'body1'} color='text.secondary'>
                Views
              </Typography>
            </Item>
            <Item>
              <Typography variant={'h6'} mb={0.5}>
                {user.summary.projects}
              </Typography>
              <Typography variant={'body1'} color='text.secondary'>
                Project
              </Typography>
            </Item>
            <Item>
              <Typography variant={'h6'} mb={0.5}>
                {user.summary.followers}
              </Typography>
              <Typography variant={'body1'} color='text.secondary'>
                Followers
              </Typography>
            </Item>
          </Stack>
        </Item>
        <Item
          sx={{
            ml: 'auto',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Button
            sx={{ minWidth: 92 }}
            disableElevation
            variant={'contained'}
            size={'small'}
            color={user.isFollowing ? 'error' : 'primary'}
          >
            {user.isFollowing ? 'Unfollow' : 'Follow'}
          </Button>
        </Item>
        <Item sx={{ ml: { xs: 'auto', sm: 0 } }}>
          <IconButton aria-label='settings'>
            <MoreHorizIcon />
          </IconButton>
        </Item>
      </Stack>
    </Card>
  );
};

export { UserListItem };
