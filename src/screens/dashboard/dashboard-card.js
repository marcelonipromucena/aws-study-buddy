import {
  AccountOption,
  AccountOptionText,
  WrapperAccountOptions,
} from "./styles";
function DashboardCard({ href, icon, title }) {
  return (
    <WrapperAccountOptions sm={12} md={4}>
      <AccountOption href={href}>
        {icon}
        <AccountOptionText>{title}</AccountOptionText>
      </AccountOption>
    </WrapperAccountOptions>
  );
}

export default DashboardCard;
