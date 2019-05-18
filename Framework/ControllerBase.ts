class ControllerBase {

    constructor(isAuthEnabled = true) {
        this.init();
    }

    public init() {
        // ControllerBase initialization

        this.actionHandler();
    }

    public actionHandler() {
        // Save, load, delete, getList action handler defined here
        try {

        }
        catch (exception) {
            // TODO Error Handler
        }
    }
}