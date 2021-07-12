import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: '',
        items: ['summary', 'tickets'],
    }
];

export const sideNavItems: SideNavItems = {
    summary: {
        icon: '',
        text: 'SUMMARY',
        link: '/dashboard',
    },
    tickets: {
        icon: '',
        text: 'TICKETS',
        submenu: [
            {
                text: 'Reports',
                link: '/dashboard/tickets/reports',
            },
            {
                text: 'Detail',
                link: '/dashboard/tickets/details',
            }
        ],
    }
};
