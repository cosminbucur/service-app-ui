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

    public onCarData = [
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer', capsNo: 4 },
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer', capsNo: 4 },
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer', capsNo: 4 },
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Continental',  wearLevel: 'medium', season: 'summer', capsNo: 4 }
    ];

    public inStorageData = [
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter', capsNo: 4 },
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter', capsNo: 4 },
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter', capsNo: 4 },
        { id: null, size: '215 / 65 R15', rimType: 'alloy', tyreType: 'regular', brand: 'Michelin',  wearLevel: 'medium', season: 'winter', capsNo: 4 }
    ];

}

