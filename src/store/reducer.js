

const initialState ={
    data:[
        {
            id: 1,
            room: '3',
            price: 'Rs. 10,000',
            location: 'Karachi',
            hotel: 'Hotel-1',
            services:{                
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Normal bedding',
                LED:'22 inch, LED display television',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                laundary: 'Laundry service'
            },
            capacity: '1 person'
        },
        {
            id: 2,
            room: '5',
            price: 'Rs. 7,000',
            location: 'Lahore',  
            hotel: 'Hotel-2',          
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Normal bedding',
                iron:'Iron & iron board (on request)',
                laundary: 'Laundry service'
            },
            capacity: '1 person'
        },
        {
            id: 3,
            room: '4',
            price: 'Rs. 6,000',
            location: 'Islamabad',
            hotel: 'Hotel-1',            
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Normal bedding',
                iron:'Iron & iron board (on request)',
                LED:'22 inch, LED display television',
            },
            capacity: '1 person'
        },
        {
            id: 4,
            room: '4',
            price: 'Rs. 8,000',
            location: 'Karachi', 
            hotel: 'Hotel-2',    
            services:{
                bed: "Single Bed",
                food: '3 times(breakfast, lunch & dinner) ',
                Wifi: 'not available',
                AC : 'available'
            },
            capacity: '1 person'
        },
        {
            id: 5,
            room: '1',
            price: 'Rs. 20,000',
            location: 'Peshawar',
            hotel: 'Hotel-5',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                extra: 'Wheel chair',
                LED:'32 inch, LED display television',
                tempController:'Individual temperature control',
                dinning:'24-hour In-room dining',
                TV:'DTH Television',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                businessServices:'24-hour business service',
                laundry:'Laundry service',
                tea:'Tea & coffee maker'
            },
            capacity: '2-4 person'
        },
        {
            id: 6,
            room: '5',
            price: 'Rs. 20,000',
            location: 'Peshawar',
            hotel: 'Hotel-1',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                extra: 'Wheel chair',
                LED:'32 inch, LED display television',
                tempController:'Individual temperature control',
                dinning:'24-hour In-room dining',
                TV:'DTH Television',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                businessServices:'24-hour business service',
                laundry:'Laundry service',
                tea:'Tea & coffee maker'
            },
            capacity: '2-4 person'
        },
        {
            id: 7,
            room: '4',
            price: 'Rs. 17,000',
            location: 'Sialkot',
            hotel: 'Hotel-3',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                businessServices:'24-hour business service',
                laundry:'Laundry service',
            },
            capacity: '2-4 person'
        },
        {
            id: 8,
            room: '4',
            price: 'Rs. 14,000',
            location: 'Karachi',
            hotel: 'Hotel-3',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
            },
            capacity: '2 person'
        },
        {
            id: 9,
            room: '2',
            price: 'Rs. 14,000',
            location: 'Karachi',
            hotel: 'Hotel-4',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
            },
            capacity: '2 person'
        },
        {
            id: 10,
            room: '1',
            price: 'Rs. 14,000',
            location: 'Lahore',
            hotel: 'Hotel-1',
            services:{
                AC:'Air-conditioning',
                Area:'The Junior Suite Double is 37sq m/398sq ft',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                CoffeeTaanle:'Coffee table',
                WritingDesk:'Writing desk',
                Wadrobe:'Walk-in wardrobe',
                Sofa:'Comfortable sitting area with a sofa'
            },
            capacity: '2 person'
        },
        {
            id: 11,
            room: '3',
            price: 'Rs. 25,000',
            location: 'Peshawar',
            hotel: 'Hotel-2',
            services:{
                AC:'Air-conditioning',
                Area:'The King Suite Double is 37sq m/398sq ft',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                Bathroom:'The bathroom is well appointed with a heated floor and features a bathtub as well as a separate shower',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                CoffeeTaanle:'Coffee table',
                WritingDesk:'Writing desk',
                Wadrobe:'Walk-in wardrobe',
                Sofa:'Comfortable sitting area with a sofa',
                extra:'Hairdryer, bathrobes, slippers and deluxe aromatherapy beauty products',
            },
            capacity: '2-4 person'
        },
        {
            id: 12,
            room: '2',
            price: 'Rs. 14,000',
            location: 'Peshawar',
            hotel: 'Hotel-4',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
            },
            capacity: '2 person'
        },
        {
            id: 13,
            room: '2',
            price: 'Rs. 30,000',
            location: 'Islamadad',
            hotel: 'Hotel-2',
            services:{
                AC:'Air-conditioning',
               Area: 'The spacious 27sq m/291sq ft Business King Rooms offer guests luxurious surroundings',
                Area:'The Junior Suite Double is 37sq m/398sq ft',
                Wifi:'Wi-Fi internet access',
                Bed:'King sized bed',
                Bathroom:'The bathroom is well appointed with a heated floor and features a bathtub as well as a separate shower',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                CoffeeTaanle:'Coffee table',
                WritingDesk:'Writing desk',
                Wadrobe:'Walk-in wardrobe',
                Sofa:'Comfortable sitting area with a sofa',
                extra:'Hairdryer, bathrobes, slippers and deluxe aromatherapy beauty products',
            },
            capacity: '2-4 person'
        }, 
        {
            id: 14,
            room: '1',
            price: 'Rs. 14,000',
            location: 'Sialkot',
            hotel: 'Hotel-1',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
            },
            capacity: '2 person'
        }, 
        {
            id: 15,
            room: '2',
            price: 'Rs. 14,000',
            location: 'Lahore',
            hotel: 'Hotel-2',
            services:{
                AC:'Air-conditioning',
                Area:'The Junior Suite Double is 37sq m/398sq ft',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                CoffeeTaanle:'Coffee table',
                WritingDesk:'Writing desk',
                Wadrobe:'Walk-in wardrobe',
                Sofa:'Comfortable sitting area with a sofa'
            },
            capacity: '2 person'
        }, 
        {
            id: 16,
            room: '1',
            price: 'Rs. 17,000',
            location: 'Islamabad',
            hotel: 'Hotel-3',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                businessServices:'24-hour business service',
                laundry:'Laundry service',
            },
            capacity: '2-4 person'
        },
        {
            id: 17,
            room: '2',
            price: 'Rs. 10,000',
            location: 'Sialkot',
            hotel: 'Hotel-2',
            services:{                
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Normal bedding',
                LED:'22 inch, LED display television',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                laundary: 'Laundry service'
            },
            capacity: '1 person'
        },
        {
            id: 18,
            room: '3',
            price: 'Rs. 8,000',
            location: 'Karachi', 
            hotel: 'Hotel-3',    
            services:{
                bed: "Single Bed",
                food: '3 times(breakfast, lunch & dinner) ',
                Wifi: 'not available',
                AC : 'available'
            },
            capacity: '1 person'
        },  
        {
            id: 19,
            room: '3',
            price: 'Rs. 30,000',
            location: 'Islamadad',
            hotel: 'Hotel-4',
            services:{
                AC:'Air-conditioning',
               Area: 'The spacious 27sq m/291sq ft Business King Rooms offer guests luxurious surroundings',
                Area:'The Junior Suite Double is 37sq m/398sq ft',
                Wifi:'Wi-Fi internet access',
                Bed:'King sized bed',
                Bathroom:'The bathroom is well appointed with a heated floor and features a bathtub as well as a separate shower',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                CoffeeTaanle:'Coffee table',
                WritingDesk:'Writing desk',
                Wadrobe:'Walk-in wardrobe',
                Sofa:'Comfortable sitting area with a sofa',
                extra:'Hairdryer, bathrobes, slippers and deluxe aromatherapy beauty products',
            },
            capacity: '2-4 person'
        },
        {
            id: 20,
            room: '3',
            price: 'Rs. 17,000',
            location: 'Sialkot',
            hotel: 'Hotel-4',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                businessServices:'24-hour business service',
                laundry:'Laundry service',
            },
            capacity: '2-4 person'
        },
        {
            id: 21,
            room: '3',
            price: 'Rs. 7,000',
            location: 'Lahore',  
            hotel: 'Hotel-3',          
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Normal bedding',
                iron:'Iron & iron board (on request)',
                laundary: 'Laundry service'
            },
            capacity: '1 person'
        },
        {
            id: 22,
            room: '5',
            price: 'Rs. 14,000',
            location: 'Karachi',
            hotel: 'Hotel-5',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
            },
            capacity: '2 person'
        },
        {
            id: 23,
            room: '5',
            price: 'Rs. 17,000',
            location: 'Islamabad',
            hotel: 'Hotel-5',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                businessServices:'24-hour business service',
                laundry:'Laundry service',
            },
            capacity: '2-4 person'
        },
        {
            id: 24,
            room: '4',
            price: 'Rs. 17,000',
            location: 'Lahore',
            hotel: 'Hotel-4',
            services:{
                AC:'Air-conditioning',
                Wifi:'Wi-Fi internet access',
                Bed:'Luxurious bedding',
                LED:'32 inch, LED display television',
                dinning:'24-hour In-room dining',
                intercom:'Line telephone for intercom',
                complementry:'Complimentary bottled water',
                iron:'Iron & iron board (on request)',
                safe:'Electronic Safe',
                businessServices:'24-hour business service',
                laundry:'Laundry service',
            },
            capacity: '2-4 person'
        },
        {
            id: 25,
            room: '5',
            price: 'Rs. 8,000',
            location: 'Sialkot', 
            hotel: 'Hotel-5',    
            services:{
                bed: "Single Bed",
                food: '3 times(breakfast, lunch & dinner) ',
                Wifi: 'not available',
                AC : 'available'
            },
            capacity: '1 person'
        }, 
           ],
     filteredData : []      ,
    userData: {},
    userCredit: {}
           
}


 function Myreducer(state= initialState, action) {
    switch (action.type) {
        case "FILTERDATA":
           console.log(action.payload);
        return {
            ...state,
            filteredData:   action.payload
          };
        case "GETDATA":
           
        return {
            ...state,
            userData:  action.payload
          };
        case "GETCREDIT":
           
        return {
            ...state,
            userCredit: action.payload
          };
    
        default:
    return state
        }
}
export default Myreducer
