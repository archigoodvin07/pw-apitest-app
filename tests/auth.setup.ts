import { test as setup } from '@playwright/test';
import user from './mocks/user.json'
import fs from 'fs'

const authFile = './mocks/user.json'

setup('authentication', async({request}) => {

      const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data:{
          "user":{"email": "archi@test.com", "password": "Welcome1"}
        }
      })
      const responseBody = await response.json()
      const accessToken = responseBody.user.token
      user.origins[0].localStorage[0].value = accessToken
      fs.writeFileSync(authFile, JSON.stringify(user))

      process.env['ACCESS_TOKEN'] = accessToken
})