import { Button, Select, Option } from '@supabase/ui';
import { GNBLayout, Section } from 'components/Layouts';
import { ListItem } from 'components/ListItem';
import { HistoryItem } from 'components/HistoryItem';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { Input } from 'components/Input';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const cx = classNames.bind(styles);

export const Main = ({ balanceData, accountData }: any) => {
  const [open, setOpen] = useState(false);
  function onDismiss() {
    setOpen(false);
  }
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    axios.post('http://61.97.184.99/account', {
      expend: data.expend === '지출' ? true : false,
      context: data.context,
      subject: data.subject,
      price: Number(data.price),
    });
    console.log(data);
    onDismiss();
  };

  return (
    <GNBLayout>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
      >
        <div className={cx('sheet')}>
          <p className={cx('sheet-header')}>수입과 지출을 기록할 수 있어요.</p>
          <span className={cx('sheet-description')}>
            한 번 기록되면 수정할 수 없으니, 잘 확인해주세요!
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cx('sheet-body')}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <select className={cx('sheet-select')} {...register('expend')}>
                  <option value="" disabled selected>
                    수입/지출 선택
                  </option>
                  <option value="수입">수입</option>
                  <option value="지출">지출</option>
                </select>
                <select className={cx('sheet-select')} {...register('subject')}>
                  <option value="" disabled selected>
                    계정과목 선택
                  </option>
                  <option value="개인회비">개인회비</option>
                  <option value="사역비">사역비</option>
                  <option value="진행비">진행비</option>
                  <option value="교회지원비">교회지원비</option>
                  <option value="선교후원금">선교후원금</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <Input
                type="text"
                placeholder="내용을 입력해주세요."
                {...register('context')}
                onBlur={(e) => setValue('context', e.target.value)}
                autoComplete="off"
              />
              <div className={cx('sheet-content')}>
                <Input
                  type="number"
                  pattern="\d*"
                  placeholder="금액을 입력해주세요."
                  {...register('price')}
                  onBlur={(e) => setValue('price', e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
            <Button size="xlarge" htmlType="submit" textAlign="center" block>
              수입/지출 등록하기
            </Button>
          </form>
        </div>
      </BottomSheet>
      <div className={cx('wrapper')}>
        <Section context="수입/지출" onClick={() => setOpen(true)} isArrow />
        <Section context="잔고">
          {balanceData.map((item: any) => (
            <ListItem
              key={item.id}
              context={item.context}
              balance={item.balance}
            />
          ))}
        </Section>
        <Section context="금전출납부" isArrow>
          {accountData.map((item: any) => (
            <HistoryItem
              key={item.id}
              expend={item.expend}
              context={item.context}
              expense={item.price}
              balance={item.balance}
              createdAt={new Date(item.createdAt).toLocaleString('ko-KR', {
                hour12: false,
                timeStyle: 'short',
              })}
            />
          ))}
          <Button size="medium" textAlign="center" block>
            내역 더보기
          </Button>
        </Section>
        {/* <Section context="기타">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Button type="secondary" size="medium" textAlign="center" block>
              데스크탑 뷰
            </Button>
          </div>
        </Section> */}
      </div>
    </GNBLayout>
  );
};
