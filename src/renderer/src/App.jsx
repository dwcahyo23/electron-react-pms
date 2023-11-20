import { Menu, Classes, MenuDivider, MenuItem, Icon } from '@blueprintjs/core'

function App() {
  return (
    <div
      style={{
        display: 'block',
        width: 400,
        padding: 30
      }}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h4>ReactJS Blueprint Menu Component</h4>
      <Menu className={Classes.ELEVATION_1}>
        <MenuItem icon={<Icon icon="home" />} text="Home" />
        <MenuDivider />
        <MenuItem icon="new-link" text="WebLinks" />
        <MenuItem icon="user" text="Profile" />
        <MenuDivider />
        <MenuItem icon="cog" text="Setting" />
      </Menu>
    </div>
  )
}

export default App
