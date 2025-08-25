import DevChargeIntro from '../components/DevChargeIntro';
import DevChargeWhat from '../components/DevChargeWhat';
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
        <div className='flex flex-col'>
            <DevChargeIntro />
            <DevChargeWhat />
            <DevChargeWhy />
            <DevChargeFlow />
            <DevChargeFeatures />
            <DevChargeFuture />
        </div>
    );
};

export default LandingPage;



