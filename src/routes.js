import DemoLogin from "./ui-kit/DemoLogin";
import DemoMain from "./ui-kit/DemoMain";
import KitButton from "./ui-kit/KitButton";
import KitForm from "./ui-kit/KitForm";
import KitProfile from "./ui-kit/KitProfile";
import KitPopup from "./ui-kit/KitPopup";
import KitEx1 from "./ui-kit/KitEx1";
import KitEx2 from "./ui-kit/KitEx2";
import KitEx3 from "./ui-kit/KitEx3";
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
import CreateOff1 from "./pages/signup/CreateOff1";
import CreateOff2 from "./pages/signup/CreateOff2";
import CreateOff3 from "./pages/signup/CreateOff3";
import CreateOff4 from "./pages/signup/CreateOff4";
import SongDetail from "./pages/project/SongDetail";
import MainNotVerified from "./pages/Main/MainNotVerified";
import MainDashboard from "./pages/Main/MainDashboard";
import VerProfile1 from "./pages/Main/VerProfile1";
import VerProfile2 from "./pages/Main/VerProfile2";
import VerProfile3 from "./pages/Main/VerProfile3";
import RecommendCreator from "./pages/list/RecommendCreator";
import RecommendProject from "./pages/list/RecommendProject";
import Connect from "./pages/list/Connect";
import CreateProject1 from "./pages/project/CreateProject1";
import CreateProject2 from "./pages/project/CreateProject2";
import CreateProject3 from "./pages/project/CreateProject3";
import CreateProject4 from "./pages/project/CreateProject4";
import CreateProject5 from "./pages/project/CreateProject5";
import ProjectDetailHome from "./pages/project/ProjectDetailHome";
import ProjectDetailSongs from "./pages/project/ProjectDetailSongs";
import RsvpInfo from "./pages/project/RsvpInfo";
import NewSong1 from "./pages/project/NewSong1";
import NewSong2 from "./pages/project/NewSong2";
import NewSong3 from "./pages/project/NewSong3";
import SongLyrics from "./pages/song/SongLyrics";


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
    {
        path: '/CreateOff1',
        component: CreateOff1
    },
    {
        path: '/CreateOff2',
        component: CreateOff2
    },
    {
        path: '/CreateOff3',
        component: CreateOff3
    },
    {
        path: '/CreateOff4',
        component: CreateOff4
    },
    {
        path: '/SongDetail',
        component: SongDetail
    },
    {
        path: '/RecommendCreator',
        component: RecommendCreator
    },
    {
        path: '/RecommendProject',
        component: RecommendProject
    },
    {
        path: '/Connect',
        component: Connect
    },
    {
        path: '/MainNotVerified',
        component: MainNotVerified
    },
    {
        path: '/MainDashboard',
        component: MainDashboard
    },
    {
        path: '/VerProfile1',
        component: VerProfile1
    },
    {
        path: '/VerProfile2',
        component: VerProfile2
    },
    {
        path: '/VerProfile3',
        component: VerProfile3
    },
    {
        path: '/CreateProject1',
        component: CreateProject1
    },
    {
        path: '/CreateProject2',
        component: CreateProject2
    },
    {
        path: '/CreateProject3',
        component: CreateProject3
    },
    {
        path: '/CreateProject4',
        component: CreateProject4
    },
    {
        path: '/CreateProject5',
        component: CreateProject5
    },
    {
        path: '/ProjectDetailHome',
        component: ProjectDetailHome
    },
    {
        path: '/ProjectDetailSongs',
        component: ProjectDetailSongs
    },
    {
        path: '/RsvpInfo',
        component: RsvpInfo
    },
    {
        path: '/NewSong1',
        component: NewSong1
    },
    {
        path: '/NewSong2',
        component: NewSong2
    },
    {
        path: '/NewSong3',
        component: NewSong3
    },
    {
        path: '/SongLyrics',
        component: SongLyrics
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
        path: '/KitEx1',
        component: KitEx1
    },
    {
        path: '/KitEx2',
        component: KitEx2
    },
    {
        path: '/KitEx3',
        component: KitEx3
    },
];