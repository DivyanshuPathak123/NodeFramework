class User extends BusinessBase {

    constructor() {
        super();
    }

    // Properties
    public userName: string;
    public password: string;
    public name: string;
    public DOB: Date;
    public CreatedOn: Date;
    public CreatedBy: string;
    public ModifiedOn: Date;
    public ModifiedBy: string;
}