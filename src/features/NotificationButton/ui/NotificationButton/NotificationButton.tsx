import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Natifications';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './NotificationButton.module.scss';
import NotificationIcon from '../../../../shared/assets/icons/notification.svg';

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>

    );
};
