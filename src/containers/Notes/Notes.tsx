import { GNBLayout, Section } from 'components/Layouts';
import { HistoryItem } from 'components/HistoryItem';
import { useRouter } from 'next/router';

export const Notes = ({ accountData }: any) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <GNBLayout>
      <Section context="이전으로 돌아가기" onClick={handleClick} isArrow />
      <Section context="금전출납부 목록">
        {accountData.map((item: any) => (
          <HistoryItem
            key={item.id}
            expend={item.expend}
            context={item.context}
            expense={item.price}
            balance={item.balance}
            createdAt={new Date(item.createdAt).toLocaleString('ko-KR', {
              hour12: false,
            })}
          />
        ))}
      </Section>
    </GNBLayout>
  );
};
