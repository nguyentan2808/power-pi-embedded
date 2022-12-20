import useIsMobile from 'common/hooks/useIsMobile';
import { HomeModel } from 'models';
import { models, Report } from 'powerbi-client';
import { useEffect, useState } from 'preact/hooks';

const useHomeViewModel = () => {
    const [token, setToken] = useState('');
    const [report, setReport] = useState<Report | null>(null);
    const isMobile = useIsMobile();

    const pbiConfig: models.IEmbedConfiguration = {
        type: 'report',
        id: '718386f3-6b64-4308-a8d8-f88938d72857',
        accessToken: token,
        tokenType: models.TokenType.Embed,
        settings: {
            layoutType: isMobile ? models.LayoutType.MobilePortrait : models.LayoutType.Master,
        },
    };

    const fullscreen = () => {
        report?.fullscreen();
    };

    useEffect(() => {
        HomeModel.getEmbeddedToken(
            '81f59016-bdce-441f-93e5-4f4ee798a067',
            '718386f3-6b64-4308-a8d8-f88938d72857'
        ).then((token) => setToken(token));
    }, []);

    return {
        token,
        report,
        isMobile,
        setReport,
        pbiConfig,
        fullscreen,
    };
};

export default useHomeViewModel;
