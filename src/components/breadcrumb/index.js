import { BreadcrumbWrapper } from "./styles";
function Breadcrumb({ items }) {
  return (
    <BreadcrumbWrapper>
      {items.map((item) => {
        return (
          <>
            <li>
              <a href={item.value}>{item.key}</a>
            </li>
            &nbsp;/&nbsp;
          </>
        );
      })}
    </BreadcrumbWrapper>
  );
}

export default Breadcrumb;
