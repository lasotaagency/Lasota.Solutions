export default {
  widgets: [
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
                  buildHookId: '6027f6944e84c75d70803b77',
                  title: 'Sanity Studio',
                  name: 'lasota-solutions-studio',
                  apiId: '0c6aa313-b945-47db-9316-4cf3304fc79a'
                },
                {
                  buildHookId: '6027f6949b021b4f531e1b57',
                  title: 'Blog Website',
                  name: 'lasota-solutions',
                  apiId: '0d98eee8-77f1-4e45-b4a5-bc59af60aec3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lasotaagency/Lasota.Solutions',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lasota-solutions.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
