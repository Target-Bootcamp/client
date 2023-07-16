import styles from './style.module.css' 

const SideNav = ({children,style={},activity}) => {
    return (
        <div className={`center ${styles.sideNav} ${activity?styles.sideNavActive:styles.sideNavNoActive}`} style={style}>
           {children} 
        </div>
    );
}

export default SideNav;
