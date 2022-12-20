import { AxiosService } from 'services';

class HomeController {
    static fetcher = AxiosService.axios;

    static async fetchLorem() {}

    static async fetchEmbeddedToken(groupId: string, reportId: string) {
        const res = await HomeController.fetcher.get(
            `/pbi/groups/${groupId}/reports/${reportId}/token`
        );

        return res.data.token;
    }
}

export default HomeController;
