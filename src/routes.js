import DemoLogin from "./ui-kit/DemoLogin";
import DemoMain from "./ui-kit/DemoMain";
import KitButton from "./ui-kit/KitButton";
import KitForm from "./ui-kit/KitForm";
import KitProfile from "./ui-kit/KitProfile";
import KitPopup from "./ui-kit/KitPopup";
import KitEx from "./ui-kit/KitEx";
import Index from "./pages/Index";
import Login1 from "./pages/login/Login1";
import Login2 from "./pages/login/Login2";
import Login3 from "./pages/login/Login3";
import NewProfile from "./pages/login/NewProfile";
import SelectRoles1 from "./pages/account/SelectRoles1";
import SelectRoles2 from "./pages/account/SelectRoles2";
import SelectRoles3 from "./pages/account/SelectRoles3";
import SelectRoles4 from "./pages/account/SelectRoles4";
import ResetPw from "./pages/account/ResetPw";
import UpdatePw from "./pages/account/UpdatePw";
import Signup1 from "./pages/signup/Signup1";
import Signup2 from "./pages/signup/Signup2";

export default [
    {
        path: '/',
        component: Index
    },
    {
        path: '/Login1',
        component: Login1
    },
    {
        path: '/Login2',
        component: Login2
    },
    {
        path: '/Login3',
        component: Login3
    },
    {
        path: '/ResetPw',
        component: ResetPw
    },
    {
        path: '/UpdatePw',
        component: UpdatePw
    },
    {
        path: '/Signup1',
        component: Signup1
    },
    {
        path: '/Signup2',
        component: Signup2
    },
    {
        path: '/NewProfile',
        component: NewProfile
    },
    {
        path: '/SelectRoles1',
        component: SelectRoles1
    },
    {
        path: '/SelectRoles2',
        component: SelectRoles2
    },
    {
        path: '/SelectRoles3',
        component: SelectRoles3
    },
    {
        path: '/SelectRoles4',
        component: SelectRoles4
    },

    //여기부터 데모페이지
    {
        path: '/DemoLogin',
        component: DemoLogin
    },
    {
        path: '/DemoMain',
        component: DemoMain
    },
    {
        path: '/KitButton',
        component: KitButton
    },
    {
        path: '/KitForm',
        component: KitForm
    },
    {
        path: '/KitProfile',
        component: KitProfile
    },
    {
        path: '/KitPopup',
        component: KitPopup
    },
    {
        path: '/KitEx',
        component: KitEx
    },
];