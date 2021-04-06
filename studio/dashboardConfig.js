export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606c1e21915164006a902bc8',
                  title: 'Sanity Studio',
                  name: 'myinsanityisreaching-studio',
                  apiId: 'a45a54f7-e665-441a-b834-f2a7344b54fd'
                },
                {
                  buildHookId: '606c1e21746967fe4f49fd4a',
                  title: 'Landing pages Website',
                  name: 'myinsanityisreaching',
                  apiId: '981f346a-64a7-4993-89a9-a22eece7d721'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisfior/myinsanityisreaching',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://myinsanityisreaching.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
