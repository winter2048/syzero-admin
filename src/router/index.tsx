import { BrowserRouter, HashRouter, Link } from "react-router-dom";
import { renderRoutes,routes } from "./routes";
import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "@fluentui/react/lib/Nav";
import {
  CommandBar,
  ICommandBarItemProps,
} from "@fluentui/react/lib/CommandBar";
import { IButtonProps } from "@fluentui/react/lib/Button";
import { setVirtualParent } from "@fluentui/dom-utilities";
import { FocusTrapZone } from "@fluentui/react/lib/FocusTrapZone";
import { Checkbox } from "@fluentui/react/lib/Checkbox";

const navStyles: Partial<INavStyles> = {
  root: {
    width: "210px",
    height: "calc(100vh - 50px)",
    overflowY: "auto",
    boxSizing: 'border-box',
    border: '1px solid #eee',
  },
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === "News") {
    alert("News link clicked");
  }
}

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "系统管理",
        url: "",
        links: [
          {
            name: "用户管理",
            url: "/#test1",
            key: "key1",
            icon: "FabricUserFolder"
          },
          {
            name: "角色管理",
            url: "/#test2",
            key: "key2",
            icon:"Settings"
          },
          {
            name: "菜单管理",
            url: "/#test6",
            key: "key6",
            icon:"ShowResults"
          },
        ],
        isExpanded: true,
      },
      {
        name: "Test",
        url: "",
        links: [
          {
            name: "test3",
            url: "/#test3",
            key: "key3",
          },
          {
            name: "test4",
            url: "/#test4",
            key: "key4",
          },
        ],
        isExpanded: true,
      },
    ],
  },
];

const overflowProps: IButtonProps = { ariaLabel: "More commands" };
const _items: ICommandBarItemProps[] = [
  {
    key: "newItem",
    text: "SYZERO Admin",
  },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: "tile",
    text: "Grid view",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Grid view",
    iconProps: { iconName: "Tiles" },
    onClick: () => console.log("Tiles"),
  },
  {
    key: "info",
    text: "用户1",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    iconProps: { iconName: "Info" },
    onClick: () => console.log("Info"),
    subMenuProps: {
      items: [
        {
          key: "emailMessage",
          text: "修改密码",
          iconProps: { iconName: "Mail" },
          ["data-automation-id"]: "newEmailButton", // optional
        },
        {
          key: "calendarEvent",
          text: "退出登录",
          iconProps: { iconName: "Calendar" },
        },
      ],
    },
  },
];

function Router() {
  return (
    <BrowserRouter>
      <HashRouter>
        <div className="app-header">
        <CommandBar
            items={_items}
            overflowButtonProps={overflowProps}
            farItems={_farItems}
          />
        </div>
        <div className="app-content">
          <div>
            <Nav
              onLinkClick={_onLinkClick}
              styles={navStyles}
              groups={navLinkGroups}
            />
          </div>
          <div className="app-content-body">{renderRoutes(routes)}</div>
        </div>
      </HashRouter>
    </BrowserRouter>
  );
}

export default Router;
