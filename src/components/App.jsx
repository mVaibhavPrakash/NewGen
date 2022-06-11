import { useRef,useEffect,lazy,Suspense} from 'react'
import {Routes,Route} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import getCookie from '../../src/js/getCookie';
import Spinner from './Spinner';
import {setUser} from '../redux/slices/authSlice'
import { setLoggedIn } from '../redux/slices/authSlice';
const Profile = lazy(() => import('../Clients/ProfileClient/src/components/Profile'))
const EditorApp = lazy(() => import('../Clients/EditorClient/src/components/EditorApp'))
const LoginForm =lazy(() => import('../Clients/AuthClient/src/component/LoginForm'))
const SignupForm = lazy(() => import('../Clients/AuthClient/src/component/SignupForm'))
const LandingApp = lazy(() => import('../Clients/LandingpageClient/src/components/LandingApp'))
const Footer = lazy(() => import('../Clients/LandingpageClient/src/components/Footer'))
const BlogBulkUpload = lazy(() => import('../Clients/EditorClient/src/components/bulkpage/BlogBulkUpload'))
const Dashboard = lazy(() => import ('../Clients/Dashboard/Dashboard'));
const App = () => {
    const footerRef = useRef(null)
	const User = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() =>{
        const res =getCookie('username')
        const res1 = getCookie('firstname')
        if(res !== User.username && res){
            dispatch(setUser({username:res,firstname:res1}))
            dispatch(setLoggedIn())
        }
    },[User])
    return (
        <div className='app'>
        <div className="app-container">
            <Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path='/' element={<LandingApp footerRef={footerRef}/>}/>
                    <Route path='/username' element={<Profile footerRef={footerRef}/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/auth/login' element={<LoginForm footerRef={footerRef}/>} />
                    <Route path='/auth/signup' element={<SignupForm footerRef={footerRef}/>} />
                    <Route path='/blog/new' element={<EditorApp footerRef={footerRef}/>}/>
                    <Route path='/blog/bulkupload' element={<BlogBulkUpload />}/>
                </Routes>
            </Suspense>
        </div>
        <Footer footerRef={footerRef}/>
        </div>
    )
}

export default App
