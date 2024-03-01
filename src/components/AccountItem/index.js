import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ac780f32b0eec68c6075b2f8148ca06c~c5_300x300.webp?lk3s=a5d48078&x-expires=1709179200&x-signature=fOSNVR56KlU5Rq6Lohn4TzK9dbc%3D"
                className={cx('avatar')}
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <span className={cx('username')}>
                    hoangnhan
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </span>
                <p className={cx('name')}>
                    <span>Truong Hoang Nhan</span>
                </p>
            </div>
        </div>
    );
}

export default AccountItem;
