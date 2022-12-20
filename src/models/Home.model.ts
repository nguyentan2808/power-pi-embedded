import { HomeController } from 'controllers';

class HomeModel {
    static lorem = new Proxy({}, {});
    static cache = new WeakMap();

    static async getLorem() {
        const response = await HomeController.fetchLorem();

        // set to cache, model etc.

        return response;
    }

    static async getEmbeddedToken(groupId: string, reportId: string) {
        return HomeController.fetchEmbeddedToken(groupId, reportId);
    }
}

export default HomeModel;
