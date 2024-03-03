import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <WrapperPopper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack}></Header>}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </WrapperPopper>
        </div>
    );

    // Reset to first page
    const handleResetMenu = (prev) => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            interactive
            hideOnClick={hideOnClick}
            delay={[0, 500]}
            offset={[10, 10]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
