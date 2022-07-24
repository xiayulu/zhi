import { Button, Dropdown, Menu, Space } from 'antd';

export default function NavList() {

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                            1st menu item
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                            2nd menu item
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                            3rd menu item
                        </a>
                    ),
                },
            ]}
        />
    );

    return (
        <Dropdown overlay={menu} placement="bottom">
            <a onClick={e => e.preventDefault()}>
                <Space>
                    Hover me
                </Space>
            </a>
        </Dropdown>
    )
}