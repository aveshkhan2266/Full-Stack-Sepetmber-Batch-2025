import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StaticProfileCard from "./component/StaticProfileCard";
import UseStateCount from "./component/UseStateCount";
import UseReducerCount from "./component/UseReducerCount";
import TodoList from './component/TodoList';
import RootLayout from './Layout/RootLayout';
import DynamicProfilecomponent from './component/DynamicProfilecomponent';
import RBBadges from './pages/RBBadges';
import RBBreadcrumbs from './pages/RBBreadcrumbs';
import RBButton from './pages/RBButton';
import RBButtonGroup from './pages/RBButtonGroup';
import RBCards from './pages/RBCards';
import RBFigure from './pages/RBFigure';
import RBImages from './pages/RBImages';
import RBListGroup from './pages/RBListgroup';
import RBPagination from './pages/RBPagination';
import RBProgressBars from './pages/RBProgressBars';
import RBSpinners from './pages/RBSpinners';
import RBTables from './pages/RBTables';
import RBAccordion from './pages/RBAccordion';
import RBCarousel from './pages/RBCarousel';
import RBDropdown from './pages/RBDropdowns';
import RBModal from './pages/RBModal';
import RBNavbarOffcanvas from './pages/RBNavbarOffcanvas';
import RBOverlays from './pages/RBOverlays';
import RBNavTabs from './pages/RBNavTabs';
import FormExample from './pages/FormExample';
import FormYupExample from './pages/FormYupExample';
import ProductExample from './pages/ProductExample';
import WishlistExample from './pages/wishlistExample';
import BlogListing from './Blogs/BlogListing';
import BlogDetail from './Blogs/BlogDetail';
import { WishlistContext } from './context/Context';
import WishlistProvider from './context/WishlistProvider';


function App() {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path='/' element={<StaticProfileCard />} />
            <Route path="/dynamicprofile" element={<DynamicProfilecomponent />} />
            <Route path="/usestatecounter" element={<UseStateCount />} />
            <Route path="/usereducercounter" element={<UseReducerCount />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/badges" element={<RBBadges />} />
            <Route path="/breadcrumbs" element={<RBBreadcrumbs />} />
            <Route path="/button" element={<RBButton />} />
            <Route path="/buttonGroup" element={<RBButtonGroup />} />
            <Route path="/cards" element={<RBCards />} />
            <Route path="/figure" element={<RBFigure />} />
            <Route path="/images" element={<RBImages />} />
            <Route path="/listgroup" element={<RBListGroup />} />
            <Route path="/pagination" element={<RBPagination />} />
            <Route path="/progressbars" element={<RBProgressBars />} />
            <Route path="/spinners" element={<RBSpinners />} />
            <Route path="/tables" element={<RBTables />} />
            <Route path="/accordion" element={<RBAccordion />} />
            <Route path="/carousel" element={<RBCarousel />} />
            <Route path="/dropdown" element={<RBDropdown />} />
            <Route path="/modals" element={<RBModal />} />
            <Route path="/offcanvas" element={<RBNavbarOffcanvas />} />
            <Route path="/overlays" element={<RBOverlays />} />
            <Route path="/navtabs" element={<RBNavTabs />} />
            <Route path="/formdata" element={<FormExample />} />
            <Route path="/formyup" element={<FormYupExample />} />
            <Route path="/product" element={<ProductExample />} />
            <Route path="/wishlist" element={<WishlistExample />} />
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/bolg/:id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </WishlistProvider>
    </BrowserRouter>
  );
}

export default App;