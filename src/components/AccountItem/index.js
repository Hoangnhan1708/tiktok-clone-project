import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/:${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} className={cx('avatar')} alt={data.full_name} />
            <div className={cx('info')}>
                <span className={cx('username')}>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </span>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                </p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;
