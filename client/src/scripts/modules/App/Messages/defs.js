export const CURRENT_MESSAGES_LIST = [];
export const CURRENT_MESSAGE_THREADS = [];

export const EMPTY_MESSAGES_LIST = [];
export const EMPTY_MESSAGE_THREADS = [];

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

export const DEFAULT_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAACOklEQVR4Ae3ZA2ydURwF8P9s2+bjPSdGo0aN08V+URtbL+a8BbO9xfZs2zaCuW7vbDx8uLfp/3dinw+XopRSSimllFJhYm9TjV08wwdoYB0f8ix2mDkTe0p7YIZxDeto/5I6rjHDxGtdkcc72n8H75CXruKn1CAcpi0cHE4NEv9kp+EubXHB3ew08QuH4hFt8cGj5Ajxx9hePE1bYi6k+4gvMJ+29GCe+CEzhvW0ZaQ+PVZ8wDW0ZWatuJfozrqyC9Qluotr2Sra8pOtEtewMkgBrBLXsC9QgX3iGm4EKnBDXOP7QAXeiWt4G6jAW3ENNwMVuCmu4UCgAgc6/DCqE1miO9+7X0oEgtVlF1gjPkiOKHs5Pbx9b2jme7SlxPmSC5we20v8kRjJh6Vt6jlU/JKZztsBj1XcH2zxGG3h4ERqkPgp0R35AhvMOuQT3cVnyRH/O9wt4zjLzaj00/F6/dfj9WrPj9eVUkqpRPeMMTnMxxbu4fWf5uP3uME93IZ5JpcxHi4lzGjWYgPPsom2cNDIs9jAWjNaXJvaw1RyES/SlpmLXGQqHb0Rgsv5hjaEvOJyIt6lWg4nacMNTppcHMu9LqYGL2ijCZ6bGuki0TEVuEIbbXDFVEgU2JsbaWPKRvYOf6C8SBtjLoY6yKbH4h5tvMHd5DgJR6Ivb9E6yK1EX6c3AMGDlRIcZtG6i5ktQWGpywJYKkHxgtMC5yUo1tM6TL0ERes2WkALaAEtEEm0gFJKKaWUUkp9ABvn3SEbw3cFAAAAAElFTkSuQmCC';

export const EXAMPLE_MESSAGE_THREADS = [
    {
        id: 1,
        from: 'Dwight',
        isTalkingToTutor: false,
        thread: [
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
    },
    {
        id: 2,
        from: 'Oscar',
        isTalkingToTutor: false,
        thread: [
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
    },
    {
        id: 3,
        from: 'Angela',
        isTalkingToTutor: false,
        thread: [
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
    },
    {
        id: 4,
        from: 'Pam',
        isTalkingToTutor: false,
        thread: [
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
    },
];

export const fillMessages = () => {
  for (let i = 0; i < CURRENT_MESSAGES_LIST.length; i++) {
    CURRENT_MESSAGES_LIST.pop();
  }

  for (let i = 0; i < EXAMPLE_MESSAGES_LIST.length; i++) {
    CURRENT_MESSAGES_LIST.push(EXAMPLE_MESSAGES_LIST[i]);
  }

  for (let i = 0; i < CURRENT_MESSAGE_THREADS.length; i++) {
    CURRENT_MESSAGE_THREADS.pop();
  }

  for (let i = 0; i < EXAMPLE_MESSAGE_THREADS.length; i++) {
    CURRENT_MESSAGE_THREADS.push(EXAMPLE_MESSAGE_THREADS[i]);
  }
};
