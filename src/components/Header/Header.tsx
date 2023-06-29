import { useLocation, useNavigate } from 'react-router-dom';
import './style.scss';

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`)
    }

    const title: string = pathname === '/' ? 'Product list Page' : 'Product Page';

    return (
        <div className='header'>
            <span onClick={handleClick}>{title.toUpperCase()}</span>
        </div>
    )
}

export default Header;