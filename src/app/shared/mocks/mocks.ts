export class MockData {

    public users: any[] = [
        {
            username: 'alexd',
            password: 'boss',
            email: 'alexdragomir@gmail.com',
            firstName: 'alex',
            lastName: 'dragomir',
            role: 'admin',
            active: true
        },
        {
            username: 'alexv',
            password: 'secret',
            email: 'alexvasile@gmail.com',
            firstName: 'alex',
            lastName: 'vasile',
            role: 'operator',
            active: true
        }
    ];

    customerVisits: any[] = [
        { visitDate: new Date(2020, 1, 20), reason: 'replace summer with winter' },
        { visitDate: new Date(2019, 12, 15), reason: 'tyre service' },
        { visitDate: new Date(2019, 6, 10), reason: 'replace winter with summer' },
        { visitDate: new Date(2018, 12, 5), reason: 'initial visit' }
    ];

    public customerDetails: any = {
        firstName: 'Alex',
        lastName: 'Vasile',
        company: 'Ibm',
        phoneNumber: '0722 333 444',
        email: 'alex@gmail.com',
        licensePlate: 'B123BOS',
        isActive: true
    };

    public serviceDetails: any = {
        visitDate: Date.now(),
        mechanicName: 'Nea Gigi',
        servicesPerformed: 'schimb complet',
        observations: 'e bine ca nu e rau'
    };

    public storagePoint = 'R1E1E1';
    public capsNo = 12;

    public onCarData = [
        { id: null, size: '215 / 65 R15', width: 215, height: 65, diameterType: 15, rimType: 'ALLOY', tyreType: 'REGULAR', brand: 'Continental', wearLevel: 'GOOD', season: 'SUMMER' },
        { id: null, size: '215 / 65 R15', width: 215, height: 65, diameterType: 15, rimType: 'ALLOY', tyreType: 'REGULAR', brand: 'Continental', wearLevel: 'GOOD', season: 'SUMMER' },
        { id: null, size: '215 / 65 R15', width: 215, height: 65, diameterType: 15, rimType: 'ALLOY', tyreType: 'REGULAR', brand: 'Continental', wearLevel: 'OK', season: 'ALL_SEASON' },
        { id: null, size: '215 / 65 R15', width: 215, height: 65, diameterType: 15, rimType: 'ALLOY', tyreType: 'REGULAR', brand: 'Continental', wearLevel: 'OK', season: 'ALL_SEASON' }
    ];

    public inStorageData = [
        { id: null, size: '215 / 65 R15', width: 215, height: 65, diameterType: 15, rimType: 'PLATE', tyreType: 'RUN_FLAT', brand: 'Michelin', wearLevel: 'WARNING', season: 'ALL_SEASON' },
        { id: null, size: '215 / 65 R15', width: 215, height: 65, diameterType: 15, rimType: 'PLATE', tyreType: 'RUN_FLAT', brand: 'Michelin', wearLevel: 'WARNING', season: 'ALL_SEASON' },
        { id: null, size: '215 / 65 R15', width: 215, height: 65, diameterType: 15, rimType: 'PLATE', tyreType: 'RUN_FLAT', brand: 'Michelin', wearLevel: 'DANGER', season: 'WINTER' },
        { id: null, size: '215 / 65 R15', width: 215, height: 65, diameterType: 15, rimType: 'PLATE', tyreType: 'RUN_FLAT', brand: 'Michelin', wearLevel: 'DANGER', season: 'WINTER' }
    ];

}

