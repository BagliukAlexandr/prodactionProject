import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<IAppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {[cls[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;