//this component holds the initial state of the tasks for the taskTeducer
export const initialState = {
    tasks: [
        { 
            id: 1,
            description: "Clean",
            completed: false,
            category: "Household",
            userId: 1
        },
        { 
            id: 2,
            description: "Meditate",
            completed: false,
            category: "Personal",
            userId: 1
        },
        { 
            id: 3,
            description: "Pay Water Bill",
            completed: false,
            category: "Financial",
            userId: 1
        },
        { 
            id: 4,
            description: "Fix Leaky Faucet",
            completed: false,
            category: "Family",
            userId: 1
        },
    ]
}