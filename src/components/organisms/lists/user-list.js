import { Div, Img, Li, P, Time, Ul } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

// Sample User Data (this could come from a backend or be passed as props)
const users = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    role: 'Co-Founder / CEO',
    lastSeen: '2023-01-23T13:23Z',
    status: 'offline'
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    role: 'Co-Founder / CTO',
    lastSeen: '2023-01-23T13:23Z',
    status: 'offline'
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    role: 'Business Relations',
    status: 'online'
  },
  // Add more users as necessary
];

/**
 * User Image Atom
 */
const UserImage = Atom(({ src, alt }) => {
  return Img({
    class: 'h-12 w-12 flex-none rounded-full bg-gray-50',
    src: src,
    alt: alt
  });
});

/**
 * User Info Atom
 */
const UserInfo = Atom(({ name, email }) => {
  return Div(
    { class: 'min-w-0 flex-auto' },
    [
      P({ class: 'text-sm font-semibold leading-6 text-gray-900' }, name),
      P({ class: 'mt-1 truncate text-xs leading-5 text-gray-500' }, email)
    ]
  );
});

/**
 * User Online Atom
 *
 * @returns {object}
 */
const UserOnline = Atom(() =>
{
    return Div({ class: 'mt-1 flex items-center gap-x-1.5' }, [
            Div({ class: 'flex-none rounded-full bg-emerald-500/20 p-1' }, [
                Div({ class: 'h-1.5 w-1.5 rounded-full bg-emerald-500' })
            ]),
            P({ class: 'text-xs leading-5 text-gray-500' }, 'Online')
        ]
    );
});

/**
 * User Offline Atom
 *
 * @param {string} lastSeen
 * @returns {object}
 */
const UserOffline = (lastSeen) =>
{
    return P({ class: 'mt-1 text-xs leading-5 text-gray-500' }, [
        Span(`Last seen `),
        Time({ datetime: lastSeen }, '3h ago')
    ]);
};

/**
 * User Status Atom
 */
const UserStatus = Atom(({ role, lastSeen, status }) => {
  return Div({ class: 'hidden shrink-0 sm:flex sm:flex-col sm:items-end' }, [
      P({ class: 'text-sm leading-6 text-gray-900' }, role),
      status === 'online'
        ? UserOnline()
        : UserOffline({ lastSeen })
    ]
  );
});

/**
 * User List Item Atom.
 *
 * @param {object} props
 * @returns {object}
 */
const UserListItem = Atom(({ user }) => {
    return Li({ class: 'flex justify-between gap-x-6 py-5' }, [
        Div({ class: 'flex min-w-0 gap-x-4' }, [
            UserImage({ src: user.image, alt: user.name }),
            UserInfo({ name: user.name, email: user.email })
        ]),
        UserStatus({
            role: user.role,
            lastSeen: user.lastSeen,
            status: user.status
        })
    ]);
});

/**
 * User List Atom
 *
 * @param {object} props
 * @returns {object}
 */
const UserList = Atom((props) => {
  return Ul(
    {
        ...props,
        role: 'list',
        class: 'divide-y divide-gray-100',
        map: [props.items, UserListItem]
    }
  );
});

export default UserList;