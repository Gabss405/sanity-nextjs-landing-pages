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
                  buildHookId: '609e81719dcd83f0ed11dce6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-51ghtwke',
                  apiId: '64a4e03d-5f70-465c-8d59-1cd1e67a2a6c'
                },
                {
                  buildHookId: '609e8172592700e59845e5e0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6nfauoia',
                  apiId: '0581f3c1-48f5-4889-8353-35fb93fafc93'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Gabss405/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6nfauoia.netlify.app', category: 'apps'}
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
