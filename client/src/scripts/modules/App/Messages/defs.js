export const EXAMPLE_MESSAGES_LIST = [
    {
        id: 1,
        isNew: false,
        from: 'Dwight',
        fromPhotoUrl: 'https://vignette.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest/scale-to-width-down/700?cb=20170701082424',
        date: '5/3/19',
        lastMessage: 'Great! How does the upcoming Monday at 2PM sound?',
    },
    {
        id: 2,
        isNew: true,
        from: 'Oscar',
        fromPhotoUrl: 'https://vignette.wikia.nocookie.net/theoffice/images/2/25/Oscar_Martinez.jpg/revision/latest/scale-to-width-down/700?cb=20170701085818',
        date: '4/29/19',
        lastMessage: "Hey Stanley, I'll send you a Google Hangouts invite next week. Let me know if you have any questions.",
    },
    {
        id: 3,
        isNew: false,
        from: 'Angela',
        fromPhotoUrl: 'https://vignette.wikia.nocookie.net/theoffice/images/0/0b/Angela_Martin.jpg/revision/latest/scale-to-width-down/700?cb=20170701090232',
        date: '1/23/19',
        lastMessage: "I was wondering you have any past materials you could send me? Kind of lost right now.",
    },
    {
        id: 4,
        isNew: false,
        from: 'Pam',
        fromPhotoUrl: 'https://vignette.wikia.nocookie.net/theoffice/images/6/67/Pam_Beesley.jpg/revision/latest/scale-to-width-down/700?cb=20170701084358',
        date: '11/4/18',
        lastMessage: "It was great working with you this quarter! Thanks for all the tips and tricks you gave me. I was able to get an easy A without studying as much as my classmates. I'd love to stay connected with you!",
    },
];

export const EXAMPLE_MESSAGE_THREADS = [
    [
        {
            isYou: false,
            from: 'Dwight',
            timestamp: 'Wed May 15 2019 21:10:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Hi Stanley, I saw that you are offering tutoring services for ECON 161A?',
        },
        {
            isYou: true,
            from: 'Stanley',
            timestamp: 'Wed May 15 2019 21:12:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Yes that is correct. My charge is $12/hr. I prefer to work remotely and am available MWF 12PM to 5PM.',
        },
        {
            isYou: false,
            from: 'Dwight',
            timestamp: 'Wed May 15 2019 21:14:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Great!',
        },
    ],
    [
        {
            isYou: false,
            from: 'Oscar',
            timestamp: 'Wed May 15 2019 21:10:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Hi Stanley, I saw that you are offering tutoring services for ECON 161A?',
        },
        {
            isYou: true,
            from: 'Stanley',
            timestamp: 'Wed May 15 2019 21:12:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Yes that is correct. My charge is $12/hr. I prefer to work remotely and am available MWF 12PM to 5PM.',
        },
        {
            isYou: false,
            from: 'Oscar',
            timestamp: 'Wed May 15 2019 21:14:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Great!',
        },
    ],
    [
        {
            isYou: false,
            from: 'Angela',
            timestamp: 'Wed May 15 2019 21:10:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Hi Stanley, I saw that you are offering tutoring services for ECON 161A?',
        },
        {
            isYou: true,
            from: 'Stanley',
            timestamp: 'Wed May 15 2019 21:12:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Yes that is correct. My charge is $12/hr. I prefer to work remotely and am available MWF 12PM to 5PM.',
        },
        {
            isYou: false,
            from: 'Angela',
            timestamp: 'Wed May 15 2019 21:14:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Great!',
        },
    ],
    [
        {
            isYou: false,
            from: 'Pam',
            timestamp: 'Wed May 15 2019 21:10:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Hi Stanley, I saw that you are offering tutoring services for ECON 161A?',
        },
        {
            isYou: true,
            from: 'Stanley',
            timestamp: 'Wed May 15 2019 21:12:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Yes that is correct. My charge is $12/hr. I prefer to work remotely and am available MWF 12PM to 5PM.',
        },
        {
            isYou: false,
            from: 'Pam',
            timestamp: 'Wed May 15 2019 21:14:46 GMT-0700 (Pacific Daylight Time)',
            message: 'Great!',
        },
    ],
];