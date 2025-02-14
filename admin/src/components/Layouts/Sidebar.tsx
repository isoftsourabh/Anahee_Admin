import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMinus from '../Icon/IconMinus';
import IconMenuChat from '../Icon/Menu/IconMenuChat';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '../Icon/Menu/IconMenuTodo';
import IconMenuNotes from '../Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '../Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '../Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../Icon/Menu/IconMenuElements';
import IconMenuCharts from '../Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '../Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '../Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '../Icon/Menu/IconMenuTables';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuPages from '../Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '../Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '../Icon/Menu/IconMenuDocumentation';

const Sidebar = () => {
    // const [currentMenu, setCurrentMenu] = useState<string>('');
    const [currentMenus, setCurrentMenus] = useState<string>('false');

    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    
    const [currentMenu, setCurrentMenu] = useState(null);
    const [basicSubMenuOpen, setBasicSubMenuOpen] = useState(false);
    const [userSubMenuOpen, setUserSubMenuOpen] = useState(false);
    const [purchaseSubMenuOpen, setPurchaseSubMenuOpen] = useState(false);
    const [stockSubMenuOpen, setStockSubMenuOpen] = useState(false);
    const [salesSubMenuOpen, setSalesSubMenuOpen] = useState(false);
    const [chartsSubMenuOpen, setChartsSubMenuOpen] = useState(false);
    const [accountSubMenuOpen, setAccountSubMenuOpen] = useState(false);
    const [stransferSubMenuOpen, setStransferSubMenuOpen] = useState(false);
    const [gstSubMenuOpen, setGstSubMenuOpen] = useState(false);
    const [gstReturnSubMenuOpen, setGstReturnSubMenuOpen] = useState(false);
    const [empSubMenuOpen, setEmpSubMenuOpen] = useState(false);
    const [pivotSubMenuOpen, setPivotSubMenuOpen] = useState(false);
    const [orderSubMenuOpen, setOrderSubMenuOpen] = useState(false);
    const[innPurchaseSubMenuOpen, setInnPurchaseSubMenuOpen]= useState(false);
    const[salesReportSubMenuOpen, setSalesReportSubMenuOpen]= useState(false);
    const[purReturnSubMenuOpen, setPurReturnSubMenuOpen]= useState(false);
    const[salesReturnSubMenuOpen, setSalesReturnSubMenuOpen]= useState(false);
    const[bestInSubMenuOpen, setBestInSubMenuOpen]= useState(false);
    const[comparisionSubMenuOpen, setComparisionSubMenuOpen]= useState(false);
    const[deliverySubMenuOpen, setDeliverySubMenuOpen]= useState(false);

    const toggleMenu = (menu:any) => {
        if (menu === 'basic') {
            setBasicSubMenuOpen(!basicSubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        } 
        // else if (menu === 'advanced') {
        //     setUserSubMenuOpen(!userSubMenuOpen);
        //     setBasicSubMenuOpen(false); 
        //     setPurchaseSubMenuOpen(false);
        // } 
        else if( menu === 'purchase'){
            setPurchaseSubMenuOpen(!purchaseSubMenuOpen);
            setUserSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setInnPurchaseSubMenuOpen(false);
            setPurReturnSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'stock'){
            setStockSubMenuOpen(!stockSubMenuOpen);
            setBasicSubMenuOpen(false);
            setUserSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPurchaseSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'sales'){
            setSalesSubMenuOpen(!salesSubMenuOpen);
            setBasicSubMenuOpen(false);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
            setSalesReportSubMenuOpen(false);
        }
        else if( menu === 'charts'){
            setChartsSubMenuOpen(!chartsSubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'account'){
            setAccountSubMenuOpen(!accountSubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'stock_transfer'){
            setStransferSubMenuOpen(!stransferSubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'gst'){
            setGstSubMenuOpen(!gstSubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'gst_return'){
            setGstReturnSubMenuOpen(!gstReturnSubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'emp_sch'){
            setEmpSubMenuOpen(!empSubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setPivotSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'pivot_rep'){
            setPivotSubMenuOpen(!pivotSubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setOrderSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'order'){
            setOrderSubMenuOpen(!orderSubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setDeliverySubMenuOpen(false);
        }
        else if( menu === 'inn_purchase'){
            setInnPurchaseSubMenuOpen(!innPurchaseSubMenuOpen);
            setPurchaseSubMenuOpen(true);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
        }
        else if( menu === 'pur_return'){
            setPurReturnSubMenuOpen(!purReturnSubMenuOpen);
            setPurchaseSubMenuOpen(true);
            setInnPurchaseSubMenuOpen(false);
        }
        else if( menu === 'inn_sales'){
            setSalesReportSubMenuOpen(!salesReportSubMenuOpen);
            setSalesSubMenuOpen(true);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
            setSalesReturnSubMenuOpen(false);
            setBestInSubMenuOpen(false);
        }
        else if( menu === 'sales_return'){
            setSalesReturnSubMenuOpen(!salesReturnSubMenuOpen);
            setSalesReportSubMenuOpen(false);
            setSalesSubMenuOpen(true);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
            setBestInSubMenuOpen(false);
        }
        else if( menu === 'best_in'){
            setBestInSubMenuOpen(!bestInSubMenuOpen);
            setSalesReportSubMenuOpen(false);
            setSalesReturnSubMenuOpen(false);
            setSalesSubMenuOpen(true);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
            setComparisionSubMenuOpen(false);
        }
        else if( menu === 'comparision'){
            setComparisionSubMenuOpen(!comparisionSubMenuOpen);
            setSalesReportSubMenuOpen(false);
            setSalesReturnSubMenuOpen(false);
            setSalesSubMenuOpen(true);
            setBestInSubMenuOpen(false);
            // setPurReturnSubMenuOpen{false};
            setPurReturnSubMenuOpen(false);
        }
        else if( menu === 'del_challan'){
            setDeliverySubMenuOpen(!deliverySubMenuOpen);
            setUserSubMenuOpen(false); 
            setPurchaseSubMenuOpen(false);
            setStockSubMenuOpen(false);
            setSalesSubMenuOpen(false);
            setChartsSubMenuOpen(false);
            setAccountSubMenuOpen(false);
            setStransferSubMenuOpen(false);
            setGstSubMenuOpen(false);
            setGstReturnSubMenuOpen(false);
            setEmpSubMenuOpen(false);
            setOrderSubMenuOpen(false);
        }
        else {
                    setCurrentMenu(currentMenu === menu ? null : menu);
                    setUserSubMenuOpen(false); 
                    setBasicSubMenuOpen(false); 
                    setPurchaseSubMenuOpen(false);
                    setStockSubMenuOpen(false);
                    setSalesSubMenuOpen(false);
                    setChartsSubMenuOpen(false);
                    setAccountSubMenuOpen(false)
                    setStransferSubMenuOpen(false);
                    setGstSubMenuOpen(false);
                    setGstReturnSubMenuOpen(false);
                    setEmpSubMenuOpen(false);
                    setPivotSubMenuOpen(false);
                    setOrderSubMenuOpen(false);
                    setInnPurchaseSubMenuOpen(false);
                    setPurReturnSubMenuOpen(false);
                    setDeliverySubMenuOpen(false);
                    setSalesReportSubMenuOpen(false);
                }
    };
   
    useEffect(() => {
        const storedBasicSubMenuState = localStorage.getItem('basicSubMenuOpen');
        const storedUserSubMenuState = localStorage.getItem('userSubMenuOpen');
        const storedPurchaseSubMenuState = localStorage.getItem('purchaseSubMenuOpen');
        const storedStockSubMenuState = localStorage.getItem('stockSubMenuOpen');
        const storedSalesSubMenuState = localStorage.getItem('salesSubMenuOpen');
        const storedChartsSubMenuState = localStorage.getItem('chartsSubMenuOpen');
        const storedAccountSubMenuState = localStorage.getItem('accountSubMenuOpen');
        const storedsTransferSubMenuState = localStorage.getItem('stransferSubMenuOpen');
        const storedsGstSubMenuState = localStorage.getItem('gstSubMenuOpen');
        const storedsGstReturnSubMenuState = localStorage.getItem('gstReturnSubMenuOpen');
        const storedsEmpSubMenuState = localStorage.getItem('empSubMenuOpen');
        const storedsPivotSubMenuState = localStorage.getItem('pivotSubMenuOpen');
        const storedsinnPurchaseSubMenuState = localStorage.getItem('innPurchaseSubMenuOpen');
        const storedsPurReturnSubMenuState = localStorage.getItem('purReturnSubMenuOpen');
        const storedsSalesReturnSubMenuState = localStorage.getItem('salesReturnSubMenuOpen');
        const storedsBestInSubMenuState = localStorage.getItem('bestInSubMenuOpen');
        const storedsComparisionSubMenuState = localStorage.getItem('comparisionSubMenuOpen');
        const storedsSalesReportSubMenuState = localStorage.getItem('salesReportSubMenuOpen');
        if (storedBasicSubMenuState) {
            setBasicSubMenuOpen(storedBasicSubMenuState === 'true');
        }
        if (storedUserSubMenuState) {
            setUserSubMenuOpen(storedUserSubMenuState === 'true');
        }
        if (storedPurchaseSubMenuState) {
            setPurchaseSubMenuOpen(storedPurchaseSubMenuState === 'true');
        }
        if (storedStockSubMenuState) {
            setStockSubMenuOpen(storedStockSubMenuState === 'true');
        }
        if (storedSalesSubMenuState) {
            setSalesSubMenuOpen(storedSalesSubMenuState === 'true');
        }
        if (storedChartsSubMenuState) {
            setChartsSubMenuOpen(storedChartsSubMenuState === 'true');
        }
        if (storedAccountSubMenuState) {
            setAccountSubMenuOpen(storedAccountSubMenuState === 'true');
        }
        if (storedsTransferSubMenuState) {
            setStransferSubMenuOpen(storedsTransferSubMenuState === 'true');
        }
        if (storedsGstSubMenuState) {
            setGstSubMenuOpen(storedsGstSubMenuState === 'true');
        }
        if (storedsGstReturnSubMenuState) {
        setGstReturnSubMenuOpen(storedsGstReturnSubMenuState === 'true');
        }
        if (storedsEmpSubMenuState) {
            setEmpSubMenuOpen(storedsEmpSubMenuState === 'true');
            }
            if (storedsPivotSubMenuState) {
                setPivotSubMenuOpen(storedsPivotSubMenuState === 'true');
                }
                if (storedsinnPurchaseSubMenuState) {
                    setInnPurchaseSubMenuOpen(storedsinnPurchaseSubMenuState === 'true');
                    }
                    if (storedsPurReturnSubMenuState) {
                        setPurReturnSubMenuOpen(storedsPurReturnSubMenuState === 'true');
                        }
                        if (storedsSalesReportSubMenuState) {
                            setSalesReportSubMenuOpen(storedsSalesReportSubMenuState === 'true');
                            }
                            if (storedsSalesReturnSubMenuState) {
                                setSalesReturnSubMenuOpen(storedsSalesReturnSubMenuState === 'true');
                                }
                                if (storedsBestInSubMenuState) {
                                    setBestInSubMenuOpen(storedsBestInSubMenuState === 'true');
                                    }
                                    if (storedsComparisionSubMenuState) {
                                        setComparisionSubMenuOpen(storedsComparisionSubMenuState === 'true');
                                        }
    }, []);

    useEffect(() => {
        localStorage.setItem('basicSubMenuOpen', basicSubMenuOpen.toString());
        localStorage.setItem('userSubMenuOpen', userSubMenuOpen.toString());
        localStorage.setItem('purchaseSubMenuOpen', purchaseSubMenuOpen.toString());
        localStorage.setItem('stockSubMenuOpen', stockSubMenuOpen.toString());
        localStorage.setItem('salesSubMenuOpen', salesSubMenuOpen.toString());
        localStorage.setItem('chartsSubMenuOpen', chartsSubMenuOpen.toString());
        localStorage.setItem('accountSubMenuOpen', accountSubMenuOpen.toString());
        localStorage.setItem('stransferSubMenuOpen', stransferSubMenuOpen.toString());
        localStorage.setItem('gstSubMenuOpen', gstSubMenuOpen.toString());
        localStorage.setItem('gstReturnSubMenuOpen', gstReturnSubMenuOpen.toString());
        localStorage.setItem('empSubMenuOpen', empSubMenuOpen.toString());
        localStorage.setItem('pivotSubMenuOpen', pivotSubMenuOpen.toString());
        localStorage.setItem('innPurchaseSubMenuOpen', innPurchaseSubMenuOpen.toString());
        localStorage.setItem('purReturnSubMenuOpen', purReturnSubMenuOpen.toString());
        localStorage.setItem('salesReturnSubMenuOpen', salesReturnSubMenuOpen.toString());
        localStorage.setItem('bestInSubMenuOpen', bestInSubMenuOpen.toString());
        localStorage.setItem('comparisionSubMenuOpen', comparisionSubMenuOpen.toString());
        localStorage.setItem('salesReportSubMenuOpen', salesReportSubMenuOpen.toString());
    }, [basicSubMenuOpen, userSubMenuOpen, purchaseSubMenuOpen, stockSubMenuOpen, salesSubMenuOpen,chartsSubMenuOpen, accountSubMenuOpen, stransferSubMenuOpen, gstSubMenuOpen, gstReturnSubMenuOpen,empSubMenuOpen, pivotSubMenuOpen, innPurchaseSubMenuOpen, purReturnSubMenuOpen,salesReportSubMenuOpen,salesReturnSubMenuOpen,bestInSubMenuOpen,comparisionSubMenuOpen]);
    // useEffect(() => {
    //     setBasicSubMenuOpen(false);
    //     setUserSubMenuOpen(false);
    // }, []);
    
    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    const navigate = useNavigate();
    const handleLogout = () => {
        // Perform logout actions here (e.g., clearing authentication token, resetting state)
       // Then redirect to login page
       navigate('/', { replace: true }); // Use replace option to prevent going back
   };

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <NavLink to="" className="main-logo flex items-center shrink-0">
                            <img className="w-8 ml-[5px] flex-none" src="/assets/images/auth/logo-white1.png" alt="logo" />
                            <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">{t('i-SOFTZONE')}</span>
                        </NavLink>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                                    <div className="flex items-center">
                                        <IconMenuDashboard
                                         className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('dashboard')}</span>
                                    </div>

                                    <div className={currentMenu !== 'dashboard' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/index">{t('sales')}</NavLink>
                                        </li>
                                        {/* <li>
                                            <NavLink to="/analytics">{t('analytics')}</NavLink>
                                        </li> */}
                                        {/* <li>
                                            <NavLink to="/finance">{t('finance')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/crypto">{t('crypto')}</NavLink>
                                        </li> */}
                                    </ul>
                                </AnimateHeight>
                            </li>

                            {/* <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                                <IconMinus className="w-4 h-5 flex-none hidden" />
                                <span>{t('apps')}</span>
                            </h2> */}

                            <li className="nav-item">
                                <ul>
                                    {/* <li className="nav-item">
                                        <NavLink to="/apps/chat" className="group">
                                            <div className="flex items-center">
                                                <IconMenuChat className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('chat')}</span>
                                            </div>
                                        </NavLink>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <NavLink to="/apps/mailbox" className="group">
                                            <div className="flex items-center">
                                                <IconMenuMailbox className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('mailbox')}</span>
                                            </div>
                                        </NavLink>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <NavLink to="/apps/todolist" className="group">
                                            <div className="flex items-center">
                                                <IconMenuTodo className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('todo_list')}</span>
                                            </div>
                                        </NavLink>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <NavLink to="/apps/notes" className="group">
                                            <div className="flex items-center">
                                                <IconMenuNotes className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('notes')}</span>
                                            </div>
                                        </NavLink>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <NavLink to="/apps/scrumboard" className="group">
                                            <div className="flex items-center">
                                                <IconMenuScrumboard className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('scrumboard')}</span>
                                            </div>
                                        </NavLink>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <NavLink to="/apps/contacts" className="group">
                                            <div className="flex items-center">
                                                <IconMenuContacts className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('contacts')}</span>
                                            </div>
                                        </NavLink>
                                    </li> */}

                                    {/* <li className="menu nav-item"> */}
                                        {/* <button type="button" className={`${currentMenu === 'invoice' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('invoice')}>
                                            <div className="flex items-center">
                                                <IconMenuInvoice className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('invoice')}</span>
                                            </div> */}

                                            {/* <div className={currentMenu !== 'invoice' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div> */}
                                        {/* </button> */}

                                        {/* <AnimateHeight duration={300} height={currentMenu === 'invoice' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/apps/invoice/list">{t('list')}</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/apps/invoice/preview">{t('preview')}</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/apps/invoice/add">{t('add')}</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/apps/invoice/edit">{t('edit')}</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight> */}
                                    {/* </li> */}

                                    {/* <li className="nav-item">
                                        <NavLink to="/apps/calendar" className="group">
                                            <div className="flex items-center">
                                                <IconMenuCalendar className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('calendar')}</span>
                                            </div>
                                        </NavLink>
                                    </li> */}
                                </ul>
                            </li>

                            {/* <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                                // <IconMinus className="w-4 h-5 flex-none hidden" />
                                <span>{t('user_interface')}</span>
                            </h2> */}

                            {/* <li className="menu nav-item"> */}
                                {/* <button type="button" className={`${currentMenu === 'component' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('component')}>
                                    <div className="flex items-center">
                                        <IconMenuComponents className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('components')}</span>
                                    </div>

                                    <div className={currentMenu !== 'component' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button> */}
{/* 
                                <AnimateHeight duration={300} height={currentMenu === 'component' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/components/tabs">{t('tabs')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/accordions">{t('accordions')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/modals">{t('modals')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/cards">{t('cards')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/carousel">{t('carousel')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/countdown">{t('countdown')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/counter">{t('counter')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/sweetalert">{t('sweet_alerts')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/timeline">{t('timeline')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/notifications">{t('notifications')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/media-object">{t('media_object')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/list-group">{t('list_group')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/pricing-table">{t('pricing_tables')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/components/lightbox">{t('lightbox')}</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li> */}

                            {/* <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'element' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('element')}>
                                    <div className="flex items-center">
                                        <IconMenuElements className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('elements')}</span>
                                    </div>

                                    <div className={currentMenu !== 'element' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'element' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/elements/alerts">{t('alerts')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/avatar">{t('avatar')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/badges">{t('badges')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/breadcrumbs">{t('breadcrumbs')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/buttons">{t('buttons')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/buttons-group">{t('button_groups')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/color-library">{t('color_library')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/dropdown">{t('dropdown')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/infobox">{t('infobox')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/jumbotron">{t('jumbotron')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/loader">{t('loader')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/pagination">{t('pagination')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/popovers">{t('popovers')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/progress-bar">{t('progress_bar')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/search">{t('search')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/tooltips">{t('tooltips')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/treeview">{t('treeview')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/elements/typography">{t('typography')}</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li> */}

                            {/* <li className="menu nav-item">
                                <NavLink to="/charts" className="group">
                                    <div className="flex items-center">
                                        <IconMenuCharts className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('charts')}</span>
                                    </div>
                                </NavLink>
                            </li> */}

                            {/* <li className="menu nav-item">
                                <NavLink to="/widgets" className="group">
                                    <div className="flex items-center">
                                        <IconMenuWidgets className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('widgets')}</span>
                                    </div>
                                </NavLink>
                            </li> */}

                            {/* <li className="menu nav-item">
                                <NavLink to="/font-icons" className="group">
                                    <div className="flex items-center">
                                        <IconMenuFontIcons className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('font_icons')}</span>
                                    </div>
                                </NavLink>
                            </li> */}

                            {/* <li className="menu nav-item">
                                <NavLink to="/dragndrop" className="group">
                                    <div className="flex items-center">
                                        <IconMenuDragAndDrop className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('drag_and_drop')}</span>
                                    </div>
                                </NavLink>
                            </li> */}

                            <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                                <IconMinus className="w-4 h-5 flex-none hidden" />
                                <span>{t('tables_and_forms')}</span>
                            </h2>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('System')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Masters')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Purchase')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Stock')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Sales')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Account')}</span>
                                    </div>
                                </NavLink>
                            </li>

                           {/* <li className="menu nav-item">
                                <NavLink to="/tables" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('tables')}</span>
                                    </div>
                                </NavLink>
                            </li> */}
{/* <li className="menu nav-item">
    <button type="button" className={`${currentMenu === 'datalabel' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('datalabel')}>
        <div className="flex items-center">
            <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
            <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('datatables')}</span>
        </div>
        <div className={currentMenu !== 'datalabel' ? 'rtl:rotate-90 -rotate-90' : ''}>
            <IconCaretDown />
        </div>
    </button>

    <AnimateHeight duration={300} height={(currentMenu === 'datalabel' || currentMenu === 'basic') ? 'auto' : 0}>
        <ul className="sub-menu text-gray-500">
            <li>
                <button type="button" className={`${currentMenu === 'basic' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('basic')}>
                    <div className="flex items-center">
                        <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('basic')}</span>
                    </div>
                    <div className={currentMenu !== 'basic' ? 'rtl:rotate-90 -rotate-90' : ''}>
                        <IconCaretDown />
                    </div>
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'basic' ? 'auto' : 0}>
                    <ul className="sub-menu text-gray-500">
                        <li>
                            <NavLink to="/datatables/basic">aaa</NavLink>
                        </li>
                        <li>
                            <NavLink to="/datatables/advanced">bbbbb</NavLink>
                        </li>
                    </ul>
                </AnimateHeight>
            </li>
            <li>
                <NavLink to="/datatables/advanced">{t('advanced')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/skin">{t('skin')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/order-sorting">{t('order_sorting')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/multi-column">{t('multi_column')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/multiple-tables">{t('multiple_tables')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/alt-pagination">{t('alt_pagination')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/checkbox">{t('checkbox')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/range-search">{t('range_search')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/export">{t('export')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/column-chooser">{t('column_chooser')}</NavLink>
            </li>
        </ul>
    </AnimateHeight>
</li> */}
  


  <li className="menu nav-item">
            <button type="button" className={`${currentMenu === 'datalabel' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('datalabel')}>
                <div className="flex items-center">
                    <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Reports</span>
                </div>
                <div className={currentMenu !== 'datalabel' ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                </div>
            </button>

            <AnimateHeight duration={300} height={(currentMenu === 'datalabel' || basicSubMenuOpen) ? 'auto' : 0}>
                <ul className="sub-menu text-gray-500">
                    <li>
                        <button type="button" className={`${basicSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('basic')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Master</span>
                            </div>
                            <div className={basicSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={basicSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="/datatables/advanced">Agent</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/datatables/customer">Customers</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/datatables/customer_env">Customer Envelope</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/datatables/dealers">Dealers</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/datatables/employees">Employees</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/datatables/items">Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/datatables/transport">Transport</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/datatables/lable">Lable</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/datatables/masterInput">Setting</NavLink>
                                </li> 
                                <li>
                                    <NavLink to="/datatables/frmCodeType">CodeType</NavLink>
                                </li>   */}
                                <li>
                        <button type="button" className={`${bestInSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('best_in')}>
                            <div className="flex items-center">
                                {/* <IconMenuDatatables className="group-hover:!text-primary shrink-0" /> */}
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Setting</span>
                            </div>
                            <div className={bestInSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={bestInSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="/datatables/masterInput">Search</NavLink>
                                </li>
                                <li>
  <NavLink to="/datatables/frmCodeType?category=brand">Brand</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=product">Product</NavLink>
</li><li>
  <NavLink to="/datatables/frmCodeType?category=buyer">Buyer</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=colour">Colour</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=scolor">SColor</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=category">Category</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=subCategory">Sub Category</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=group">Group</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=subGroup">Sub Group</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=material">Material</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=size">Size</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=style">Style</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=section">Section</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=season">Season</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=unit">Unit</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=packing">Packing</NavLink>
</li>
<li>
  <NavLink to="/datatables/frmCodeType?category=gender">Gender</NavLink>
</li><li>
  <NavLink to="/datatables/frmCodeType?category=tag">Tag</NavLink>
</li>
{/* <li>
  <NavLink to="/datatables/frmCodeType?category=Seller">Seller</NavLink>
</li> */}

                               {/* <li>
                                    <NavLink to="/salesTables/sellingItem">Best Selling Item Name Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/sellingCustomer">Best Selling Customer</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/salesComparison">Sales Tax Comparison</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/itemWiseSale">Item Wise Sale Tax</NavLink>
                                </li> */}
                            </ul>
                        </AnimateHeight>
                    </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${purchaseSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('purchase')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Purchase</span>
                            </div>
                            <div className={purchaseSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={purchaseSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                            <li>
                        <button type="button" className={`${innPurchaseSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('inn_purchase')}>
                            <div className="flex items-center">
                                {/* <IconMenuDatatables className="group-hover:!text-primary shrink-0" /> */}
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Purchase Report</span>
                            </div>
                            <div className={innPurchaseSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={innPurchaseSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Purchase</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Detail</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Purchase</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Purchase Detail</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Purchase Comparison</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Best Purchase Brand</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Best Purchase Product Brand Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Best Purchase Iteam Name Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Date Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Daily Purchase Group Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Item Wise Purchase Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Item Wise Purchase Tax</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${purReturnSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('pur_return')}>
                            <div className="flex items-center">
                                {/* <IconMenuDatatables className="group-hover:!text-primary shrink-0" /> */}
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Purchase Return</span>
                            </div>
                            <div className={purReturnSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={purReturnSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Purchase Return Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Return report</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Return Detail Report</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Return Register </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Purchase Return</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Purchase Return Detail</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Purchase Return Comparison</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase return date Wise</NavLink>
                                </li>
                               
                                <li>
                                    <NavLink to="#">Purchase Date Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Daily Purchase Return Group Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Item Wise Purchase  Return Summary</NavLink>
                                </li>
                            
                            </ul>
                        </AnimateHeight>
                    </li>

                    
                                {/* <li>
                                    <NavLink to="#">Purchase Master</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Detail</NavLink>
                                </li> */}
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${stockSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('stock')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Stock</span>
                            </div>
                            <div className={stockSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={stockSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="/stockTables/stockDetail">Stock Detail</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stockTables/brandItem">Brand Item Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stockTables/itemBrand">Item Brand Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stockTables/itemSize">Item Size Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stockTables/stockMovement">Stock Movement</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stockTables/stockReport">Stock Report</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stockTables/stockAging">Stock Aging</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stockTables/stockSummary">Stock Summary Item Name Wise</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${salesSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('sales')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Sales</span>
                            </div>
                            <div className={salesSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={salesSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                            <li>
                        <button type="button" className={`${salesReportSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('inn_sales')}>
                            <div className="flex items-center">
                                {/* <IconMenuDatatables className="group-hover:!text-primary shrink-0" /> */}
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Sales</span>
                   
                            </div>
                            <div className={salesReportSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={salesReportSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Sales Report</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Detail Report</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Profit</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Outstanding</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Profit MR</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Discount Sale</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${salesReturnSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('sales_return')}>
                            <div className="flex items-center">
                                {/* <IconMenuDatatables className="group-hover:!text-primary shrink-0" /> */}
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Sales Return</span>
                            </div>
                            <div className={salesReturnSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={salesReturnSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Sales Return Report</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Return Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Return Register </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Return Detail Report</NavLink>
                                </li>
                               
                                <li>
                                    <NavLink to="#">Customer Wise Sales Return</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Customer Wise Sales Return Detail</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Employee Wise Sales Return</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Employee Wise Sales Return Comparison</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Employee Wise Sales Return Comparison(Qty)</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Sales Return</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Sales Return Comparison</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Return Profit</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sales Return Outstanding</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Daily Sales Return Group Wise</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${bestInSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('best_in')}>
                            <div className="flex items-center">
                                {/* <IconMenuDatatables className="group-hover:!text-primary shrink-0" /> */}
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Best In</span>
                            </div>
                            <div className={bestInSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={bestInSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="/salesTables/sellingBrand">Best Selling Brand</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/sellingProduct">Best Selling Product Brand Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Best Selling Product Gender Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/sellingItem">Best Selling Item Name Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/sellingCustomer">Best Selling Customer</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/salesComparison">Sales Tax Comparison</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/itemWiseSale">Item Wise Sale Tax</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${comparisionSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('comparision')}>
                            <div className="flex items-center">
                                {/* <IconMenuDatatables className="group-hover:!text-primary shrink-0" /> */}
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Comparison</span>
                            </div>
                            <div className={comparisionSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={comparisionSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="/salesTables/comparison/customerWiseSale">Customer Wise Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/customerWiseDetail">Customer Wise Sales Detail</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/employeeSale">Employee Wise Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/empCompare">Employee Wise Sales Comparison</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/empCompareQty">Employee Wise Sales Comparison(Qty)</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/dealerSales">Dealer Wise Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/dealerCompare">Dealer Wise Sales Comparison</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/salesDate">Sales Date Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/itemSales">Item Wise Sales Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/agentSales">Agent Wise Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/agentSummary">Agent Wise Sales Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/consigneeSummary">Consignee Wise Sales Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/dailySales">Daily Sales Group Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/itemTax">Item Wise Sale Tax</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/helperSales">Helper Wise Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/helperCompare">Helper Wise Sales Compariosn</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/salesTables/comparison/helperCompareQty">Helper Wise Sales Compariosn(Qty)</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                                    <NavLink to="/salesTables/delChallan">Delivery Challan</NavLink>
                                </li>
                    
                                {/* <li>
                                    <NavLink to="#">Purchase Master</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Detail</NavLink>
                                </li> */}
                            </ul>
                        </AnimateHeight>
                    </li>
                    {/* <li>
                        <button type="button" className={`${salesSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('sales')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Sales</span>
                            </div>
                            <div className={salesSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={salesSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Sales Master</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sale Detail</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li> */}
                    <li>
                        <button type="button" className={`${chartsSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('charts')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Charts</span>
                            </div>
                            <div className={chartsSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={chartsSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Best Selling Brands</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Best Selling Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Employee Wise Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Dealer Wise Sales</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Date Wise Sales</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${accountSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('account')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Account</span>
                            </div>
                            <div className={accountSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={accountSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Account Master</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Account Detail</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${stransferSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('stock_transfer')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Stock Transfer</span>
                            </div>
                            <div className={stransferSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={stransferSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="/stock_Transfer/sti_Detail">STI Details</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stock_Transfer/sti_Summary">STI Summary</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stock_Transfer/sto_Detail">STO Detail</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/stock_Transfer/sto_Summary">STO Summary</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${gstSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('gst')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">GST</span>
                            </div>
                            <div className={gstSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={gstSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">GST Master</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">GST Detail</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${gstReturnSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('gst_return')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">GST Return</span>
                            </div>
                            <div className={gstReturnSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={gstReturnSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">GST Return Master</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">GST Return Detail</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${empSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('emp_sch')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Employee Schemes</span>
                            </div>
                            <div className={empSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={empSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">In Percentage</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">In Rupees</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${pivotSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('pivot_rep')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Pivot Report</span>
                            </div>
                            <div className={pivotSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={pivotSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Sale</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Sale Return</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Purchase Return</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Stock</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${orderSubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('order')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Order</span>
                            </div>
                            <div className={orderSubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={orderSubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Pending Order</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Order Report</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Order Sales Detail Customer Wise</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Order Detail Design Wise</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li>
                        <button type="button" className={`${deliverySubMenuOpen ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('del_challan')}>
                            <div className="flex items-center">
                                <IconMenuDatatables className="group-hover:!text-primary shrink-0" />
                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">Delivery Challan</span>
                            </div>
                            <div className={deliverySubMenuOpen ? '' : 'rtl:rotate-90 -rotate-90'}>
                                <IconCaretDown />
                            </div>
                        </button>

                        <AnimateHeight duration={300} height={deliverySubMenuOpen ? 'auto' : 0}>
                            <ul className="sub-menu text-gray-500">
                                <li>
                                    <NavLink to="#">Delivery Challan Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Delivery Detail</NavLink>
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    {/* <li>
                <NavLink to="/datatables/advanced">{t('advanced')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/skin">{t('skin')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/order-sorting">{t('order_sorting')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/multi-column">{t('multi_column')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/multiple-tables">{t('multiple_tables')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/alt-pagination">{t('alt_pagination')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/checkbox">{t('checkbox')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/range-search">{t('range_search')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/export">{t('export')}</NavLink>
            </li>
            <li>
                <NavLink to="/datatables/column-chooser">{t('column_chooser')}</NavLink>
            </li> */}
                </ul>
            </AnimateHeight>
        </li>
        <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Tools')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Help')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Help')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Production')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Job')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="" className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Job Data')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="/Components/HideSeek"className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Hide & Seek')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className="menu nav-item">
                                <NavLink to="/Components/image-update"className="group">
                                    <div className="flex items-center">
                                        <IconMenuTables className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Image_Update')}</span>
                                    </div>
                                </NavLink>
                            </li>

    

                           

                            {/* <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'forms' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('forms')}>
                                    <div className="flex items-center">
                                        <IconMenuForms className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('forms')}</span>
                                    </div>

                                    <div className={currentMenu !== 'forms' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'forms' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/forms/basic">{t('basic')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/input-group">{t('input_group')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/layouts">{t('layouts')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/validation">{t('validation')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/input-mask">{t('input_mask')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/select2">{t('select2')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/touchspin">{t('touchspin')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/checkbox-radio">{t('checkbox_and_radio')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/switches">{t('switches')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/wizards">{t('wizards')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/file-upload">{t('file_upload')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/quill-editor">{t('quill_editor')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/markdown-editor">{t('markdown_editor')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/date-picker">{t('date_and_range_picker')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/forms/clipboard">{t('clipboard')}</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li> */}

                            <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                                <IconMinus className="w-4 h-5 flex-none hidden" />
                                <span>{t('user_and_pages')}</span>
                            </h2>

                            {/* <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'users' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('users')}>
                                    <div className="flex items-center">
                                        <IconMenuUsers className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('users')}</span>
                                    </div>

                                    <div className={currentMenu !== 'users' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'users' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/users/profile">{t('profile')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/users/user-account-settings">{t('account_settings')}</NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li> */}

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'page' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('page')}>
                                    <div className="flex items-center">
                                        <IconMenuPages className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('pages')}</span>
                                    </div>

                                    <div className={currentMenu !== 'page' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'page' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        {/* <li>
                                            <NavLink to="/pages/knowledge-base">{t('knowledge_base')}</NavLink>
                                        </li> */}
                                        <li>
                                            <NavLink to="/pages/contact-us-boxed" target="_blank">
                                                {t('contact_us_boxed')}
                                            </NavLink>
                                        </li>
                                        {/* <li>
                                            <NavLink to="/pages/contact-us-cover" target="_blank">
                                                {t('contact_us_cover')}
                                            </NavLink>
                                        </li> */}
                                        <li>
                                            <NavLink to="/pages/faq">{t('faq')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/pages/coming-soon-boxed" target="_blank">
                                                {t('coming_soon_boxed')}
                                            </NavLink>
                                        </li>
                                        {/* <li>
                                            <NavLink to="/pages/coming-soon-cover" target="_blank">
                                                {t('coming_soon_cover')}
                                            </NavLink>
                                        </li> */}
                                        <li className="menu nav-item">
                                            <button
                                                type="button"
                                                className={`${
                                                    errorSubMenu ? 'open' : ''
                                                } w-full before:bg-gray-300 before:w-[5px] before:h-[5px] before:rounded ltr:before:mr-2 rtl:before:ml-2 dark:text-[#888ea8] hover:bg-gray-100 dark:hover:bg-gray-900`}
                                                onClick={() => setErrorSubMenu(!errorSubMenu)}
                                            >
                                                {t('error')}
                                                <div className={`${errorSubMenu ? 'rtl:rotate-90 -rotate-90' : ''} ltr:ml-auto rtl:mr-auto`}>
                                                    <IconCaretsDown fill={true} className="w-4 h-4" />
                                                </div>
                                            </button>
                                            <AnimateHeight duration={300} height={errorSubMenu ? 'auto' : 0}>
                                                <ul className="sub-menu text-gray-500">
                                                    <li>
                                                        <a href="/pages/error404" target="_blank">
                                                            {t('404')}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/pages/error500" target="_blank">
                                                            {t('500')}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/pages/error503" target="_blank">
                                                            {t('503')}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </AnimateHeight>
                                        </li>

                                        <li>
                                            <NavLink to="/pages/maintenence" target="_blank">
                                                {t('maintenence')}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </AnimateHeight>
                            </li>

                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'auth' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('auth')}>
                                    <div className="flex items-center">
                                        <IconMenuAuthentication className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('authentication')}</span>
                                    </div>

                                    <div className={currentMenu !== 'auth' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                                <AnimateHeight duration={300} height={currentMenu === 'auth' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        {/* <li>
                                            <NavLink to="/auth/boxed-signin" target="_blank">
                                                {t('login_boxed')}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/auth/boxed-signup" target="_blank">
                                                {t('register_boxed')}
                                            </NavLink>
                                        </li> */}
                                        {/* <li>
                                            <NavLink to="/auth/boxed-lockscreen" target="_blank">
                                                {t('unlock_boxed')}
                                            </NavLink>
                                        </li> */}
                                        {/* <li>
                                            <NavLink to="/auth/boxed-password-reset" target="_blank">
                                                {t('recover_id_boxed')}
                                            </NavLink>
                                        </li> */}
                                        <li>
                                            <button onClick={handleLogout}>
                                                {t('login_cover')}
                                            </button>
         
                                        </li>
                                        {/* <li>
                                            <NavLink to="/auth/cover-register" target="_blank">
                                                {t('register_cover')}
                                            </NavLink>
                                        </li> */}
                                        {/* <li>
                                            <NavLink to="/auth/cover-lockscreen" target="_blank">
                                                {t('unlock_cover')}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/auth/cover-password-reset" target="_blank">
                                                {t('recover_id_cover')}
                                            </NavLink>
                                        </li> */}
                                    </ul>
                                </AnimateHeight>
                            </li>

                            {/* <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                                <IconMinus className="w-4 h-5 flex-none hidden" />
                                <span>{t('supports')}</span>
                            </h2> */}

                            {/* <li className="menu nav-item">
                                <NavLink to="https://vristo.sbthemes.com" target="_blank" className="nav-link group">
                                    <div className="flex items-center">
                                        <IconMenuDocumentation className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('documentation')}</span>
                                    </div>
                                </NavLink>
                            </li> */}
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
