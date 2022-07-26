import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

interface ListItemProps {
  context: string;
  balance: number;
}

export const ListItem = ({ context, balance }: ListItemProps) => {
  return (
    <div className={cx('wrap')}>
      <div className={cx('balance-inner')}>
        <span className={cx('emoji')}>💵</span>
        <p className={cx('context')}>{context}</p>
        <p className={cx('balance')}>{balance.toLocaleString()} 원</p>
      </div>
    </div>
  );
};
