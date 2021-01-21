import { Customer } from './customer.model';

export interface CustomerVisit {
    id: number;
    visitDate: Date;
    mechanicId: number;
    servicesPerformed: string;
    observations: string;
    customer: Customer;
    storagePoint: StoragePoint;
}

export interface StoragePoint {
    id: number;
    code: string;
    numberOfRimCaps: number;
    licensePlate: string;
    mountedTyres: any[];
    storedTyres: any[];
}
