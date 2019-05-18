class Common {

    public serializeObject(data: object): string {
        return JSON.stringify(data);
    }

    public error(message: string): string {
        return this.serializeObject({ success: false, error: message });
    }

}