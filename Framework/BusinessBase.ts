class BusinessBase {

    constructor() {

    }

    public save(id = null) {
        //  save value in db
        try {

        }
        catch (Exception) {
            // TODO Error handler
        }
    };

    public load(id: any) {
        // Load from DB
        try {

        }
        catch (Exception) {
            // TODO Error handler
        }
    };

    public delete(id: any) {
        // Delete entry from DB by Id
        try {

        }
        catch (Exception) {
            // TODO Error Handler
        }
    };

    public getList(startIndex = null, limit = null, filters = []): any {
        // Get record list
    };

    public keyField(): any {
        // return keyField of db
    }

    public getProperties(): any {
        // return all business propertiess
    }

}