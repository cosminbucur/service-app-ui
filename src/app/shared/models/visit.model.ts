import { Customer } from './customer.model';
import { StoragePoint } from './storagePoint.model';

export interface CustomerVisit {
    id: number;
    visitDate: Date;
    mechanicId: number;
    servicesPerformed: string;
    observations: string;
    customer: Customer;
    storagePoint: StoragePoint;
}
