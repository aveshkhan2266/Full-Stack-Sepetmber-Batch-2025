import ProtectedPage from "../../component/Provider/ProtectedPage";
import OrderSuccess from "../../component/Order/OrderSuccess";

export default function Page() { return <ProtectedPage><OrderSuccess /></ProtectedPage>; }
