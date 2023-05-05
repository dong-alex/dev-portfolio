export const info = {
  baseUrl: 'https://alex-dong-portfolio.vercel.app',
  name: 'Alex Dong',
  about: `3+ years of software engineering working with React, TypeScript, and Golang.`,

  experience: [
    {
      name: 'Arctic Wolf',
      location: 'Kitchener, Waterloo',
      position: 'Software Engineer',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: [
        '- Released new features nearly monthly for over 200 security engineers, covering full-stack work using Golang and TypeScript w/ React. Our application helps to deprecate ES & Kibana being used with Zendesk, effectively reducing ticketing times by 77%.',
        '- Collaborated to serve globalization capabilities to our 24-hour triaging application, allowing a single pane of data streaming from multiple regions. This caused a 66% reduction of mental overhead on multiple region specific navigations and future proofed company expansion to new regions.',
        '- Introduced react-query to separate asynchronous state and incorporate caching into the triaging software. This replaced redux sagas and decreased API calls by over 50%.',
        '- Worked closely with the program manager to conceptualize and release a full feature capable of allowing shared environments during triaging shifts. This provided a clear separation of concerns between shared and consolidated workspaces.',
        '- Involved with the full interview process and mentorship for co-ops and new grads every quarter, as well as the screening process for full time candidates.',
      ],
    },
    {
      name: 'Intuit',
      location: 'Edmonton, Alberta',
      position: 'Software Developer Co-op',
      startDate: 'Jan 2019',
      endDate: 'Dec 2019',
      description: [
        '- Co-developed the main UI for a plugin using React and TypeScript that manages transaction tagging in QuickBooks Online. This new feature will be used by over 5 million users and was showcased in the global QuickBooks Connect conference of 4000 accountants and small business owners.',
        '- Helped implement and release an analytics library utilizing Segment tracking that is used by marketing and engineering teams to better design business solutions via real-time behavioural data.',
        '- Reduced test runtime for a legacy plugin by over 60% (~9 mins to 3 mins) as well as memory usage by 50% (~3GB to 1.5GB) by limiting unnecessary initializations of heavy MVC files during unit tests. This reduced development time for over 5 teams.',
        '- Regenerated full automation regression suites with near 100% upkeep using Selenium and an internal automation library. This includes adjusting respective Jenkins PR builds and test environments to obtain the best reliability.',
      ],
    },
  ],

  education: [
    {
      name: 'University of Alberta',
      location: 'Edmonton, Alberta',
      endDate: '2020',
      description: [`Bachelor's Degree, Computer Science, Mathematics Minor`],
    },
  ],

  socialMedia: {
    github: 'https://github.com/dong-alex',
    linkedin: 'https://www.linkedin.com/in/dongalex/',
  },
}
