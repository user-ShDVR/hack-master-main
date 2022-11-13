import React from 'react'
import ForumIcon from '@mui/icons-material/Forum';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const HeaderData = [
    {
        title: 'Чат',
        path: '/chat',
        icon: <ForumIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Клиенты',
        path: '/list_consultant',
        icon: <GroupIcon />,
        cName: 'nav-text'
    },

    {
        title: 'Профиль',
        path: '/profile',
        icon: <AccountCircleIcon />,
        cName: 'nav-text'
    },

]