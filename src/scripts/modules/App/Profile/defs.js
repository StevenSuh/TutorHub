export const CURRENT_PROFILE = {
  name: '',
  bio: '',
  photoUrl: '',
  transcriptUrls: [],
  subjects: [],
  availability: '',
};

export const CURRENT_REVIEWS = [];

export const EMPTY_PROFILE = {
  name: '',
  bio: '',
  photoUrl: '',
  transcriptUrls: [],
  subjects: [],
  availability: '',
};

export const EMPTY_REVIEWS = [];

export const EXAMPLE_PROFILE = {
  name: 'Stanley',
  bio: 'Econ major, fourth year. Love to teach! People think I\'m funny',
  photoUrl: 'https://vignette.wikia.nocookie.net/theoffice/images/2/23/Stanley_Hudson.jpg/revision/latest/scale-to-width-down/700?cb=20170701085445',
  transcriptUrls: [
    'https://documentation.skillsoft.com/en_us/skillport/8_i/lh/resources/images/lhc_learner_transcript_page.gif',
    'https://documentation.skillsoft.com/en_us/skillport/8_i/lh/resources/images/lhc_learner_transcript_page.gif',
    'https://documentation.skillsoft.com/en_us/skillport/8_i/lh/resources/images/lhc_learner_transcript_page.gif',
  ],
  subjects: [
    { title: 'Economics', description: 'ECON 10A, ECON 161A, ECON 113' },
    { title: 'Computer Science', description: 'CMPS 12A, CMPS 12B, CMPS 101' },
  ],
  availability: 'Monday — 12PM to 6PM\nWednesday — 10AM to 12PM\nFriday — 5PM to 9PM',
};

export const DEFAULT_IMAGE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAACOklEQVR4Ae3ZA2ydURwF8P9s2+bjPSdGo0aN08V+URtbL+a8BbO9xfZs2zaCuW7vbDx8uLfp/3dinw+XopRSSimllFJhYm9TjV08wwdoYB0f8ix2mDkTe0p7YIZxDeto/5I6rjHDxGtdkcc72n8H75CXruKn1CAcpi0cHE4NEv9kp+EubXHB3ew08QuH4hFt8cGj5Ajxx9hePE1bYi6k+4gvMJ+29GCe+CEzhvW0ZaQ+PVZ8wDW0ZWatuJfozrqyC9Qluotr2Sra8pOtEtewMkgBrBLXsC9QgX3iGm4EKnBDXOP7QAXeiWt4G6jAW3ENNwMVuCmu4UCgAgc6/DCqE1miO9+7X0oEgtVlF1gjPkiOKHs5Pbx9b2jme7SlxPmSC5we20v8kRjJh6Vt6jlU/JKZztsBj1XcH2zxGG3h4ERqkPgp0R35AhvMOuQT3cVnyRH/O9wt4zjLzaj00/F6/dfj9WrPj9eVUkqpRPeMMTnMxxbu4fWf5uP3uME93IZ5JpcxHi4lzGjWYgPPsom2cNDIs9jAWjNaXJvaw1RyES/SlpmLXGQqHb0Rgsv5hjaEvOJyIt6lWg4nacMNTppcHMu9LqYGL2ijCZ6bGuki0TEVuEIbbXDFVEgU2JsbaWPKRvYOf6C8SBtjLoY6yKbH4h5tvMHd5DgJR6Ivb9E6yK1EX6c3AMGDlRIcZtG6i5ktQWGpywJYKkHxgtMC5yUo1tM6TL0ERes2WkALaAEtEEm0gFJKKaWUUkp9ABvn3SEbw3cFAAAAAElFTkSuQmCC';

export const EXAMPLE_REVIEWS = [
  {
    rating: 5,
    date: '2/8/19',
    description: 'Stanley Hudson is one of the funniest and most helpful tutors I\'ve ever had. ' +
      'I passed ECON 10A easily with his help.',
  },
  {
    rating: 4,
    date: '1/12/19',
    description: 'I really enjoyed learning from Mr. Hudson. The only issue that came up was slow ' +
      'responses at times.',
  },
  {
    rating: 4,
    date: '9/21/18',
    description: 'One of the best tutors I\'ve had on this app. Great communication, humorous, and ' +
      'laid-back attitude.',
  },
];

export const fillProfile = () => {
  for (let key in CURRENT_PROFILE) {
    CURRENT_PROFILE[key] = EXAMPLE_PROFILE[key];
  }

  for (let i = 0; i < CURRENT_REVIEWS.length; i++) {
    CURRENT_REVIEWS.pop();
  }
  
  for (let i = 0; i < EXAMPLE_REVIEWS.length; i++) {
    CURRENT_REVIEWS.push(EXAMPLE_REVIEWS[i]);
  }
};
