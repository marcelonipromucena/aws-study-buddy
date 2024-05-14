import Text from '../../components/text';
import {
  AccountOption,
  WrapperAccountOptions
} from "./styles";
function DashboardCard({ href, icon, title }) {
  return (
    <WrapperAccountOptions sm={12} md={4}>
      <AccountOption href={href}>
        {icon}
        <Text>{title}</Text>
      </AccountOption>
    </WrapperAccountOptions>
  );
}

export default DashboardCard;
