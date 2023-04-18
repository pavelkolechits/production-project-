import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/mainIcon.svg';
import AboutIcon from 'shared/assets/icons/aboutIcon.svg';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);
    if (!isAuth && item.authOnly) {
        return null;
    }
    return (
        <div className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [])}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={cls.item}
                to={item.path}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>

            </AppLink>
        </div>
    );
});
