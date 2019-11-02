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
                  buildHookId: '5dbd3c2770b2797aee786586',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2nkmaswg',
                  apiId: '62c520ad-abe3-41fc-9413-ced719ad2574'
                },
                {
                  buildHookId: '5dbd3c27c79bebd9bed1f138',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bmrzj5ph',
                  apiId: '7dc6cf90-1f75-4c39-b241-311cca3b9211'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/katielgc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bmrzj5ph.netlify.com', category: 'apps'}
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
