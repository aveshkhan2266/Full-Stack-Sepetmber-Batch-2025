import ProtectedPage from "../../component/Provider/ProtectedPage";
import Account from "../../component/Account/AccountPage";

export default function Page() {
    return (
        <ProtectedPage>
            <Account />
        </ProtectedPage>
    );
}
