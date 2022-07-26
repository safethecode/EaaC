import { useCallback, ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

interface SectionProps {
  children?: ReactNode;
  context: string;
  isArrow?: boolean;
}

type Props = SectionProps & HTMLAttributes<HTMLDivElement>;

export const Section = ({ children, context, isArrow, onClick }: Props) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      return onClick && onClick(e);
    },
    [onClick],
  );
  return (
    <section className={cx('wrap')}>
      <div
        className={cx('inner', {
          'has-children': children,
        })}
        onClick={handleClick}
      >
        <p className={cx('context')}>{context}</p>
        {isArrow ? (
          <img src="/assets/right-arrow.svg" alt="right-arrow" />
        ) : null}
      </div>
      {children}
    </section>
  );
};
