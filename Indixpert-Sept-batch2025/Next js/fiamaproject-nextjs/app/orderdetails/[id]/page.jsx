import ProtectedPage from "../../../component/Provider/ProtectedPage";
import OrderDetails from "../../../component/Order/OrderDetail";

export default function Page() { return <ProtectedPage><OrderDetails /></ProtectedPage>; }
