import { test as setup, expect } from '@playwright/test';

setup('create new article', async ({ request }) => {
    const articleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0', {

        data:{
          "article":{ "tagList":[], "title":"Likes test title","description":"This is a test description","body": "This is a test body" }
          }
        })
        expect(articleResponse.status()).toEqual(201)
        const response = await articleResponse.json()
        const slugId =response.article.slug
        process.env['SLUGID'] = slugId 
      
})
