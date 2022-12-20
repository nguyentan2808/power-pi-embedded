import Button from 'common/components/Button';
import { Embed, Report } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import useHomeViewModel from './useHomeViewModel';

const PowerBI = PowerBIEmbed as any;

const Home = () => {
    const { token, setReport, fullscreen, pbiConfig } = useHomeViewModel();

    return (
        <div className="flex justify-center">
            <Button className="fixed left-2 top-2" onClick={fullscreen}>
                Fullscreen
            </Button>
            {token && (
                <PowerBI
                    cssClassName="m-3 h-[75vh] w-4/5 h-screen"
                    getEmbeddedComponent={(report: Embed) => setReport(report as Report)}
                    embedConfig={pbiConfig}
                />
            )}
        </div>
    );
};

export default Home;
