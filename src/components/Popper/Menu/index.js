import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as WrapperPopper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1">
                    <WrapperPopper className={cx('menu-popper')}>{renderItems()}</WrapperPopper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
