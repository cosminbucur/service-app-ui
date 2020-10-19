export class MockData {

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
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer'},
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer'},
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer'},
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer'}
    ];

    public inStorageData = [
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter'},
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter'},
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter'},
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter'}
    ];

    public customerVisitModel: {
        customerDetails: {
            id: null,
            firstName: 'Alex',
            lastName: 'Vasile',
            company: 'Ibm',
            phoneNumber: '0722 333 444',
            email: 'alex@gmail.com',
            licensePlate: 'B123BOS',
            isActive: true
        },
        serviceDetails: {
            visitDate: '2020-10-20',
            mechanicId: 1,
            servicesPerformed: 'schimb complet',
            observations: 'e bine ca nu e rau'
        },
        tyreDetails: {
            storagePoint: 'R1E1E1',
            capsNo: 12,
            onCarData: [
                { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer'},
                { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer'},
                { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer'},
                { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer'}
            ],
            inStorageData: [
                { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter'},
                { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter'},
                { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter'},
                { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter'}
            ]
        }
    }
}

