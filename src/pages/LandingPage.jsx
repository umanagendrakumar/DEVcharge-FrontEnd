import DevChargeIntro from '../components/DevChargeintro';
import DevchargeWhat from '../components/DevchargeWhat';
import DevChargeWhy from '../components/DevChargeWhy';
import DevChargeFeatures from '../components/DevChargeFeatures';
import DevChargeFlow from '../components/DevChargeFlow';
import DevChargeFuture from '../components/DevChargeFuture';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LandingPage = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    if (user) return navigate("/feed");
    return (
        <div className='flex flex-col gap-28 py-20 px-7'>
            <DevChargeIntro />
            <DevchargeWhat />
            <DevChargeWhy />
            <DevChargeFlow />
            <DevChargeFeatures />
            <DevChargeFuture />
        </div>
    );
};

export default LandingPage;



