import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import {
    HomeIcon,
    UserFollowedIcon,
    UserGroupIcon,
    CompassIcon,
    LiveIcon,
    HomeIconActive,
    UserGroupIconActive,
    CompassIconActive,
    LiveIconActive,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserFollowedIcon />}
                    activeIcon={<UserFollowedIcon />}
                ></MenuItem>
                <MenuItem
                    title="Friends"
                    to={config.routes.friends}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                ></MenuItem>
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<CompassIcon />}
                    activeIcon={<CompassIconActive />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive />}
                ></MenuItem>
            </Menu>
            <SuggestedAccounts label="Suggested Accounts"></SuggestedAccounts>
            <SuggestedAccounts label="Following Accounts"></SuggestedAccounts>
        </aside>
    );
}

export default Sidebar;
