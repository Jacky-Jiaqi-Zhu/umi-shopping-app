import { Layout, Menu } from "antd";
import Link from "umi/link";
import styles from "./index.css";

const { Header, Footer, Content } = Layout;

export default function (props) {
  const pathname = props.location.pathname;

  const menus = [
    {path: "/", name: "courses"},
    {path: "/users", name: "user"},
    {path: "/about", name: "about"}
  ]

  // const selectedKeys = [props.location.pathname]
  const selectedKeys = menus.filter( menu => {
    if (menu.path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(menu.path)
  }).map(menu => menu.path)

  return (
    <Layout>
      {/* 页头 */}
      <Header className={styles.header}>
        <img className={styles.logo} src="http://www.mindatlas.com/img/mindatlas-tag-horizontal-positive.png" />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["1"]} 
          selectedKeys={selectedKeys}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="/">
            <Link to="/">商品</Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">用户</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
      </Header>
      {/* 内容 */}
      <Content className={styles.content}>
        <div className={styles.box}>{props.children}</div>
      </Content>
      {/* 页脚 */}
      <Footer className={styles.footer}>umi</Footer>
    </Layout>
  );
}