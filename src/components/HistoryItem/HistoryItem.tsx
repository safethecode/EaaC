import classNames from 'classnames/bind';
import styles from './HistoryItem.module.scss';

const cx = classNames.bind(styles);

interface HistoryItemProps {
  context: string;
  expense: number;
  expend: boolean;
  balance: number;
  createdAt: string;
}

export const HistoryItem = ({
  context,
  expense,
  expend,
  balance,
  createdAt,
}: HistoryItemProps) => {
  return (
    <li className={cx('wrap')}>
      <div className={cx('inner-info')}>
        <p className={cx('context')}>{context.substring(0, 20 - 3) + '...'}</p>
        <p className={cx('createdAt')}>{createdAt}</p>
      </div>
      <div className={cx('inner-cash')}>
        <p
          className={cx('expense', {
            expend: expend,
          })}
        >
          {expend ? '-' : null}
          {expense.toLocaleString()}원
        </p>
        <p className={cx('balance')}>{balance.toLocaleString()}원</p>
      </div>
    </li>
  );
};
