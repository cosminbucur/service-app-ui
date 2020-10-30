export interface CustomerVisit {
    id: number;
    visitDate: Date;
    mechanicId: number;
    servicesPerformed: string;
    observations: string;
    customer: Customer;
    storagePoint: StoragePoint;
}

export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    company: string;
    phoneNumber: string;
    email: string;
}

export interface StoragePoint {
    id: number;
    code: string;
    numberOfRimCaps: number;
    licensePlate: string;
    mountedTyres: any[];
    storedTyres: any[];
}
