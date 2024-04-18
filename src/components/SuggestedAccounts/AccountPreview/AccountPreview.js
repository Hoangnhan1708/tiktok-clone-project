import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c4e568a8db4e1bcb70693de1a82cca77.jpeg?lk3s=a5d48078&x-expires=1713578400&x-signature=dRAl0F1k%2FrGxDSBANR81YGp10Z0%3D"
                    alt=""
                />

                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>dinhdaudinh28</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>dinhdaudinh</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>7.0M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
